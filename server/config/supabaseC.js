
const { createClient } = require('@supabase/supabase-js')
const supabaseUrl = 'https://hgjkkfcdibinxpbwdnnd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhnamtrZmNkaWJpbnhwYndkbm5kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkxMDgxNzMsImV4cCI6MjAwNDY4NDE3M30.MNl8RFM4oeySAUlkkj6sirvYMi9QgypHbuZO_m4KpNM'
const supabase = createClient(supabaseUrl, supabaseKey)

module.exports = supabase;
