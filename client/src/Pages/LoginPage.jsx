import React, { useContext, useState } from 'react'
import assets from '../assets/assets'
import { AuthContext } from '../../context/AuthContext'

const LoginPage = () => {

  const [currState, setCurrState] = useState("إنشاء حساب")
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [bio, setBio] = useState("")
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);

  const {login} = useContext(AuthContext)

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (currState === 'إنشاء حساب' && !isDataSubmitted) {
      setIsDataSubmitted(true);
      return;
    }

    login(currState=== "إنشاء حساب" ? 'signup' : 'login',{fullName, email, password, bio})
  }

  return (
    <div className='min-h-screen bg-cover bg-center flex items-center justify-center
     gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl'>
      {/* ---------- Left ---------- */}
      <img src={assets.logo_big} alt="" className='w-[min(30vw,250px)]' />

      {/* --------- Right --------- */}

      <form onSubmit={onSubmitHandler} className='border-2 bg-white/8 text-white border-gray-500 p-6 flex
       flex-col gap-6 rounded-lg shadow-lg'>
        <h2 className='font-medium text-2xl flex justify-between items-center'>
          {currState}
          {
            isDataSubmitted && <img onClick={() => setIsDataSubmitted(false)} src={assets.arrow_icon}
              alt="" className='w-5 cursor-pointer' />
          }
        </h2>

        {currState === "إنشاء حساب" && !isDataSubmitted && (
          <input onChange={(e) => setFullName(e.target.value)} value={fullName}
            type="text" className='p-2 border border-gray-500 rounded-md focus:outline-none'
            placeholder='الاسم الكامل' required />
        )}

        {!isDataSubmitted && (
          <>
            <input onChange={(e) => setEmail(e.target.value)} value={email}
              type="email" placeholder='البريد الإلكتروني' required className='p-2 border border-gray-500
           rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500' />
            <input onChange={(e) => setPassword(e.target.value)} value={password}
              type="password" placeholder='كلمة المرور' required className='p-2 border border-gray-500
           rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500' />
          </>
        )}

        {
          currState === "إنشاء حساب" && isDataSubmitted && (
            <textarea onChange={(e) => setBio(e.target.value)} value={bio}
              rows={4} className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2
               focus:ring-indigo-500' placeholder='اكتب نبذة مختصرة عنك...' required></textarea>
          )
        }

        <button type='submit' className='py-3 bg-gradient-to-r from-purple-400 to-violet-600 text-white
         rounded-md cursor-pointer'>
          {currState === "إنشاء حساب" ? "إنشاء الحساب" : "تسجيل الدخول"}
        </button>

        <div className='flex items-center gap-2 text-sm text-gray-500'>
          <input type="checkbox" />
          <p>الموافقة على شروط الاستخدام وسياسة الخصوصية</p>
        </div>

        <div className='flex flex-col gap-2'>
          {currState === "إنشاء حساب" ? (
            <p className='text-sm text-gray-600'>لديك حساب بالفعل؟ <span onClick={() => {
              setCurrState("تسجيل الدخول");
              setIsDataSubmitted(false)
            }} className='font-medium text-violet-500 cursor-pointer'>سجل دخولك هنا</span></p>
          ) : (
            <p className='text-sm text-gray-600'>إنشاء حساب جديد <span onClick={() => setCurrState("إنشاء حساب")}
              className='font-medium text-violet-500 cursor-pointer'>اضغط هنا</span></p>
          )}
        </div>

      </form>
    </div>
  )
}

export default LoginPage 