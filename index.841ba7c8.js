!function(){var e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]");e.addEventListener("click",(function(){var n="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!n),t.classList.toggle("is-open"),document.body.classList.toggle("menu-open")})),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(n){n.matches&&(t.classList.remove("is-open"),e.setAttribute("aria-expanded",!1))}))}();
//# sourceMappingURL=index.841ba7c8.js.map
