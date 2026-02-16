import { supabase } from '../js/supabase.js'


/* ===============================
   AMBIL SEMUA ARTIKEL
================================ */
export async function getAllArticles() {

  const { data, error } = await supabase
    .from('artikel')
    .select(`
      id,
      slug,
      title,
      author,
      category,
      thumbnail,
      views,
      created_at,
      content
    `)
    .order('created_at', { ascending: false });

  if (error) {
    console.error("Error load artikel:", error);
    return [];
  }

  return data ?? [];
}


/* ===============================
   SIMPAN ARTIKEL
================================ */
export async function saveArticle(article) {

  const { data, error } = await supabase
    .from('artikel')
    .insert([article])
    .select()
    .single();

  if (error) {
    console.error("Error simpan artikel:", error);
    return { success:false, error };
  }

  return { success:true, data };
}


/* ===============================
   AMBIL ARTIKEL BY ID
================================ */
export async function getArticleById(id) {

  const { data, error } = await supabase
    .from('artikel')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error("Error ambil artikel:", error);
    return null;
  }

  return data;
}


/* ===============================
   AMBIL ARTIKEL BY SLUG (SEO)
================================ */
export async function getArticleBySlug(slug) {

  const { data, error } = await supabase
    .from('artikel')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error("Error ambil artikel:", error);
    return null;
  }

  return data;
}


/* ===============================
   UPDATE VIEW COUNTER
================================ */
export async function updateArticleViews(id, currentViews = 0) {

  const { error } = await supabase
    .from('artikel')
    .update({ views: currentViews + 1 })
    .eq('id', id);

  if (error) {
    console.error("Error update views:", error);
  }

}

