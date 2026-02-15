const defaultArticles = [
  {
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

