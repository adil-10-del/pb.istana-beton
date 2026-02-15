// DATA DEFAULT (bisa kamu isi nanti)
const defaultArticles = [

  // contoh struktur (boleh kosongkan isinya nanti)
  /*
  {
    id: "cara-pasang-grc",
    title: "Cara Memasang List Profil GRC dengan Rapi",
    author: "Admin PB. Istana Beton",
    date: "2026-02-15",
    category: "Tips & Tutorial",
    thumbnail: "../assets/images/profil-jendela-1.jpeg",
    content: `
      <p>Isi artikel di sini...</p>
    `
  }
  */

];

// ================================
// FUNCTION GET ALL ARTICLES
// ================================
function getAllArticles(){
  let local = JSON.parse(localStorage.getItem("articles")) || [];
  return [...defaultArticles, ...local];
}
