const express = require('express');
const router = express.Router();
const supabase = require('../app'); 

// 1. جلب كل المحافظات
router.get('/governorate', async (req, res) => {
    // نستخدم الاسم الجديد الظاهر في صورتك
    const { data, error } = await supabase
        .from('governorate') 
        .select('*');

    if (error) {
        console.error("Supabase Error:", error.message);
        return res.status(500).json({ error: error.message });
    }
    
    console.log("Data fetched:", data); // عشان تشوفي البيانات في الـ Terminal عندك
    res.json(data);
});

// 2. جلب المدن (للتأكد أنها تعمل أيضاً)
router.get('/cities/:govId', async (req, res) => {
    const { data, error } = await supabase
        .from('city')
        .select('*')
        .eq('governorate_id', req.params.govId);

    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
});

module.exports = router;