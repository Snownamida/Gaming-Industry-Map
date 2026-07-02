/**
 * Ko-fi in-page donation widget (vanilla, zero dependency).
 * Intercepte les clics sur tout lien vers ko-fi.com/snownamida et ouvre le
 * panneau officiel Ko-fi dans une modale, sans quitter la page.
 * Clic molette / Ctrl-clic / sans JS : le lien s'ouvre normalement.
 */
(function () {
  "use strict";
  var KOFI = "ko-fi.com/snownamida";
  var EMBED = "https://ko-fi.com/snownamida/?hidefeed=true&widget=true&embed=true";
  var overlay = null;
  var loaded = false;

  var lang = (document.documentElement.lang || "en").slice(0, 2).toLowerCase();
  var FALLBACK =
    lang === "zh" ? "面板加载不出来？在新窗口打开 Ko-fi ↗"
    : lang === "fr" ? "Le panneau ne charge pas ? Ouvrir Ko-fi dans un nouvel onglet ↗"
    : "Panel not loading? Open Ko-fi in a new tab ↗";

  function injectStyles() {
    var css =
      ".kofi-ovl{position:fixed;inset:0;background:rgba(15,23,42,.55);backdrop-filter:blur(2px);" +
      "display:flex;align-items:center;justify-content:center;z-index:99999}" +
      ".kofi-ovl[hidden]{display:none}" +
      ".kofi-box{position:relative;background:#f9f9f9;border-radius:16px;width:min(400px,94vw);" +
      "box-shadow:0 18px 60px rgba(0,0,0,.45);overflow:hidden;font-family:system-ui,sans-serif}" +
      ".kofi-x{position:absolute;top:8px;right:8px;z-index:2;width:30px;height:30px;border:0;" +
      "border-radius:50%;background:rgba(15,23,42,.65);color:#fff;font-size:14px;cursor:pointer;line-height:1}" +
      ".kofi-x:hover{background:#e5007d}" +
      ".kofi-box iframe{display:block;border:none;width:100%;height:min(640px,76vh);background:#f9f9f9}" +
      ".kofi-alt{margin:0;padding:8px 12px 10px;text-align:center;font-size:12px;color:#64748b}" +
      ".kofi-alt a{color:inherit}";
    var s = document.createElement("style");
    s.textContent = css;
    document.head.appendChild(s);
  }

  function build() {
    injectStyles();
    overlay = document.createElement("div");
    overlay.className = "kofi-ovl";
    overlay.hidden = true;
    overlay.innerHTML =
      '<div class="kofi-box" role="dialog" aria-label="Ko-fi">' +
      '<button class="kofi-x" aria-label="close">✕</button>' +
      '<div class="kofi-frame"></div>' +
      '<p class="kofi-alt"><a href="https://' + KOFI + '" target="_blank" rel="noopener">' + FALLBACK + "</a></p>" +
      "</div>";
    document.body.appendChild(overlay);
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) close();
    });
    overlay.querySelector(".kofi-x").addEventListener("click", close);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !overlay.hidden) close();
    });
  }

  function open() {
    if (!overlay) build();
    if (!loaded) {
      loaded = true;
      var f = document.createElement("iframe");
      f.src = EMBED;
      f.title = "Ko-fi";
      f.loading = "lazy";
      overlay.querySelector(".kofi-frame").appendChild(f);
    }
    overlay.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function close() {
    overlay.hidden = true;
    document.body.style.overflow = "";
  }

  document.addEventListener("click", function (e) {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target && e.target.closest ? e.target.closest('a[href*="' + KOFI + '"]') : null;
    if (!a) return;
    // ne pas intercepter le lien de secours dans la modale elle-même
    if (overlay && overlay.contains(a)) return;
    e.preventDefault();
    open();
  });
})();
