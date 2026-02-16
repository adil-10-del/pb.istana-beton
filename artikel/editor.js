/* =========================================
   PB ISTANA BETON - RICH EDITOR ENGINE
========================================= */

const Editor = (() => {

  let editorEl = null;

  /* ================= INIT ================= */
  function init(id="editor"){
    editorEl = document.getElementById(id);
    if(!editorEl){
      console.warn("Editor element not found:", id);
    }
  }

  /* ================= BASIC COMMAND ================= */
  function cmd(command, value=null){
    document.execCommand(command,false,value);
    editorEl?.focus();
  }

  /* ================= FORMAT ================= */
  function bold(){ cmd("bold"); }
  function italic(){ cmd("italic"); }
  function underline(){ cmd("underline"); }
  function h2(){ cmd("formatBlock","h2"); }
  function paragraph(){ cmd("formatBlock","p"); }
  function list(){ cmd("insertUnorderedList"); }

  /* ================= INSERT IMAGE ================= */
  function insertImage(url){
    if(!url) return;
    const html = `<img src="${url}" loading="lazy">`;
    insertHTML(html);
  }

  /* ================= INSERT VIDEO ================= */
  function insertVideo(url){
    if(!url) return;
    const html = `
      <video controls style="width:100%;border-radius:10px;margin:20px 0">
        <source src="${url}">
      </video>
    `;
    insertHTML(html);
  }

  /* ================= INSERT HTML ================= */
  function insertHTML(html){
    document.execCommand("insertHTML", false, html);
  }

  /* ================= GET CONTENT ================= */
  function getHTML(){
    return editorEl?.innerHTML.trim() || "";
  }

  function getText(){
    return editorEl?.innerText.trim() || "";
  }

  /* ================= CLEAR ================= */
  function clear(){
    if(editorEl) editorEl.innerHTML = "";
  }

  /* ================= SLUG GENERATOR ================= */
  function makeSlug(text=""){
    return text
      .toLowerCase()
      .replace(/[^\w ]+/g,'')
      .replace(/ +/g,'-')
      .replace(/-+/g,'-')
      .trim();
  }

  /* ================= META DESCRIPTION ================= */
  function makeMetaDesc(text="", max=150){
    return text
      .replace(/\n/g," ")
      .replace(/\s+/g," ")
      .substring(0,max)
      .trim();
  }

  /* ================= AUTO PARAGRAPH CLEANER ================= */
  function cleanHTML(html){
    if(!html) return "";

    // remove empty tags
    html = html.replace(/<p><br><\/p>/g,"");

    // remove multiple breaks
    html = html.replace(/(<br\s*\/?>\s*){3,}/g,"<br><br>");

    return html.trim();
  }

  /* ================= PUBLIC API ================= */
  return {
    init,
    cmd,
    bold,
    italic,
    underline,
    h2,
    paragraph,
    list,
    insertImage,
    insertVideo,
    getHTML,
    getText,
    clear,
    makeSlug,
    makeMetaDesc,
    cleanHTML
  };

})();

