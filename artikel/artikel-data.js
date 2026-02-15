const defaultArticles = [
  {
    id: "contoh-artikel-pertama",
    title: "Kelebihan GRC untuk Ornamen Bangunan",
    author: "Admin",
    date: "2026-02-15",
    category: "Edukasi Material",
    media: [
      {
        url: "../assets/images/profil-jendela-1.jpeg",
        type: "image/jpeg"
      }
    ],
    content: "<p>Ini adalah artikel pertama percobaan.</p>"
  }
];

function getAllArticles(){
  let saved = localStorage.getItem("articles");

  if(saved){
    return JSON.parse(saved);
  }else{
    localStorage.setItem("articles", JSON.stringify(defaultArticles));
    return defaultArticles;
  }
}

