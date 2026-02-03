const { createClient } = require('@supabase/supabase-js');

// استبدلي هذه القيم ببياناتك من Supabase Dashboard
const supabaseUrl = 'https://rwfcmdmxirkidgtwttlg.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ3ZmNtZG14aXJraWRndHd0dGxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk5NDExMTcsImV4cCI6MjA4NTUxNzExN30.T7tImVbsvvpwtWVz--FJ1rlLQ3YMRREgAJYQfLalr8k';

const supabase = createClient(supabaseUrl, supabaseKey);

// تصدير المتغير باسم محدد
module.exports = { supabase };