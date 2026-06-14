// ============================================================
// NewsVibe - Google AdSense Helper
// ============================================================

(function () {
  "use strict";

  const AD_CLIENT = "ca-pub-1215666516680307";
  const ADSENSE_SRC = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT}`;

  window.adsbygoogle = window.adsbygoogle || [];

  function hasAdSenseScript() {
    return Array.from(document.scripts).some((script) => script.src && script.src.startsWith(ADSENSE_SRC));
  }

  function loadAdSenseScript() {
    if (hasAdSenseScript()) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = ADSENSE_SRC;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
  }

  function markAdSlotsReady() {
    document.querySelectorAll(".ad-slot").forEach((slot) => {
      slot.classList.add("ad-slot-ready");
    });
  }

  loadAdSenseScript();

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", markAdSlotsReady, { once: true });
  } else {
    markAdSlotsReady();
  }
})();
