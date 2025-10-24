/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useRef, useState } from 'react'
import assets from '../assets/assets'
import { formatMessageTime, formatLastSeen } from '../lib/utils'
import { ChatContext } from '../../context/ChatContext'
import { AuthContext } from '../../context/AuthContext'
import toast from 'react-hot-toast'

const ChatContainer = () => {

    const { messages, selectedUser, setSelectedUser, sendMessage, getMessages } = useContext(ChatContext)
    const { authUser, onlineUsers } = useContext(AuthContext)

    const scrollEnd = useRef()

    const [input, setInput] = useState('');

    // Check if user is online
    const isOnline = onlineUsers.includes(selectedUser?._id);

    // Handle sending a message
    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (input.trim() === "") return null;
        await sendMessage({ text: input.trim() });
        setInput("")
    }

    // Handle sending an image
    const handleSendImage = (e) => {
        const file = e.target.files[0];
        if (!file || !file.type.startsWith("image/")) {
            toast.error("اختر ملف صورة")
            return;
        }
        const reader = new FileReader();

        reader.onloadend = async () => {
            await sendMessage({ image: reader.result })
            e.target.value = ""
        }
        reader.readAsDataURL(file)
    }

    // Render message status icons
    const renderMessageStatus = (msg) => {
        if (msg.senderId !== authUser._id) return null;
        
        if (msg.seen) {
            return <span className="text-blue-500 text-xs">✓✓</span>;
        } else {
            return <span className="text-gray-400 text-xs">✓✓</span>;
        }
    }

    useEffect(() => {
        if (selectedUser) {
            getMessages(selectedUser._id)
        }
    }, [selectedUser])

    useEffect(() => {
        if (scrollEnd.current && messages) {
            scrollEnd.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [messages])


    return selectedUser ? (
        <div className='h-full overflow-scroll relative bg-[#0a0118]'>
            {/* ---------Header-------- */}
            <div className='flex items-center gap-3 py-3 px-4 bg-[#1a1628] border-b border-gray-800'>
                <img onClick={() => setSelectedUser(null)} src={assets.arrow_icon} alt="" className='md:hidden max-w-5 cursor-pointer' />
                <img src={selectedUser.profilePic || assets.avatar_icon} alt="" className='w-10 h-10 rounded-full object-cover' />
                <div className='flex-1'>
                    <p className='text-white font-medium'>{selectedUser.fullName}</p>
                    <p className='text-xs text-gray-400'>
                        {isOnline ? "متصل الآن" : formatLastSeen(selectedUser.lastSeen)}
                    </p>
                </div>
                <img src={assets.help_icon} alt="" className='max-md:hidden max-w-5 opacity-70' />
            </div>
            
            {/* -------Chat Area--------- */}
            <div 
                className='flex flex-col h-[calc(100%-130px)] overflow-y-scroll p-4 pb-6'
                style={{
                    backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(120, 119, 198, 0.05) 0%, transparent 50%)',
                    backgroundColor: '#0a0118'
                }}
            >
                {messages.map((msg, index) => (
                    <div 
                        key={index} 
                        className={`flex items-end gap-1 mb-2 ${msg.senderId === authUser._id ? 'justify-end' : 'justify-start'}`}
                    >
                        {msg.senderId !== authUser._id && (
                            <img 
                                src={selectedUser?.profilePic || assets.avatar_icon} 
                                alt="" 
                                className='w-7 h-7 rounded-full object-cover mb-1' 
                            />
                        )}
                        
                        <div className={`flex flex-col ${msg.senderId === authUser._id ? 'items-end' : 'items-start'}`}>
                            {msg.image ? (
                                <div className={`relative max-w-[250px] rounded-lg overflow-hidden ${
                                    msg.senderId === authUser._id 
                                        ? 'bg-[#005c4b]' 
                                        : 'bg-[#1f1f1f]'
                                }`}>
                                    <img src={msg.image} alt='' className='w-full h-auto' />
                                    <div className={`absolute bottom-1 right-2 flex items-center gap-1 px-1.5 py-0.5 rounded bg-black/30`}>
                                        <span className='text-[10px] text-white'>{formatMessageTime(msg.createdAt)}</span>
                                        {renderMessageStatus(msg)}
                                    </div>
                                </div>
                            ) : (
                                <div 
                                    className={`relative px-3 py-2 rounded-lg max-w-[280px] shadow-md ${
                                        msg.senderId === authUser._id 
                                            ? 'bg-[#005c4b] text-white rounded-br-none' 
                                            : 'bg-[#1f1f1f] text-white rounded-bl-none'
                                    }`}
                                >
                                    <p className='text-sm break-words whitespace-pre-wrap pr-12'>{msg.text}</p>
                                    <div className='absolute bottom-1 left-2 flex items-center gap-1'>
                                        <span className='text-[10px] text-gray-300'>{formatMessageTime(msg.createdAt)}</span>
                                        {renderMessageStatus(msg)}
                                    </div>
                                </div>
                            )}
                        </div>

                        {msg.senderId === authUser._id && (
                            <img 
                                src={authUser?.profilePic || assets.avatar_icon} 
                                alt="" 
                                className='w-7 h-7 rounded-full object-cover mb-1' 
                            />
                        )}
                    </div>
                ))}
                <div ref={scrollEnd}></div>
            </div>
            
            {/* ----------Bottom Area---------- */}
            <div className='absolute bottom-0 left-0 right-0 flex items-center gap-2 p-3 bg-[#1a1628] border-t border-gray-800'>
                <button className='p-2 hover:bg-white/10 rounded-full transition'>
                    <span className='text-2xl'>😊</span>
                </button>
                
                <div className='flex-1 flex items-center bg-[#2a2438] rounded-full px-4'>
                    <input 
                        onChange={(e) => setInput(e.target.value)} 
                        value={input} 
                        onKeyDown={(e) => e.key === "Enter" ? handleSendMessage(e) : null}
                        type="text" 
                        placeholder='اكتب رسالة...' 
                        className='flex-1 text-sm py-2.5 bg-transparent border-none outline-none text-white placeholder-gray-400' 
                    />
                    <input onChange={handleSendImage} type="file" id='image' accept='image/png, image/jpeg' hidden />
                    <label htmlFor="image" className='cursor-pointer'>
                        <img src={assets.gallery_icon} alt="" className='w-5 opacity-70 hover:opacity-100 transition' />
                    </label>
                </div>
                
                <button 
                    onClick={handleSendMessage}
                    className='bg-[#005c4b] hover:bg-[#00785f] p-2.5 rounded-full transition'
                >
                    <img src={assets.send_button} alt="" className='w-5' />
                </button>
            </div>
        </div>
    ) : (
        <div className='flex flex-col items-center justify-center gap-2 text-gray-500 bg-[#0a0118] max-md:hidden h-full'>
            <img src={assets.logo_icon} className='max-w-16 opacity-50' alt="" />
            <p className='text-lg font-medium text-white'>دردش في أي وقت وأي مكان</p>
            <p className='text-sm text-gray-400'>اختر محادثة لبدء المراسلة</p>
        </div>
    )

}

export default ChatContainer