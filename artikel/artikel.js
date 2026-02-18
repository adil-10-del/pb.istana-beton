const ArtikelAPI = {

  async getAll() {
    const { data, error } = await supabaseClient
      .from("artikel")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      return [];
    }
    return data || [];
  },

  async getBySlug(slug) {
    const { data } = await supabaseClient
      .from("artikel")
      .select("*")
      .eq("slug", slug)
      .single();

    return data || null;
  },

  async save(article) {
    const { error } = await supabaseClient
      .from("artikel")
      .insert([article]);

    return { success: !error, error };
  },

  async addView(id, views = 0) {
    await supabaseClient
      .from("artikel")
      .update({ views: views + 1 })
      .eq("id", id);
  }

};

window.ArtikelAPI = ArtikelAPI;




