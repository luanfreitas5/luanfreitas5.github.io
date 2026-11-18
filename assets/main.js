// Alterna entre tema claro e escuro e guarda a escolha no navegador.
(function () {
  var raiz = document.documentElement;
  var botao = document.getElementById("tema");
  var ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();
  if (!botao) return;

  botao.addEventListener("click", function () {
    var escuroAtual =
      raiz.getAttribute("data-theme") === "dark" ||
      (!raiz.getAttribute("data-theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    var novo = escuroAtual ? "light" : "dark";
    raiz.setAttribute("data-theme", novo);
    try { localStorage.setItem("tema", novo); } catch (e) { /* armazenamento indisponível */ }
  });
})();
