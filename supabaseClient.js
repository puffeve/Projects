// src/services/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qkiwwxenhfogpaetmxkk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFraXd3eGVuaGZvZ3BhZXRteGtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzExNTQyODAsImV4cCI6MjA0NjczMDI4MH0.pCGKLBQIr8QhXCTzIs_NjP9McB7sdZeTHo2fp3VW0pI';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
