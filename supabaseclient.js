// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// ใส่ค่า URL และ Key ของ Supabase ที่คุณได้รับจากการตั้งค่า Supabase ของคุณ
const supabaseUrl = 'https://qkiwwxenhfogpaetmxkk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFraXd3eGVuaGZvZ3BhZXRteGtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzExNTQyODAsImV4cCI6MjA0NjczMDI4MH0.pCGKLBQIr8QhXCTzIs_NjP9McB7sdZeTHo2fp3VW0pI';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
