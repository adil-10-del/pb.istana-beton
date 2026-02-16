import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabaseUrl = 'https://tcuimqhiilfervvjfcey.supabase.co'
const supabaseKey = 'sb_publishable_LINoyHDPvUvWDVB6OHBXWg_1BK_EAIu'

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)
