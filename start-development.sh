#!/bin/bash

echo "🚀 بدء تشغيل تطبيق Quick Chat في بيئة التطوير..."

# نسخ ملفات البيئة للتطوير
cp server/.env.development server/.env
cp client/.env.development client/.env

echo "📦 تثبيت التبعيات..."

# تثبيت تبعيات الخادم
cd server
npm install --quiet
echo "✅ تم تثبيت تبعيات الخادم"

# تثبيت تبعيات العميل
cd ../client
npm install --quiet
echo "✅ تم تثبيت تبعيات العميل"

echo ""
echo "🎉 جاهز للتشغيل!"
echo ""
echo "لتشغيل الخادم: cd server && npm start"
echo "لتشغيل العميل: cd client && npm run dev"
echo ""
echo "أو استخدم الأوامر التالية في نوافذ منفصلة:"
echo "Terminal 1: cd server && npm start"
echo "Terminal 2: cd client && npm run dev"
echo ""
echo "الروابط:"
echo "- العميل: http://localhost:3000"
echo "- الخادم: http://localhost:5000"