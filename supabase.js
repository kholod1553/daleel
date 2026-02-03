const { createClient } = require('@supabase/supabase-js');

// استبدلي هذه القيم ببياناتك من Supabase Dashboard
const supabaseUrl = 'https://rwfcmdmxirkidgtwttlg.supabase.co'; 
const supabaseKey = 'sb_publishable_vbAjEVWkXWlS4pKyoMz0XQ_F_LsB_cl';

const supabase = createClient(supabaseUrl, supabaseKey);

// تصدير المتغير باسم محدد
module.exports = { supabase };