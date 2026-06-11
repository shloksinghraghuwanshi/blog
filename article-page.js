// ============================================================
// NewsVibe — Article Page Script
// ============================================================

(function () {
  "use strict";

  // ===== THEME (Global) =====
  const savedTheme = localStorage.getItem("nv-theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const cur = document.documentElement.getAttribute("data-theme");
      const next = cur === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("nv-theme", next);
    });
  }

  // ===== NAVBAR SCROLL =====
  const navbar = document.getElementById("navbar");
  const pageProgress = document.getElementById("pageProgress");
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 50);

    if (pageProgress) {
      const articleContent = document.getElementById("articleContent");
      if (articleContent) {
        const rect = articleContent.getBoundingClientRect();
        const articleTop = articleContent.offsetTop;
        const articleHeight = articleContent.offsetHeight;
        const scrolled = Math.max(0, window.scrollY - articleTop + window.innerHeight);
        const pct = Math.min(100, (scrolled / articleHeight) * 100);
        pageProgress.style.width = pct + "%";
      }
    }

    if (backToTop) {
      backToTop.classList.toggle("visible", window.scrollY > 500);
    }
  }, { passive: true });

  if (backToTop) {
    backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  // ===== HAMBURGER =====
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => navLinks.classList.toggle("open"));
    document.addEventListener("click", (e) => {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove("open");
      }
    });
  }

  // ===== TOAST =====
  const toast = document.getElementById("toast");
  function showToast(msg, dur = 3000) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), dur);
  }

  // ===== GET ARTICLE =====
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug") || "";
  const article = typeof getArticleBySlug === "function" ? getArticleBySlug(slug) : null;

  if (!article) {
    document.title = "Article Not Found – NewsVibe";
    const main = document.getElementById("articleMain");
    if (main) {
      main.innerHTML = `
        <div style="text-align:center;padding:6rem 1rem">
          <p style="font-size:5rem">😕</p>
          <h1 style="font-size:2rem;margin-bottom:1rem">Article Not Found</h1>
          <p style="color:var(--text-secondary);margin-bottom:2rem">This story may have moved or been removed.</p>
          <a href="index.html" class="btn btn-primary">← Back to Home</a>
        </div>
      `;
    }
    return;
  }

  // ===== SEO: UPDATE PAGE META =====
  document.title = `${article.title} – NewsVibe`;
  document.querySelector('meta[name="description"]').setAttribute("content", article.excerpt);

  // Open Graph
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogTitle) ogTitle.setAttribute("content", article.title);
  if (ogDesc) ogDesc.setAttribute("content", article.excerpt);

  // Schema.org NewsArticle
  const schemaScript = document.createElement("script");
  schemaScript.type = "application/ld+json";
  schemaScript.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": article.title,
    "description": article.excerpt,
    "datePublished": article.date,
    "author": {
      "@type": "Person",
      "name": article.author,
      "jobTitle": article.authorRole
    },
    "publisher": {
      "@type": "Organization",
      "name": "NewsVibe",
      "url": "https://newsvibe.com"
    },
    "keywords": article.tags.join(", "),
    "articleSection": article.category
  });
  document.head.appendChild(schemaScript);

  // ===== BREADCRUMB =====
  const breadcrumbCat = document.getElementById("breadcrumbCat");
  const breadcrumbTitle = document.getElementById("breadcrumbTitle");
  if (breadcrumbCat) {
    breadcrumbCat.textContent = article.category;
    breadcrumbCat.href = `category.html?cat=${encodeURIComponent(article.category)}`;
  }
  if (breadcrumbTitle) {
    breadcrumbTitle.textContent = article.title.length > 50 ? article.title.slice(0, 50) + "…" : article.title;
  }

  // ===== ARTICLE HEADER =====
  const catBadge = document.getElementById("articleCatBadge");
  const h1 = document.getElementById("articleH1");
  const byline = document.getElementById("articleByline");

  if (catBadge) catBadge.textContent = article.category;
  if (h1) h1.textContent = article.title;

  if (byline) {
    byline.innerHTML = `
      <div class="byline-author">
        <div class="byline-author-avatar">${article.authorEmoji}</div>
        <div>
          <div style="font-size:0.9rem;font-weight:700">${article.author}</div>
          <div style="font-size:0.75rem;color:var(--text-muted)">${article.authorRole}</div>
        </div>
      </div>
      <div class="byline-meta">
        <span>📅 ${article.date}</span>
        <span>·</span>
        <span class="byline-read-time">⏱️ ${article.readTime}</span>
        <span>·</span>
        <span>👁️ ${(article.views / 1000).toFixed(1)}k views</span>
      </div>
    `;
  }

  // ===== HERO IMAGE =====
  const heroInner = document.getElementById("articleHeroInner");
  if (heroInner) {
    heroInner.style.background = article.gradient;
    heroInner.innerHTML = `<span>${article.emoji}</span>`;
    heroInner.setAttribute("aria-label", `Illustration for ${article.title}`);
  }

  // ===== ARTICLE CONTENT =====
  const content = document.getElementById("articleContent");
  if (content) {
    content.innerHTML = article.content;

    // Add affiliate-style CTA inline
    const firstH2 = content.querySelector("h2");
    if (firstH2) {
      const ctaBanner = document.createElement("div");
      ctaBanner.style.cssText = `background:linear-gradient(135deg,rgba(108,99,255,0.1),rgba(255,101,132,0.1));border:1px solid rgba(108,99,255,0.2);border-radius:12px;padding:1rem 1.25rem;margin:1.5rem 0;display:flex;align-items:center;gap:1rem;flex-wrap:wrap;`;
      ctaBanner.innerHTML = `
        <span style="font-size:1.5rem">💡</span>
        <div style="flex:1;min-width:200px">
          <strong style="color:var(--text-primary);font-size:0.9rem">Looking for more on ${article.category}?</strong>
          <p style="margin:0;font-size:0.8rem;color:var(--text-secondary)">Browse all our ${article.category} articles for more expert insights.</p>
        </div>
        <a href="category.html?cat=${encodeURIComponent(article.category)}" class="btn btn-outline" style="font-size:0.8rem;padding:0.5rem 1rem">Explore ${article.category} →</a>
      `;
      firstH2.parentNode.insertBefore(ctaBanner, firstH2.nextSibling);
    }
  }

  // ===== TAGS =====
  const tagsEl = document.getElementById("articleTags");
  if (tagsEl) {
    tagsEl.innerHTML = `<strong style="font-size:0.8rem;color:var(--text-muted);margin-right:0.25rem">Tags:</strong>` +
      article.tags.map(t => `<span class="article-tag-chip" onclick="window.location.href='category.html?search=${encodeURIComponent(t)}'">#${t}</span>`).join("");
  }

  // ===== LIKES =====
  const likeBtn = document.getElementById("likeBtn");
  const likeCount = document.getElementById("likeCount");
  let liked = false;
  let likesLocal = article.likes;
  const storageKey = `nv-like-${article.slug}`;

  if (localStorage.getItem(storageKey) === "1") {
    liked = true;
    likeBtn && likeBtn.classList.add("liked");
  }

  if (likeCount) likeCount.textContent = likesLocal;

  if (likeBtn) {
    likeBtn.addEventListener("click", () => {
      if (!liked) {
        liked = true;
        likesLocal++;
        likeBtn.classList.add("liked");
        localStorage.setItem(storageKey, "1");
        showToast("❤️ Thanks for liking this article!");
      } else {
        liked = false;
        likesLocal--;
        likeBtn.classList.remove("liked");
        localStorage.removeItem(storageKey);
      }
      if (likeCount) likeCount.textContent = likesLocal;
    });
  }

  // ===== BOOKMARKS =====
  const bookmarkBtn = document.getElementById("bookmarkBtn");
  const bookmarkIcon = document.getElementById("bookmarkIcon");
  let bookmarked = false;
  const bmKey = `nv-bm-${article.slug}`;

  if (localStorage.getItem(bmKey) === "1") {
    bookmarked = true;
    bookmarkBtn && bookmarkBtn.classList.add("bookmarked");
    if (bookmarkIcon) bookmarkIcon.textContent = "✅";
  }

  if (bookmarkBtn) {
    bookmarkBtn.addEventListener("click", () => {
      bookmarked = !bookmarked;
      if (bookmarked) {
        bookmarkBtn.classList.add("bookmarked");
        if (bookmarkIcon) bookmarkIcon.textContent = "✅";
        localStorage.setItem(bmKey, "1");
        showToast("🔖 Article bookmarked!");
      } else {
        bookmarkBtn.classList.remove("bookmarked");
        if (bookmarkIcon) bookmarkIcon.textContent = "🔖";
        localStorage.removeItem(bmKey);
        showToast("Bookmark removed.");
      }
    });
  }

  // ===== SHARE BUTTONS =====
  const pageUrl = window.location.href;
  const pageTitle = encodeURIComponent(article.title);

  const shareTwitter = document.getElementById("shareTwitter");
  const shareFacebook = document.getElementById("shareFacebook");
  const shareWhatsapp = document.getElementById("shareWhatsapp");
  const shareCopy = document.getElementById("shareCopy");

  if (shareTwitter) {
    shareTwitter.addEventListener("click", () => {
      window.open(`https://twitter.com/intent/tweet?text=${pageTitle}&url=${encodeURIComponent(pageUrl)}`, "_blank", "noopener");
    });
  }

  if (shareFacebook) {
    shareFacebook.addEventListener("click", () => {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`, "_blank", "noopener");
    });
  }

  if (shareWhatsapp) {
    shareWhatsapp.addEventListener("click", () => {
      window.open(`https://wa.me/?text=${pageTitle}%20${encodeURIComponent(pageUrl)}`, "_blank", "noopener");
    });
  }

  if (shareCopy) {
    shareCopy.addEventListener("click", () => {
      navigator.clipboard.writeText(pageUrl).then(() => {
        showToast("🔗 Link copied to clipboard!");
      }).catch(() => {
        showToast("Copy the URL from your address bar.");
      });
    });
  }

  // ===== AUTHOR BOX =====
  const authorBox = document.getElementById("authorBox");
  if (authorBox) {
    authorBox.innerHTML = `
      <div class="author-avatar">${article.authorEmoji}</div>
      <div class="author-info">
        <h4>${article.author}</h4>
        <div class="author-role">${article.authorRole}</div>
        <p>A trusted voice on NewsVibe covering ${article.category.toLowerCase()} topics with depth, clarity, and a human perspective. Our writers are passionate experts committed to bringing you the stories that matter.</p>
      </div>
    `;
  }

  // ===== RELATED ARTICLES =====
  const relatedList = document.getElementById("relatedList");
  if (relatedList && typeof getRelatedArticles === "function") {
    const related = getRelatedArticles(article.id, article.category, 4);
    if (related.length === 0) {
      const widgetEl = document.getElementById("relatedWidget");
      if (widgetEl) widgetEl.style.display = "none";
    } else {
      relatedList.innerHTML = related.map(r => `
        <div class="related-item" onclick="window.location.href='article.html?slug=${r.slug}'" role="link" tabindex="0" aria-label="${r.title}">
          <div class="related-thumb" style="background:${r.gradient}">${r.emoji}</div>
          <div class="related-info">
            <h4>${r.title}</h4>
            <span>${r.readTime} · ${r.date}</span>
          </div>
        </div>
      `).join("");
    }
  }

  // ===== COMMENTS =====
  const commentsList = document.getElementById("commentsList");
  const commentCount = document.getElementById("commentCount");
  const commentsKey = `nv-comments-${article.slug}`;

  // Seed comments
  const seedComments = [
    { name: "Riya Sharma", time: "2 hours ago", body: "This is such an insightful read! I've been thinking about this topic for a while and this article really crystallized my thoughts.", avatar: "R" },
    { name: "Aditya Kumar", time: "5 hours ago", body: "Really well written. Shared this with my whole team. Exactly the kind of depth we need more of in news coverage.", avatar: "A" }
  ];

  let comments = [];
  try {
    const saved = localStorage.getItem(commentsKey);
    comments = saved ? JSON.parse(saved) : seedComments;
  } catch (e) {
    comments = seedComments;
  }

  function renderComments() {
    if (!commentsList) return;
    if (commentCount) commentCount.textContent = comments.length;

    if (comments.length === 0) {
      commentsList.innerHTML = `<p style="text-align:center;color:var(--text-muted);padding:2rem">Be the first to share your thoughts!</p>`;
      return;
    }

    commentsList.innerHTML = comments.map(c => `
      <div class="comment-item">
        <div class="comment-header">
          <div class="comment-avatar">${c.avatar || c.name[0].toUpperCase()}</div>
          <div>
            <div class="comment-name">${c.name}</div>
            <div class="comment-time">${c.time}</div>
          </div>
        </div>
        <p class="comment-body">${c.body}</p>
      </div>
    `).join("");
  }

  renderComments();

  window.submitComment = function (e) {
    e.preventDefault();
    const nameEl = document.getElementById("commenterName");
    const textEl = document.getElementById("commentText");
    const submitEl = document.getElementById("commentSubmit");

    const name = nameEl ? nameEl.value.trim() : "";
    const body = textEl ? textEl.value.trim() : "";

    if (!name || !body) return;

    submitEl && (submitEl.textContent = "Posting…");
    submitEl && (submitEl.disabled = true);

    setTimeout(() => {
      const newComment = {
        name,
        body,
        avatar: name[0].toUpperCase(),
        time: "Just now"
      };

      comments.unshift(newComment);

      try {
        localStorage.setItem(commentsKey, JSON.stringify(comments));
      } catch (err) {}

      if (nameEl) nameEl.value = "";
      if (textEl) textEl.value = "";
      if (submitEl) {
        submitEl.textContent = "Post Comment";
        submitEl.disabled = false;
      }

      renderComments();
      showToast("💬 Your comment has been posted!");
    }, 800);
  };

  // ===== SIDEBAR NEWSLETTER =====
  window.sidebarSubscribe = function (e) {
    e.preventDefault();
    const emailEl = document.getElementById("sidebarEmail");
    const submitEl = document.getElementById("sidebarSubmit");

    if (submitEl) {
      submitEl.textContent = "Subscribing…";
      submitEl.disabled = true;
    }

    setTimeout(() => {
      if (emailEl) emailEl.value = "";
      if (submitEl) {
        submitEl.textContent = "Subscribe";
        submitEl.disabled = false;
      }
      showToast("🎉 You're now subscribed to NewsVibe!");
    }, 1000);
  };

  // ===== SCROLL REVEAL =====
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".reveal").forEach(el => revealObs.observe(el));

})();
