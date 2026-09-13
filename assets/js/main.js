(function () {
  var root = document.documentElement;

  // --- Theme toggle -------------------------------------------------------
  function currentTheme() {
    var t = root.getAttribute('data-theme');
    if (t === 'dark' || t === 'light') return t;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  var toggle = document.querySelector('[data-theme-toggle]');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  // --- Math ---------------------------------------------------------------
  // With kramdown's math_engine disabled, $$...$$ reaches the browser as
  // \(...\) / \[...\] (kramdown 2.4, used by GitHub Pages) or as
  // <span|div class="kdmath"> (kramdown >= 2.5). Render both with KaTeX.
  if (window.katex) {
    document.querySelectorAll('.kdmath').forEach(function (el) {
      var tex = el.textContent.trim().replace(/^\$\$?/, '').replace(/\$\$?$/, '');
      try { window.katex.render(tex, el, { displayMode: el.tagName === 'DIV', throwOnError: false }); } catch (e) {}
    });
    if (window.renderMathInElement) {
      window.renderMathInElement(document.getElementById('main') || document.body, {
        delimiters: [
          { left: '\\[', right: '\\]', display: true },
          { left: '\\(', right: '\\)', display: false }
        ],
        ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
        throwOnError: false
      });
    }
  }
})();
