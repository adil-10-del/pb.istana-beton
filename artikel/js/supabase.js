import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://tcuimqhiilfervvjfcey.supabase.co'
const supabaseKey = 'sb_publishable_LINoyHDPvUvWDVB6OHBXWg_1BK_EAIu'

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)
