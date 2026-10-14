(function () {
  "use strict";

  /* === 1. ТЕМА === */
  var html       = document.documentElement;
  var themeBtn   = document.getElementById("themeToggle");
  var themeGlyph = themeBtn ? themeBtn.querySelector(".icon-btn__glyph") : null;

  function applyTheme(theme) {
    html.setAttribute("data-theme", theme);
    localStorage.setItem("sined-theme", theme);
    if (themeGlyph) {
      themeGlyph.textContent = theme === "dark" ? "\u25D0" : "\u25CB";
    }
  }

  applyTheme(localStorage.getItem("sined-theme") || "dark");

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      applyTheme(html.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });
  }

  /* === 2. СЧЁТЧИКИ === */
  function animateCount(el) {
    var target   = parseInt(el.getAttribute("data-count"), 10);
    var suffix   = el.getAttribute("data-suffix") || "";
    var duration = 1800;
    var start    = null;

    function easeOut(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function step(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      el.textContent = Math.floor(easeOut(progress) * target)
                         .toLocaleString("ru-RU") + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target.toLocaleString("ru-RU") + suffix;
      }
    }
    requestAnimationFrame(step);
  }

  var stats = document.getElementById("liveStats");

  if (stats) {
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
          stats.querySelectorAll("[data-count]").forEach(animateCount);
          io.disconnect();
        }
      }, { threshold: 0.3 });
      io.observe(stats);
    } else {
      stats.querySelectorAll("[data-count]").forEach(animateCount);
    }
  }

  /* === 3. FADE-IN КАРТОЧЕК === */
  if ("IntersectionObserver" in window) {
    var fo = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          fo.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".step,.build,.feature,.stat")
      .forEach(function (el) {
        el.classList.add("fade-in");
        fo.observe(el);
      });
  }

})();