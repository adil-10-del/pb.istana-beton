import { supabase } from '../js/supabase.js'

// Ambil semua artikel dari database
export async function getAllArticles() {

  const { data, error } = await supabase
    .from('artikel')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error(error)
    return []
  }

  return data
}

// Simpan artikel ke database
export async function saveArticle(article) {

  const { error } = await supabase
    .from('artikel')
    .insert([article])

  if (error) {
    console.error(error)
  }
}
