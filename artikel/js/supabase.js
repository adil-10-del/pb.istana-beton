// Pastikan CDN supabase sudah dipanggil sebelum file ini
// https://cdn.jsdelivr.net/npm/@supabase/supabase-js

const SUPABASE_URL = "https://tcuimqhiilfervvjfcey.supabase.co";
const SUPABASE_KEY = "sb_publishable_LINoyHDPvUvWDVB6OHBXWg_1BK_EAIu";

// Global variable
window.supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

