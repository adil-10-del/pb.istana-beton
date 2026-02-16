import { supabase } from '../js/supabase.js'

// Ambil semua artikel
export async function getAllArticles() {

  const { data, error } = await supabase
    .from('artikel')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error("Error load artikel:", error);
    return [];
  }

  return data ?? [];
}


// Simpan artikel
export async function saveArticle(article) {

  const { data, error } = await supabase
    .from('artikel')
    .insert([article])
    .select();

  if (error) {
    console.error("Error simpan artikel:", error);
    return { success:false, error };
  }

  return { success:true, data };
}

export async function getArticleById(id) {

  const { data, error } = await supabase
    .from('artikel')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}
