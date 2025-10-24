# 🚀 التشغيل السريع - Quick Chat

## 🎯 التشغيل المحلي (التطوير)

### الطريقة الأسرع - ملف واحد:
```bash
# تشغيل ملف الإعداد التلقائي
chmod +x start-development.sh
./start-development.sh
```

### الطريقة اليدوية:

#### 1. إعداد الخادم:
```bash
cd server
cp .env.development .env
npm install
npm start
```

#### 2. إعداد العميل (نافذة جديدة):
```bash
cd client  
cp .env.development .env
npm install
npm run dev
```

#### 3. فتح التطبيق:
- 🌐 **العميل**: http://localhost:3000
- 🔧 **الخادم**: http://localhost:5000

---

## 🐳 التشغيل باستخدام Docker

### 1. إعداد متغيرات البيئة:
```bash
# حرر ملف docker-compose.yml
# أضف معلومات Cloudinary الخاصة بك
```

### 2. تشغيل كامل المشروع:
```bash
docker-compose up -d
```

### 3. إيقاف المشروع:
```bash
docker-compose down
```

---

## 🌐 النشر على Render.com

### راجع الدليل الكامل:
📖 **[DEPLOY_INSTRUCTIONS.md](./DEPLOY_INSTRUCTIONS.md)**

### خطوات مختصرة:
1. **إنشاء مستودعين** على GitHub
2. **إعداد MongoDB Atlas** (مجاني)
3. **إعداد Cloudinary** (مجاني)  
4. **نشر Backend** على Render
5. **نشر Frontend** على Render
6. **تحديث CORS** والروابط

---

## ✅ التحقق من التشغيل

### اختبار الخادم:
```bash
curl http://localhost:5000
# يجب أن ترى: {"message": "Quick Chat Server is running!"}
```

### اختبار API:
```bash
curl http://localhost:5000/api/status
# يجب أن ترى: {"status": "Server is live"}
```

### اختبار العميل:
- افتح http://localhost:3000
- أنشئ حساب جديد
- اختبر إرسال رسالة

---

## 🐛 حل المشاكل السريع

### مشكلة: خطأ في الاتصال بقاعدة البيانات
```bash
# تأكد من رابط MongoDB في .env
MONGODB_URI="mongodb+srv://..."
```

### مشكلة: خطأ CORS
```bash  
# تأكد من CLIENT_URL في server/.env
CLIENT_URL="http://localhost:3000"
```

### مشكلة: لا يعمل Socket.io
```bash
# تأكد من VITE_BACKEND_URL في client/.env
VITE_BACKEND_URL="http://localhost:5000"
```

### مشكلة: خطأ في رفع الصور
```bash
# تأكد من معلومات Cloudinary في server/.env
CLOUDINARY_CLOUD_NAME="..."
CLOUDINARY_API_KEY="..."
CLOUDINARY_API_SECRET="..."
```

---

## 📋 متطلبات النظام

- **Node.js**: 18+ ([تحميل](https://nodejs.org))
- **npm**: مضمن مع Node.js
- **MongoDB**: Atlas مجاني ([إنشاء حساب](https://mongodb.com/atlas))
- **Cloudinary**: مجاني ([إنشاء حساب](https://cloudinary.com))

---

## 🎉 نجح التشغيل؟

إذا رأيت الواجهة تعمل، تهانينا! 🎊

### الخطوات التالية:
1. **أنشئ حساب جديد** في التطبيق
2. **اختبر الدردشة** مع نفسك
3. **جرب رفع صورة** في الملف الشخصي
4. **ادع صديق** لتجربة الدردشة معاً

### للنشر على الإنترنت:
📖 راجع [دليل النشر الكامل](./DEPLOY_INSTRUCTIONS.md)

---

## 💡 نصائح سريعة

- **للتطوير**: استخدم `npm run dev` للعميل للتحديث التلقائي
- **للإنتاج**: استخدم `npm run build` ثم `npm run preview`
- **لمراقبة الخادم**: راقب الـ console للرسائل والأخطاء
- **لحفظ البيانات**: ستبقى بياناتك في MongoDB حتى لو أوقفت الخادم

---

**🎯 هدفنا**: تشغيل سريع في أقل من 5 دقائق!**

إذا واجهت مشاكل، راجع الدليل الكامل أو أنشئ issue في GitHub.