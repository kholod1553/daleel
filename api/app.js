const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/favicon.ico', (req, res) => res.status(204).end());

// 3. Supabase Connection
const supabaseUrl = 'https://rwfcmdmxirkidgtwttlg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ3ZmNtZG14aXJraWRndHd0dGxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk5NDExMTcsImV4cCI6MjA4NTUxNzExN30.T7tImVbsvvpwtWVz--FJ1rlLQ3YMRREgAJYQfLalr8k';
const supabase = createClient(supabaseUrl, supabaseKey);
app.get('/', (req, res) => {
    res.send('✅ Daleel API is Running successfully!');
});
const locationRoutes = require('../routes/locationRoutes');
app.use('/api/locations', locationRoutes);
app.get('/', (req, res) => {
    res.send('Daleel API is Running successfully! ✅');
});
module.exports = app;

if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log(`✅ Server is running on http://localhost:${port}`);
    });
}