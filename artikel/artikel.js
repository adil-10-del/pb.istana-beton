/* ========================================
   ARTIKEL SERVICE (GLOBAL VERSION)
   Compatible GitHub Pages + Supabase CDN
======================================== */


/* ===============================
   AMBIL SEMUA ARTIKEL
================================ */
async function getAllArticles() {
  try {
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

    if (error) throw error;
    return data || [];
  } catch (err) {
    console.error("Error load artikel:", err);
    return [];
  }
}


/* ===============================
   SIMPAN ARTIKEL
================================ */
async function saveArticle(article) {
  try {
    const { data, error } = await supabase
      .from('artikel')
      .insert([article])
      .select()
      .single();

    if (error) throw error;

    return { success: true, data };
  } catch (err) {
    console.error("Error simpan artikel:", err);
    return { success: false, error: err };
  }
}


/* ===============================
   AMBIL ARTIKEL BY ID
================================ */
async function getArticleById(id) {
  try {
    const { data, error } = await supabase
      .from('artikel')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  } catch (err) {
    console.error("Error ambil artikel:", err);
    return null;
  }
}


/* ===============================
   AMBIL ARTIKEL BY SLUG (SEO)
================================ */
async function getArticleBySlug(slug) {
  try {
    const { data, error } = await supabase
      .from('artikel')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) throw error;
    return data;
  } catch (err) {
    console.error("Error ambil artikel:", err);
    return null;
  }
}


/* ===============================
   UPDATE VIEW COUNTER
================================ */
async function updateArticleViews(id, currentViews = 0) {
  try {
    const { error } = await supabase
      .from('artikel')
      .update({ views: currentViews + 1 })
      .eq('id', id);

    if (error) throw error;
  } catch (err) {
    console.error("Error update views:", err);
  }
}


/* ===============================
   AMBIL ARTIKEL TERKAIT
================================ */
async function getRelatedArticles(currentId, limit = 3) {
  try {
    const { data, error } = await supabase
      .from('artikel')
      .select('id,title,slug')
      .neq('id', currentId)
      .limit(limit);

    if (error) throw error;
    return data || [];
  } catch (err) {
    console.error("Error related artikel:", err);
    return [];
  }
}


/* ========================================
   EXPORT GLOBAL (OPTIONAL)
   biar bisa dipanggil window.getAllArticles()
======================================== */
window.ArtikelAPI = {
  getAllArticles,
  saveArticle,
  getArticleById,
  getArticleBySlug,
  updateArticleViews,
  getRelatedArticles
};


