const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
const supabaseUrl = 'https://rwfcmdmxirkidgtwttlg.supabase.co'; 
const supabaseKey = 'sb_publishable_vbAjEVWkXWlS4pKyoMz0XQ_F_LsB_cl';
const supabase = createClient(supabaseUrl, supabaseKey);
module.exports = supabase;
const locationRoutes = require('./routes/locationRoutes');
app.use('/api/locations', locationRoutes);
app.listen(port, () => {
    console.log(`✅ Server is running on http://localhost:${port}`);
});
