// ============================================================
// NewsVibe — Main Script (Homepage + Global)
// ============================================================

(function () {
  "use strict";

  // ===== DOM REFS =====
  const navbar = document.getElementById("navbar");
  const themeToggle = document.getElementById("themeToggle");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");
  const articlesGrid = document.getElementById("articlesGrid");
  const filterTabs = document.getElementById("filterTabs");
  const noResults = document.getElementById("noResults");
  const loadMoreWrap = document.getElementById("loadMoreWrap");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const backToTop = document.getElementById("backToTop");
  const toast = document.getElementById("toast");
  const pageProgress = document.getElementById("pageProgress");
  const trendingGrid = document.getElementById("trendingGrid");
  const categoriesGrid = document.getElementById("categoriesGrid");
  const statArticles = document.getElementById("statArticles");
  const adStickyClose = document.getElementById("adStickyClose");
  const adStickyMobile = document.getElementById("adStickyMobile");

  // ===== STATE =====
  let currentFilter = "All";
  let currentSearch = "";
  let displayedCount = 6;
  const PAGE_SIZE = 3;

  // ===== THEME =====
  const savedTheme = localStorage.getItem("nv-theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("nv-theme", next);
    });
  }

  // ===== NAVBAR SCROLL =====
  window.addEventListener("scroll", () => {
    if (!navbar) return;
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Page progress
    if (pageProgress) {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
      pageProgress.style.width = pct + "%";
    }

    // Back to top
    if (backToTop) {
      if (window.scrollY > 500) {
        backToTop.classList.add("visible");
      } else {
        backToTop.classList.remove("visible");
      }
    }
  }, { passive: true });

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ===== HAMBURGER =====
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
    // Close on outside click
    document.addEventListener("click", (e) => {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove("open");
      }
    });
  }

  // ===== SCROLL REVEAL =====
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

  function observeReveal() {
    document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
  }

  // ===== ANIMATED COUNTER =====
  function animateCount(el, target) {
    let start = 0;
    const duration = 1500;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        el.textContent = target;
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(start);
      }
    }, step);
  }

  if (statArticles && typeof ARTICLES !== 'undefined') {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        animateCount(statArticles, ARTICLES.length);
        obs.disconnect();
      }
    });
    obs.observe(statArticles);
  }

  // ===== FORMAT VIEWS =====
  function fmtViews(n) {
    if (n >= 1000) return (n / 1000).toFixed(1) + "k";
    return n;
  }

  // ===== BUILD ARTICLE CARD =====
  function buildArticleCard(article, isFeatured = false) {
    const card = document.createElement("article");
    card.className = `article-card reveal${isFeatured ? " featured" : ""}`;
    card.dataset.keywords = article.tags.join(" ") + " " + article.title.toLowerCase() + " " + article.category.toLowerCase();
    card.setAttribute("aria-label", article.title);

    card.innerHTML = `
      <div class="article-img-wrap">
        <div class="article-img" style="background: ${article.gradient}">
          <span style="font-size:${isFeatured ? "3.5rem" : "2.5rem"}">${article.emoji}</span>
        </div>
        <span class="article-tag">${article.category}</span>
        ${article.trending ? '<span class="trending-label">🔥 Trending</span>' : ""}
      </div>
      <div class="article-body">
        <div class="article-meta">
          <span>${article.date}</span>
          <span>•</span>
          <span>${article.readTime}</span>
        </div>
        <h3 class="article-title">${article.title}</h3>
        <p class="article-excerpt">${article.excerpt}</p>
        <div class="article-footer">
          <a href="article.html?slug=${article.slug}" class="read-more" aria-label="Read ${article.title}">Read Full Story →</a>
          <span class="article-views">👁️ ${fmtViews(article.views)}</span>
        </div>
      </div>
    `;

    card.addEventListener("click", (e) => {
      if (!e.target.closest("a")) {
        window.location.href = `article.html?slug=${article.slug}`;
      }
    });

    return card;
  }

  // ===== RENDER ARTICLES =====
  function getFilteredArticles() {
    if (!ARTICLES) return [];
    return ARTICLES.filter(a => {
      const matchCat = currentFilter === "All" || a.category === currentFilter;
      const matchSearch = !currentSearch || (
        a.title.toLowerCase().includes(currentSearch) ||
        a.excerpt.toLowerCase().includes(currentSearch) ||
        a.tags.some(t => t.includes(currentSearch)) ||
        a.category.toLowerCase().includes(currentSearch)
      );
      return matchCat && matchSearch;
    });
  }

  function renderArticles() {
    if (!articlesGrid) return;
    articlesGrid.innerHTML = "";

    const filtered = getFilteredArticles();
    const toShow = filtered.slice(0, displayedCount);

    if (toShow.length === 0) {
      if (noResults) noResults.style.display = "flex";
      if (loadMoreWrap) loadMoreWrap.style.display = "none";
      return;
    }

    if (noResults) noResults.style.display = "none";

    toShow.forEach((article, i) => {
      const isFeatured = i === 0 && currentFilter === "All" && !currentSearch;
      const card = buildArticleCard(article, isFeatured);
      articlesGrid.appendChild(card);
    });

    // Load more visibility
    if (loadMoreWrap) {
      loadMoreWrap.style.display = filtered.length > displayedCount ? "block" : "none";
    }

    observeReveal();
  }

  // ===== FILTER TABS =====
  function buildFilterTabs() {
    if (!filterTabs || typeof CATEGORIES === 'undefined') return;
    filterTabs.innerHTML = "";
    CATEGORIES.forEach(cat => {
      const btn = document.createElement("button");
      btn.className = `filter-tab${cat === "All" ? " active" : ""}`;
      btn.textContent = cat;
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", cat === "All");
      btn.id = `tab-${cat.toLowerCase()}`;
      btn.addEventListener("click", () => {
        currentFilter = cat;
        displayedCount = 6;
        document.querySelectorAll(".filter-tab").forEach(t => {
          t.classList.remove("active");
          t.setAttribute("aria-selected", "false");
        });
        btn.classList.add("active");
        btn.setAttribute("aria-selected", "true");
        renderArticles();
      });
      filterTabs.appendChild(btn);
    });
  }

  // ===== LOAD MORE =====
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      displayedCount += PAGE_SIZE;
      renderArticles();
      loadMoreBtn.textContent = "Loading...";
      setTimeout(() => { loadMoreBtn.textContent = "Load More Articles ↓"; }, 600);
    });
  }

  // ===== TRENDING GRID =====
  function buildTrendingGrid() {
    if (!trendingGrid || typeof ARTICLES === 'undefined') return;
    const trending = ARTICLES.filter(a => a.trending);
    trendingGrid.innerHTML = "";
    trending.forEach((a, i) => {
      const card = document.createElement("div");
      card.className = "trending-card reveal";
      card.setAttribute("role", "article");
      card.setAttribute("aria-label", a.title);
      card.innerHTML = `
        <span class="trending-rank">${String(i + 1).padStart(2, "0")}</span>
        <div class="trending-info">
          <div class="t-cat">${a.category}</div>
          <h3>${a.title}</h3>
          <div class="t-meta">
            <span>👁️ ${fmtViews(a.views)}</span>
            <span>${a.readTime}</span>
          </div>
        </div>
        <span class="fire-badge">🔥</span>
      `;
      card.addEventListener("click", () => {
        window.location.href = `article.html?slug=${a.slug}`;
      });
      trendingGrid.appendChild(card);
    });
  }

  // ===== CATEGORIES GRID =====
  const CAT_DATA = [
    { name: "Health", icon: "🏥", desc: "Mental health, fitness, nutrition, and medical breakthroughs.", color: "#6c63ff" },
    { name: "Technology", icon: "💻", desc: "AI, gadgets, cybersecurity, and the future of digital life.", color: "#00b4d8" },
    { name: "Environment", icon: "🌿", desc: "Climate change, sustainability, and green innovations.", color: "#43c6ac" },
    { name: "Finance", icon: "💰", desc: "Personal finance tips, markets, economy, and investing basics.", color: "#f7971e" },
    { name: "Education", icon: "🎓", desc: "Learning strategies, career growth, and global education trends.", color: "#e040fb" },
    { name: "World", icon: "🌐", desc: "Geopolitics, diplomacy, global events, and social movements.", color: "#ff6584" },
  ];

  function buildCategoriesGrid() {
    if (!categoriesGrid) return;
    categoriesGrid.innerHTML = "";
    CAT_DATA.forEach((cat, i) => {
      const count = typeof ARTICLES !== 'undefined' ? ARTICLES.filter(a => a.category === cat.name).length : 0;
      const card = document.createElement("div");
      card.className = "cat-card reveal";
      card.style.cssText = `--delay:${i * 0.1}s; --cat-color: ${cat.color}`;
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `Browse ${cat.name} articles`);
      card.innerHTML = `
        <span class="cat-icon">${cat.icon}</span>
        <h3>${cat.name}</h3>
        <p>${cat.desc}</p>
        <span class="cat-count">${count} article${count !== 1 ? "s" : ""}</span>
      `;
      card.addEventListener("click", () => {
        window.location.href = `category.html?cat=${encodeURIComponent(cat.name)}`;
      });
      categoriesGrid.appendChild(card);
    });
  }

  // ===== LIVE SEARCH =====
  function showSearchResults(query) {
    if (!searchResults || typeof ARTICLES === 'undefined') return;
    const q = query.toLowerCase().trim();
    if (!q) {
      searchResults.classList.remove("open");
      return;
    }

    const matches = ARTICLES.filter(a =>
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.tags.some(t => t.includes(q)) ||
      a.category.toLowerCase().includes(q)
    ).slice(0, 5);

    if (matches.length === 0) {
      searchResults.innerHTML = `<div class="search-result-item"><div class="sr-info"><p>No results for "<strong>${query}</strong>"</p></div></div>`;
    } else {
      searchResults.innerHTML = matches.map(a => `
        <div class="search-result-item" onclick="window.location.href='article.html?slug=${a.slug}'" role="option" tabindex="0" aria-label="${a.title}">
          <span class="sr-emoji">${a.emoji}</span>
          <div class="sr-info">
            <h4>${a.title}</h4>
            <p>${a.excerpt.substring(0, 70)}…</p>
          </div>
          <span class="sr-tag">${a.category}</span>
        </div>
      `).join("");
    }

    searchResults.classList.add("open");
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase().trim();
      currentSearch = q;
      showSearchResults(e.target.value);

      // Also filter the main articles grid
      displayedCount = 6;
      renderArticles();
    });

    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        searchInput.value = "";
        currentSearch = "";
        searchResults.classList.remove("open");
        renderArticles();
      }
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".search-bar") && !e.target.closest(".search-results")) {
        if (searchResults) searchResults.classList.remove("open");
      }
    });
  }

  window.clearSearch = function () {
    if (searchInput) searchInput.value = "";
    currentSearch = "";
    if (searchResults) searchResults.classList.remove("open");
    displayedCount = 6;
    renderArticles();
  };

  // ===== NEWSLETTER =====
  window.handleSubscribe = function (e) {
    e.preventDefault();
    const emailInput = document.getElementById("nlEmail");
    const email = emailInput ? emailInput.value : "";
    if (!email) return;

    // Simulate subscription
    const submitBtn = document.getElementById("nlSubmitBtn");
    if (submitBtn) {
      submitBtn.textContent = "Subscribing…";
      submitBtn.disabled = true;
    }

    setTimeout(() => {
      if (emailInput) emailInput.value = "";
      if (submitBtn) {
        submitBtn.textContent = "Subscribe Free →";
        submitBtn.disabled = false;
      }

      // Update subscriber count
      const sc = document.getElementById("subscriberCount");
      if (sc) {
        const cur = parseInt(sc.textContent.replace(/,/g, "")) || 12400;
        sc.textContent = (cur + 1).toLocaleString() + "+";
      }

      showToast("🎉 You're subscribed! Check your inbox for a confirmation email.");
    }, 1200);
  };

  // ===== TOAST =====
  function showToast(message, duration = 3500) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), duration);
  }

  window.showToast = showToast;

  // ===== AD STICKY CLOSE =====
  if (adStickyClose && adStickyMobile) {
    adStickyClose.addEventListener("click", () => {
      adStickyMobile.style.display = "none";
    });
  }

  // ===== TICKER DUPLICATE (for seamless loop) =====
  const tickerTrack = document.getElementById("tickerTrack");
  if (tickerTrack) {
    tickerTrack.innerHTML += tickerTrack.innerHTML;
  }

  // ===== INIT =====
  function init() {
    buildTrendingGrid();
    buildCategoriesGrid();
    buildFilterTabs();
    renderArticles();
    observeReveal();
  }

  if (typeof ARTICLES !== 'undefined') {
    init();
  } else {
    // Fallback if script loads before data
    window.addEventListener('load', init);
  }

})();
