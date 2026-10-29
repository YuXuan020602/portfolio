/* 拾光集 — 轻量交互脚本，无依赖 */
(function () {
  "use strict";

  /* 移动端菜单 */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") links.classList.remove("open");
    });
  }

  /* 导航高亮（根据当前路径） */
  var path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (href === path || (path === "index.html" && href === "./") || href === "") {
      a.classList.add("active");
    }
  });

  /* 页脚年份 */
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  /* 作品 / 文章 分类筛选 */
  document.querySelectorAll("[data-filter-group]").forEach(function (group) {
    var buttons = group.querySelectorAll(".filter");
    var items = document.querySelectorAll(group.getAttribute("data-filter-group"));
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        buttons.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        var cat = btn.getAttribute("data-filter");
        items.forEach(function (item) {
          var ok = cat === "all" || (item.getAttribute("data-cat") || "").split(" ").indexOf(cat) > -1;
          item.style.display = ok ? "" : "none";
        });
      });
    });
  });
})();
