// CDN Supabase harus diload dulu di HTML

const SUPABASE_URL = "https://tcuimqhiilfervvjfcey.supabase.co";
const SUPABASE_KEY = "sb_publishable_LINoyHDPvUvWDVB6OHBXWg_1BK_EAIu";

window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

