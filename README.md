# 💬 Quick Chat - تطبيق الدردشة الفورية

<div align="center">
  <img src="client/public/favicon.svg" alt="Quick Chat Logo" width="100" height="100">
  
  ### تطبيق دردشة فورية حديث مبني بـ React و Node.js
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)](https://nodejs.org/)
  [![React](https://img.shields.io/badge/React-19-blue)](https://reactjs.org/)
  [![Socket.io](https://img.shields.io/badge/Socket.io-4.8-black)](https://socket.io/)
</div>

---

## 🌟 المميزات

### 💬 الدردشة
- **دردشة فورية** باستخدام WebSocket
- **حالة الاتصال** (متصل/غير متصل)
- **آخر ظهور** للمستخدمين
- **إرسال الصور** والملفات
- **واجهة عربية** مدعومة بالكامل

### 🔐 الأمان
- **تشفير كلمات المرور** باستخدام bcrypt
- **مصادقة JWT** آمنة
- **حماية الجلسات** والتحقق التلقائي
- **تحديد أحجام الملفات** المرفوعة

### 🎨 التصميم
- **واجهة حديثة** تشبه WhatsApp
- **تصميم متجاوب** على جميع الأجهزة
- **Tailwind CSS** للتصميم
- **رسوم متحركة** سلسة

### ☁️ التخزين
- **MongoDB Atlas** لحفظ البيانات
- **Cloudinary** لحفظ الصور
- **تحسين الأداء** والتخزين المؤقت

---

## 🚀 التشغيل السريع

### متطلبات النظام
- Node.js 18+ 
- MongoDB (Atlas مفضل)
- Cloudinary Account (للصور)

### 1. استنساخ المشروع
```bash
git clone https://github.com/your-username/Quick_Chat.git
cd Quick_Chat
```

### 2. إعداد الخادم (Backend)
```bash
cd server
npm install
cp .env.example .env
# حرر ملف .env وأضف معلوماتك
npm start
```

### 3. إعداد العميل (Frontend)
```bash
cd ../client
npm install
cp .env.example .env
# حرر ملف .env وأضف رابط الخادم
npm run dev
```

### 4. فتح التطبيق
- العميل: `http://localhost:3000`
- الخادم: `http://localhost:5000`

---

## 📦 هيكل المشروع

```
Quick_Chat/
├── 📁 client/                 # React Frontend
│   ├── 📁 src/
│   │   ├── 📁 Components/     # مكونات واجهة المستخدم
│   │   ├── 📁 Pages/          # صفحات التطبيق
│   │   ├── 📁 context/        # إدارة الحالة
│   │   └── 📁 assets/         # الصور والأيقونات
│   ├── 📄 package.json
│   └── 📄 vite.config.js
├── 📁 server/                 # Node.js Backend
│   ├── 📁 controllers/        # منطق التحكم
│   ├── 📁 models/             # نماذج قاعدة البيانات
│   ├── 📁 routes/             # مسارات API
│   ├── 📁 middleware/         # وسطاء المصادقة
│   ├── 📁 lib/                # أدوات مساعدة
│   ├── 📄 server.js           # ملف الخادم الرئيسي
│   └── 📄 package.json
├── 📄 DEPLOY_INSTRUCTIONS.md  # دليل النشر الكامل
└── 📄 README.md              # هذا الملف
```

---

## 🛠️ التقنيات المستخدمة

### Frontend
- **React 19** - مكتبة واجهة المستخدم
- **Vite** - أداة البناء السريع
- **Tailwind CSS** - إطار تصميم CSS
- **Socket.io Client** - الاتصال الفوري
- **Axios** - طلبات HTTP
- **React Router** - التنقل بين الصفحات
- **React Hot Toast** - الإشعارات

### Backend
- **Node.js** - بيئة تشغيل JavaScript
- **Express** - إطار خادم الويب
- **Socket.io** - الاتصال الفوري
- **MongoDB** - قاعدة البيانات
- **Mongoose** - ODM للـ MongoDB
- **JWT** - مصادقة المستخدمين
- **bcryptjs** - تشفير كلمات المرور
- **Cloudinary** - تخزين الصور
- **CORS** - مشاركة الموارد

---

## 🌐 النشر على Render.com

### 📋 الدليل الكامل
راجع ملف [DEPLOY_INSTRUCTIONS.md](./DEPLOY_INSTRUCTIONS.md) للحصول على دليل شامل ومفصل لنشر التطبيق على Render.com مجاناً.

### ⚡ خطوات سريعة
1. **إنشاء مستودعين على GitHub** (frontend + backend)
2. **إعداد MongoDB Atlas** (مجاني)  
3. **إعداد Cloudinary** (مجاني)
4. **نشر Backend** على Render كـ Web Service
5. **نشر Frontend** على Render كـ Static Site
6. **تحديث متغيرات البيئة** وإعدادات CORS

---

## 📱 لقطات من التطبيق

### 🔐 شاشة تسجيل الدخول
- تسجيل دخول/إنشاء حساب
- واجهة بسيطة وأنيقة
- التحقق من صحة البيانات

### 💬 شاشة الدردشة الرئيسية
- قائمة المحادثات على اليسار
- منطقة الرسائل في الوسط
- معلومات المستخدم على اليمين
- حالة الاتصال الفورية

### 👤 شاشة الملف الشخصي  
- تحديث الصورة الشخصية
- تغيير الاسم
- إعدادات الحساب

---

## 🤝 المساهمة

نرحب بمساهماتكم! إليكم كيفية المساهمة:

### 1. Fork المشروع
```bash
git clone https://github.com/your-username/Quick_Chat.git
```

### 2. إنشاء فرع جديد
```bash
git checkout -b feature/amazing-feature
```

### 3. Commit التغييرات
```bash
git commit -m 'Add some AmazingFeature'
```

### 4. Push إلى الفرع
```bash
git push origin feature/amazing-feature
```

### 5. فتح Pull Request

---

## 🐛 الإبلاغ عن الأخطاء

إذا واجهت أي مشاكل:

1. **تحقق من المشاكل الموجودة** في GitHub Issues
2. **أنشئ issue جديد** مع التفاصيل التالية:
   - وصف المشكلة
   - خطوات إعادة إنتاج المشكلة  
   - البيئة (نظام التشغيل، متصفح، إلخ)
   - لقطات شاشة إن أمكن

---

## 📝 الترخيص

هذا المشروع مرخص تحت [MIT License](https://opensource.org/licenses/MIT) - راجع ملف [LICENSE](LICENSE) للتفاصيل.

---

## 🙏 شكر وتقدير

- **Socket.io** للاتصال الفوري الرائع
- **Tailwind CSS** للتصميم الجميل
- **MongoDB Atlas** لقاعدة البيانات المجانية
- **Cloudinary** لتخزين الصور
- **Render.com** للاستضافة المجانية

---

## 📞 التواصل والدعم

- 📧 **البريد الإلكتروني**: your-email@example.com
- 🐛 **الأخطاء**: [GitHub Issues](https://github.com/your-username/Quick_Chat/issues)
- 💬 **المناقشات**: [GitHub Discussions](https://github.com/your-username/Quick_Chat/discussions)

---

## 🎯 الخطط المستقبلية

### 🚀 المميزات القادمة
- [ ] **دردشة جماعية** (Group Chat)
- [ ] **مكالمات صوتية** (Voice Calls)
- [ ] **مكالمات فيديو** (Video Calls)
- [ ] **مشاركة الملفات** المتقدمة
- [ ] **الوضع المظلم** (Dark Mode)
- [ ] **الإشعارات** (Push Notifications)
- [ ] **البحث** في الرسائل
- [ ] **الأرشفة** والتصنيف
- [ ] **التشفير** من النهاية للنهاية
- [ ] **تطبيق الهاتف** (React Native)

### 🔧 التحسينات التقنية
- [ ] **Redis** للتخزين المؤقت
- [ ] **GraphQL** لتحسين API
- [ ] **TypeScript** للأمان
- [ ] **تحسين الأداء** والسرعة
- [ ] **اختبارات** شاملة
- [ ] **CI/CD** pipeline
- [ ] **مراقبة** الأداء
- [ ] **تحليلات** الاستخدام

---

<div align="center">
  
  ### 🌟 إذا أعجبك المشروع، لا تنس النجمة! ⭐
  
  **صنع بـ ❤️ من أجل مجتمع المطورين العرب**
  
  [⬆️ العودة للأعلى](#-quick-chat---تطبيق-الدردشة-الفورية)
  
</div>