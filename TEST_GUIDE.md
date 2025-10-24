# 🧪 دليل اختبار مشروع التواصل

## 📋 معلومات الخادم

**🌐 رابط الخادم:** `https://5000-is5e8z01qxtiutku3m0ic-cbeee0f9.sandbox.novita.ai`

**✅ حالة الخادم:** `/api/status`
- الرابط الكامل: https://5000-is5e8z01qxtiutku3m0ic-cbeee0f9.sandbox.novita.ai/api/status

---

## 🔧 إدارة قاعدة البيانات

### حذف جميع المستخدمين
```bash
cd /home/user/webapp/server && node clearUsers.js
```

### عرض جميع المستخدمين
```bash
cd /home/user/webapp/server && node checkUsers.js
```

---

## 🧪 اختبار API

### 1️⃣ التحقق من حالة الخادم

```bash
curl https://5000-is5e8z01qxtiutku3m0ic-cbeee0f9.sandbox.novita.ai/api/status
```

**النتيجة المتوقعة:** `Server is live`

---

### 2️⃣ إنشاء حساب جديد (Sign Up)

**الرابط:** `POST /api/auth/signup`

```bash
curl -X POST https://5000-is5e8z01qxtiutku3m0ic-cbeee0f9.sandbox.novita.ai/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "fullName": "اسم المستخدم",
    "password": "123456",
    "bio": "السيرة الذاتية"
  }'
```

**الحقول المطلوبة:**
- ✅ `email`: البريد الإلكتروني (يجب أن يكون فريد)
- ✅ `fullName`: الاسم الكامل (6 أحرف على الأقل)
- ✅ `password`: كلمة المرور (6 أحرف على الأقل)
- ✅ `bio`: السيرة الذاتية

**النتيجة المتوقعة:**
```json
{
  "success": true,
  "userData": {
    "email": "user@example.com",
    "fullName": "اسم المستخدم",
    "profilePic": "",
    "bio": "السيرة الذاتية",
    "_id": "68fb7de067f7d2a5299bf19c",
    "createdAt": "2025-10-24T13:23:44.054Z",
    "updatedAt": "2025-10-24T13:23:44.054Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "message": "Account Created Successfully"
}
```

---

### 3️⃣ تسجيل الدخول (Login)

**الرابط:** `POST /api/auth/login`

```bash
curl -X POST https://5000-is5e8z01qxtiutku3m0ic-cbeee0f9.sandbox.novita.ai/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "123456"
  }'
```

**الحقول المطلوبة:**
- ✅ `email`: البريد الإلكتروني
- ✅ `password`: كلمة المرور

**النتيجة المتوقعة (نجاح):**
```json
{
  "success": true,
  "userData": {
    "_id": "68fb7de067f7d2a5299bf19c",
    "email": "user@example.com",
    "fullName": "اسم المستخدم",
    "profilePic": "",
    "bio": "السيرة الذاتية"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "message": "Login Successfully"
}
```

**النتيجة المتوقعة (فشل - كلمة مرور خاطئة):**
```json
{
  "success": false,
  "message": "Invalid Credentials"
}
```

---

### 4️⃣ التحقق من التوثيق (Check Auth)

**الرابط:** `GET /api/auth/check`

```bash
curl -X GET https://5000-is5e8z01qxtiutku3m0ic-cbeee0f9.sandbox.novita.ai/api/auth/check \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

---

## 📊 حالة قاعدة البيانات الحالية

✅ **تم حذف جميع المستخدمين القدامى (46 مستخدم)**
✅ **تم إنشاء 2 مستخدم جديد للاختبار:**

1. **Test User**
   - البريد: `test@example.com`
   - كلمة المرور: `123456`
   - السيرة: `This is a test user`

2. **Second User**
   - البريد: `user2@example.com`
   - كلمة المرور: `pass1234`
   - السيرة: `I am the second test user`

---

## ✅ نتائج الاختبار

### ✔️ تم اختبار بنجاح:

1. ✅ **حالة الخادم**: يعمل بشكل صحيح
2. ✅ **حذف المستخدمين**: تم حذف 46 مستخدم قديم
3. ✅ **إنشاء حساب جديد**: يعمل بشكل صحيح
4. ✅ **تسجيل الدخول الصحيح**: يعمل بشكل صحيح
5. ✅ **تسجيل الدخول بكلمة مرور خاطئة**: يظهر رسالة خطأ صحيحة
6. ✅ **التحقق من تشفير كلمة المرور**: يتم التشفير بواسطة bcrypt
7. ✅ **توليد JWT Token**: يعمل بشكل صحيح
8. ✅ **قاعدة البيانات MongoDB**: متصلة وتعمل بشكل صحيح

---

## 🔍 ملاحظات إضافية

- الخادم يعمل على المنفذ 5000
- يتم استخدام MongoDB Atlas للتخزين
- يتم تشفير كلمات المرور باستخدام bcrypt
- يتم توليد JWT Token عند التسجيل/تسجيل الدخول
- Socket.IO متصل ويعمل لوظيفة الدردشة الفورية

---

## 🚀 تشغيل الخادم

```bash
cd /home/user/webapp/server && node server.js
```

---

**📅 تاريخ الاختبار:** 2025-10-24  
**✅ الحالة:** جميع الاختبارات نجحت بنجاح
