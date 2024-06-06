const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://njzymgyacqkmbktvxebg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qenltZ3lhY3FrbWJrdHZ4ZWJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQzNzkyNTMsImV4cCI6MjAyOTk1NTI1M30.y0-UPsUAehtJAy5_8AzZXin_tGMjTJxBXm9tokLggvA'
const supabase = createClient(supabaseUrl, supabaseKey)

module.exports = supabase