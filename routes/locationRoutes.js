const express = require('express');
const router = express.Router();
// تأكدي أن المسار '../supabase' يشير للملف الذي يحتوي على createClient
const supabase = require('../supabase'); 

router.get('/governorate', async (req, res) => {
    const { data, error } = await supabase
        .from('governorate') 
        .select('*');

    if (error) {
        console.error("Supabase Error:", error.message);
        return res.status(500).json({ error: error.message });
    }
    
    res.json(data);
});

router.get('/cities/:govId', async (req, res) => {
    const { data, error } = await supabase
        .from('city')
        .select('*')
        .eq('governorate_id', req.params.govId);

    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
});

module.exports = router;