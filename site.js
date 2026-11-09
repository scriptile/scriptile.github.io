(function () {
  var buttons = document.querySelectorAll(".switch button");
  function set(l) {
    document.querySelectorAll("[data-l]").forEach(function (el) {
      if (el.tagName === "BUTTON") el.setAttribute("aria-pressed", String(el.dataset.l === l));
      else el.hidden = el.dataset.l !== l;
    });
    document.body.classList.toggle("zh", l === "zh");
    document.documentElement.lang = l === "zh" ? "zh-Hant" : "en";
    try { localStorage.setItem("lang", l); } catch (_) {}
  }
  buttons.forEach(function (b) { b.addEventListener("click", function () { set(b.dataset.l); }); });
  var saved = null;
  try { saved = localStorage.getItem("lang"); } catch (_) {}
  set(saved === "en" ? "en" : "zh");
})();
