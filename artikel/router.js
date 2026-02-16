/* =========================================
   ROUTER SLUG SEO - GITHUB PAGES
========================================= */

(function(){

  // Ambil path sekarang
  const path = window.location.pathname;

  // Cek apakah buka slug .html
  if(path.endsWith(".html") && !path.endsWith("post.html")){

    // Ambil slug
    const slug = path.split("/").pop().replace(".html","");

    // Simpan slug ke session
    sessionStorage.setItem("artikel_slug", slug);

    // Redirect ke template viewer
    window.location.replace("/artikel/post.html");
  }

})();

/* =========================================
   HELPER GET SLUG
========================================= */
function getSlug(){
  const urlParams = new URLSearchParams(window.location.search);
  const qSlug = urlParams.get("slug");

  if(qSlug) return qSlug;

  return sessionStorage.getItem("artikel_slug");
}

