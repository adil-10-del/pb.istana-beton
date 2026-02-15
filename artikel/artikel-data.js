// Artikel default kosong
const defaultArticles = [];

// Ambil semua artikel
function getAllArticles(){
  let saved = localStorage.getItem("articles");

  if(saved){
    return JSON.parse(saved);
  }else{
    localStorage.setItem("articles", JSON.stringify(defaultArticles));
    return defaultArticles;
  }
}

// Simpan artikel
function saveArticles(data){
  localStorage.setItem("articles", JSON.stringify(data));
}




