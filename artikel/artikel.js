// ===============================
// CMS API - Artikel
// GitHub Pages Friendly
// ===============================

const ArtikelAPI = {

  // ===============================
  // GET ALL ARTICLES
  // ===============================
  async getAll() {
    try {
      const { data, error } = await supabaseClient
        .from("artikel")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Load artikel error:", error);
        return [];
      }

      return data || [];
    } catch (err) {
      console.error("Fatal getAll:", err);
      return [];
    }
  },

  // ===============================
  // GET BY SLUG (SEO)
  // ===============================
  async getBySlug(slug) {
    try {
      const { data, error } = await supabaseClient
        .from("artikel")
        .select("*")
        .eq("slug", slug)
        .single();

      if (error) {
        console.warn("Artikel tidak ditemukan:", slug);
        return null;
      }

      return data;
    } catch (err) {
      console.error("Fatal getBySlug:", err);
      return null;
    }
  },

  // ===============================
  // SAVE ARTICLE
  // ===============================
  async save(article) {
    try {
      const { error } = await supabaseClient
        .from("artikel")
        .insert([article]);

      if (error) {
        console.error("Insert error:", error);
        return { success: false, error };
      }

      return { success: true };
    } catch (err) {
      console.error("Fatal save:", err);
      return { success: false, error: err };
    }
  },

  // ===============================
  // UPDATE VIEWS
  // ===============================
  async addView(id, currentViews = 0) {
    try {
      await supabaseClient
        .from("artikel")
        .update({ views: currentViews + 1 })
        .eq("id", id);
    } catch (err) {
      console.warn("View update fail:", err);
    }
  },

  // ===============================
  // GET RELATED ARTICLES
  // ===============================
  async getRelated(currentSlug, limit = 3) {
    try {
      const { data } = await supabaseClient
        .from("artikel")
        .select("slug,title")
        .neq("slug", currentSlug)
        .order("created_at", { ascending: false })
        .limit(limit);

      return data || [];
    } catch (err) {
      console.warn("Related error:", err);
      return [];
    }
  },

  // ===============================
  // GENERATE SLUG
  // ===============================
  slugify(text) {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
  },

  // ===============================
  // AUTO META DESCRIPTION
  // ===============================
  makeMetaDesc(html, length = 150) {
    const text = html.replace(/<[^>]*>/g, "");
    return text.substring(0, length);
  }

};

// expose global
window.ArtikelAPI = ArtikelAPI;



