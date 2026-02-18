(function () {
  const path = window.location.pathname;

  // contoh: /artikel/cara-pasang-grc.html
  if (path.includes("/artikel/") && path.endsWith(".html")) {

    if (path.endsWith("post.html") || path.endsWith("index.html") || path.endsWith("submit.html")) {
      return; // skip template pages
    }

    const slug = path.split("/").pop().replace(".html", "");

    sessionStorage.setItem("slug", slug);
    window.location.replace("/artikel/post.html");
  }
})();

function getSlug() {
  const params = new URLSearchParams(location.search);
  return params.get("slug") || sessionStorage.getItem("slug");
}
