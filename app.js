const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const cors = require('cors');

const app = express();
const port = 3000;

// 1. الإعدادات الأساسية
app.use(cors());
app.use(express.json());

// 2. إعداد الاتصال بـ Supabase (استخدمي قيمك الحقيقية هنا)
const supabaseUrl = 'https://rwfcmdmxirkidgtwttlg.supabase.co'; 
const supabaseKey = 'sb_publishable_vbAjEVWkXWlS4pKyoMz0XQ_F_LsB_cl';
const supabase = createClient(supabaseUrl, supabaseKey);
module.exports = supabase;
const locationRoutes = require('./routes/locationRoutes');
app.use('/api/locations', locationRoutes);

// 4. تشغيل السيرفر
app.listen(port, () => {
    console.log(`✅ Server is running on http://localhost:${port}`);
});