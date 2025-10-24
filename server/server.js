import express from "express";
import "dotenv/config";
import cors from "cors";
import http from "http";
import { connectDB } from "./lib/db.js";
import userRouter from "./routes/userRoutes.js";
import messageRouter from "./routes/messageRoutes.js";
import { Server } from "socket.io";
import User from "./models/User.js";

// Create Express app HTTP server
const app = express();
const server = http.createServer(app);

// Initialize Socket.io server with proper CORS for production
export const io = new Server(server, {
  cors: { 
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST"],
    credentials: true
  },
  transports: ['websocket', 'polling']
});

// Store online users
export const userSocketMap = {}; // {userId: socketId}

// Socket.io connection handler
io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;
  console.log("User connected: ", userId);

  if (userId) {
    userSocketMap[userId] = socket.id;
    // Update lastSeen to null when user connects (means online now)
    User.findByIdAndUpdate(userId, { lastSeen: null }).catch(err => console.error(err));
  }

  // Emit online users to all connected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", async () => {
    console.log("User disconnected: ", userId);
    if (userId) {
      // Update lastSeen to current time when user disconnects
      await User.findByIdAndUpdate(userId, { lastSeen: new Date() }).catch(err => console.error(err));
    }
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

// Middleware setup
app.use(express.json({ limit: "4mb" }));
app.use(cors({
  origin: process.env.CLIENT_URL || "*",
  credentials: true
}));

// Basic health check route
app.get("/", (req, res) => {
  res.json({ 
    message: "Quick Chat Server is running!", 
    timestamp: new Date().toISOString(),
    status: "online"
  });
});

// Routes setup
app.use("/api/status", (req, res) => res.json({ status: "Server is live", timestamp: new Date().toISOString() }));
app.use("/api/auth", userRouter);
app.use("/api/messages", messageRouter);

// Connect to MongoDB
try {
  await connectDB();
  console.log("✅ Database connected successfully");
} catch (error) {
  console.error("❌ Database connection failed:", error);
  process.exit(1);
}

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server is running on Port: ${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔗 Client URL: ${process.env.CLIENT_URL || 'Not set'}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  server.close(() => {
    console.log('Process terminated');
  });
});

// Export Server for deployment platforms
export default server;