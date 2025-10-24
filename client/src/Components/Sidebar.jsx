/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import assets from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { ChatContext } from '../../context/ChatContext'
import { formatLastSeen } from '../lib/utils'

const Sidebar = () => {
    const { getUsers, users, selectedUser, setSelectedUser,
        unseenMessages, setUnseenMessages } = useContext(ChatContext)

    const { logout, onlineUsers } = useContext(AuthContext)

    const [input, setInput] = useState(false)

    const navigate = useNavigate();

    const filteredUsers = input ? users.filter((user) => user.fullName.toLowerCase().
        includes(input.toLowerCase())) : users;

    useEffect(() => {
        getUsers();
    }, [onlineUsers])


    return (
        <div className={`bg-[#1a1628] h-full p-4 overflow-y-scroll text-white border-l border-gray-800
        ${selectedUser ? "max-md:hidden" : ''}`}>
            <div className='pb-4'>
                <div className='flex justify-between items-center mb-5'>
                    <img src={assets.logo} alt="logo" className='max-w-32' />
                    <div className='relative py-2 group'>
                        <img src={assets.menu_icon} alt="Menu" className='max-h-5 cursor-pointer opacity-70 hover:opacity-100 transition' />
                        <div className='absolute top-full left-0 z-20 w-40 p-3 rounded-lg bg-[#2a2438] border
                         border-gray-700 text-gray-100 hidden group-hover:block shadow-xl'>
                            <p onClick={() => navigate('/profile')} className='cursor-pointer text-sm py-2 px-2 hover:bg-white/10 rounded transition'>تعديل الملف الشخصي</p>
                            <hr className='my-1 border-t border-gray-700' />
                            <p onClick={() => logout()} className='cursor-pointer text-sm py-2 px-2 hover:bg-white/10 rounded transition text-red-400'>تسجيل خروج</p>
                        </div>
                    </div>
                </div>

                <div className='bg-[#2a2438] rounded-lg flex items-center gap-3 py-2.5 px-4'>
                    <img src={assets.search_icon} alt="Search" className='w-4 opacity-60' />
                    <input onChange={(e) => setInput(e.target.value)} type="text"
                        className='bg-transparent border-none outline-none text-white text-sm
                     placeholder-gray-400 flex-1' placeholder='ابحث عن محادثة...' />
                </div>

            </div>

            <div className='flex flex-col gap-0.5'>
                {filteredUsers.map((user, index) => {
                    const isOnline = onlineUsers.includes(user._id);
                    return (
                        <div 
                            onClick={() => { 
                                setSelectedUser(user);
                                setUnseenMessages(prev => ({ ...prev, [user._id]: 0 }));
                            }}
                            key={index} 
                            className={`relative flex items-center gap-3 p-3 rounded-lg cursor-pointer transition
                                hover:bg-[#2a2438] ${selectedUser?._id === user._id ? 'bg-[#2a2438]' : ''}`}
                        >
                            <div className='relative'>
                                <img 
                                    src={user?.profilePic || assets.avatar_icon} 
                                    alt=""
                                    className='w-12 h-12 rounded-full object-cover' 
                                />
                                {isOnline && (
                                    <span className='absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#1a1628] rounded-full'></span>
                                )}
                            </div>
                            
                            <div className='flex-1 min-w-0'>
                                <div className='flex justify-between items-baseline mb-0.5'>
                                    <p className='font-medium text-white truncate'>{user.fullName}</p>
                                    {unseenMessages[user._id] > 0 && (
                                        <span className='text-xs bg-[#00a884] text-white px-1.5 py-0.5 rounded-full min-w-[20px] text-center'>
                                            {unseenMessages[user._id]}
                                        </span>
                                    )}
                                </div>
                                <p className='text-xs text-gray-400 truncate'>
                                    {isOnline ? "متصل الآن" : formatLastSeen(user.lastSeen)}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    )
}

export default Sidebar