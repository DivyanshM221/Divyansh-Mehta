(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ----------------------------------------------------------
     Scroll lock — shared by the mobile nav, the lightbox, and
     the intro overlay.

     The usual trick (pin body to position:fixed, offset by
     -scrollY) was tried and rejected here: this header is
     position:sticky, and pinning its ancestor breaks sticky
     positioning entirely — the header (and the mobile nav inside
     it) ends up rendered hundreds of pixels off-screen. Plain
     overflow:hidden alone was tried too and rejected: it snaps
     the page to scrollY 0 the instant it's applied, which is its
     own visible "jump."

     So this blocks the scroll gesture itself (wheel/touchmove)
     instead of touching layout or scroll position at all — the
     page truly cannot move while locked, and there is nothing to
     restore on unlock because nothing ever moved.
     ---------------------------------------------------------- */
  var preventScroll = function (e) { e.preventDefault(); };
  var lockScroll = function () {
    document.documentElement.classList.add("scroll-locked");
    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
  };
  var unlockScroll = function () {
    document.documentElement.classList.remove("scroll-locked");
    window.removeEventListener("wheel", preventScroll, { passive: false });
    window.removeEventListener("touchmove", preventScroll, { passive: false });
  };

  /* ----------------------------------------------------------
     Intro overlay (Home only)
     The show-intro class is set synchronously in <head>, before
     first paint, based on sessionStorage + prefers-reduced-motion,
     so there is never a flash of it appearing or disappearing.
     This block only plays the clip and wires up dismissal. A
     visitor is never trapped here: video end, the skip button,
     and a hard timeout all lead to the same dismiss path.
     ---------------------------------------------------------- */
  var introOverlay = document.querySelector("[data-intro-overlay]");
  if (introOverlay && document.documentElement.classList.contains("show-intro")) {
    var introVideo = introOverlay.querySelector("video");
    /* Sources are added here, not in the HTML, so a visitor who will
       never see this (reduced-motion, or a repeat visit this session)
       never triggers the video download in the first place — CSS
       display:none does not stop a <video preload> from fetching. */
    introVideo.poster = "assets/video/intro-poster.webp";
    introVideo.preload = "auto";
    ["webm", "mp4"].forEach(function (ext) {
      var source = document.createElement("source");
      source.src = "assets/video/intro." + ext;
      source.type = "video/" + ext;
      introVideo.appendChild(source);
    });
    introVideo.load();
    var introPlayPromise = introVideo.play();
    if (introPlayPromise && introPlayPromise.catch) introPlayPromise.catch(function () {});
    var introDismissed = false;
    var dismissIntro = function () {
      if (introDismissed) return;
      introDismissed = true;
      try { sessionStorage.setItem("introShown", "1"); } catch (e) {}
      introOverlay.classList.add("is-hiding");
      unlockScroll();
      window.setTimeout(function () {
        document.documentElement.classList.remove("show-intro");
      }, 700);
    };

    lockScroll();
    window.requestAnimationFrame(function () {
      introOverlay.classList.add("is-active");
    });

    introVideo.addEventListener("ended", dismissIntro);
    var introSkip = introOverlay.querySelector("[data-intro-skip]");
    if (introSkip) introSkip.addEventListener("click", dismissIntro);
    window.setTimeout(dismissIntro, 4500);
  }

  /* ----------------------------------------------------------
     Theme toggle (light/dark)
     The initial theme is set synchronously by an inline script
     in <head>, before first paint, to avoid a flash of the
     wrong theme. This block only wires up the toggle button.
     ---------------------------------------------------------- */
  var themeToggle = document.querySelector("[data-theme-toggle]");
  if (themeToggle) {
    var root = document.documentElement;
    var describeToggle = function () {
      var isDark = root.getAttribute("data-theme") === "dark";
      themeToggle.setAttribute("aria-pressed", String(isDark));
      themeToggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
    };
    describeToggle();
    themeToggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      /* Brief, scoped cross-fade so the switch reads as considered
         rather than a flash — not a permanent global transition,
         which would fight components' own hover transitions. */
      root.classList.add("theme-transitioning");
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      describeToggle();
      window.setTimeout(function () {
        root.classList.remove("theme-transitioning");
      }, 420);
    });
  }

  /* ----------------------------------------------------------
     Mobile nav toggle
     ---------------------------------------------------------- */
  var toggle = document.querySelector("[data-nav-toggle]");
  var mobileNav = document.querySelector("[data-mobile-nav]");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      mobileNav.classList.toggle("is-open", !expanded);
      if (expanded) unlockScroll(); else lockScroll();
    });
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        mobileNav.classList.remove("is-open");
        unlockScroll();
      });
    });
  }

  /* ----------------------------------------------------------
     Scroll-linked progress rail
     ---------------------------------------------------------- */
  var railFill = document.querySelector("[data-progress-fill]");
  if (railFill) {
    var updateRail = function () {
      var doc = document.documentElement;
      var scrollTop = window.scrollY || doc.scrollTop;
      var height = doc.scrollHeight - doc.clientHeight;
      var pct = height > 0 ? Math.min(100, Math.max(0, (scrollTop / height) * 100)) : 0;
      railFill.style.width = pct + "%";
    };
    var railTicking = false;
    window.addEventListener("scroll", function () {
      if (!railTicking) {
        window.requestAnimationFrame(function () {
          updateRail();
          railTicking = false;
        });
        railTicking = true;
      }
    }, { passive: true });
    window.addEventListener("resize", updateRail);
    updateRail();
  }

  /* ----------------------------------------------------------
     Progressive reveal
     Content is fully visible without this block (see CSS).
     Enhancing class is added only once JS confirms it can run
     the reveal, and IntersectionObserver failure never hides
     content — it only skips the animation.

     Belt-and-suspenders: a prior build of this site shipped a
     bug where IntersectionObserver never fired inside a
     static-rendering/screenshot context (viewport expanded
     programmatically rather than genuinely scrolled), leaving
     entire sections permanently invisible. So reveal here is
     backed by three independent triggers — IO, a manual
     bounding-rect check on scroll/resize, and a hard timeout —
     and any one of them is enough to reveal an element. Nothing
     stays hidden waiting on a single mechanism.
     ---------------------------------------------------------- */
  if (!reduceMotion && "IntersectionObserver" in window) {
    document.documentElement.classList.add("js-reveal-ready");
    var revealTargets = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));
    var groups = document.querySelectorAll("[data-reveal-group]");
    groups.forEach(function (group) {
      Array.prototype.forEach.call(group.children, function (child, i) {
        child.style.setProperty("--reveal-i", i);
      });
    });

    var reveal = function (el) { el.classList.add("is-visible"); };

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          reveal(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
    revealTargets.forEach(function (el) { io.observe(el); });

    var manualCheckTicking = false;
    var manualCheck = function () {
      var vh = window.innerHeight;
      revealTargets.forEach(function (el) {
        if (el.classList.contains("is-visible")) return;
        var rect = el.getBoundingClientRect();
        if (rect.top < vh * 1.1 && rect.bottom > 0) {
          reveal(el);
          io.unobserve(el);
        }
      });
    };
    var onScrollOrResize = function () {
      if (!manualCheckTicking) {
        window.requestAnimationFrame(function () {
          manualCheck();
          manualCheckTicking = false;
        });
        manualCheckTicking = true;
      }
    };
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    manualCheck();

    window.setTimeout(function () {
      revealTargets.forEach(function (el) {
        if (!el.classList.contains("is-visible")) {
          el.classList.add("is-visible-instant");
          reveal(el);
        }
      });
    }, 2500);
  }

  /* ----------------------------------------------------------
     Count-up stats
     ---------------------------------------------------------- */
  var counters = document.querySelectorAll("[data-count-to]");
  if (counters.length) {
    var animateCount = function (el, immediate) {
      var target = parseFloat(el.getAttribute("data-count-to"));
      var suffix = el.getAttribute("data-count-suffix") || "";
      if (immediate || reduceMotion || !("IntersectionObserver" in window)) {
        el.textContent = target + suffix;
        return;
      }
      var duration = 1400;
      var start = null;
      var step = function (ts) {
        if (start === null) start = ts;
        var progress = Math.min(1, (ts - start) / duration);
        var eased = 1 - Math.pow(1 - progress, 3);
        var value = Math.round(target * eased);
        el.textContent = value + suffix;
        if (progress < 1) window.requestAnimationFrame(step);
      };
      window.requestAnimationFrame(step);
    };
    if (reduceMotion || !("IntersectionObserver" in window)) {
      counters.forEach(animateCount);
    } else {
      var countersDone = counters.length ? new WeakSet() : null;
      var runOnce = function (el, immediate) {
        if (countersDone.has(el)) return;
        countersDone.add(el);
        animateCount(el, immediate);
      };
      var counterIo = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            runOnce(entry.target);
            counterIo.unobserve(entry.target);
          }
        });
      }, { threshold: 0.6 });
      counters.forEach(function (el) { counterIo.observe(el); });

      /* Same belt-and-suspenders as the reveal system above: a
         manual check plus a hard timeout guarantee every counter
         eventually animates, even if IO never fires. */
      var counterManualCheck = function () {
        var vh = window.innerHeight;
        counters.forEach(function (el) {
          if (countersDone.has(el)) return;
          var rect = el.getBoundingClientRect();
          if (rect.top < vh * 0.9 && rect.bottom > 0) runOnce(el);
        });
      };
      var counterTicking = false;
      window.addEventListener("scroll", function () {
        if (!counterTicking) {
          window.requestAnimationFrame(function () { counterManualCheck(); counterTicking = false; });
          counterTicking = true;
        }
      }, { passive: true });
      window.addEventListener("resize", counterManualCheck);
      counterManualCheck();
      /* This is the recovery path — jump straight to the final
         number rather than starting a fresh 1400ms animation, so
         nothing (a snapshot, a slow test capture) can ever catch
         a counter frozen mid-count. */
      window.setTimeout(function () {
        counters.forEach(function (el) { runOnce(el, true); });
      }, 2500);
    }
  }

  /* ----------------------------------------------------------
     Magnetic hover — desktop pointer devices only
     ---------------------------------------------------------- */
  if (!reduceMotion && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    document.querySelectorAll(".magnetic").forEach(function (el) {
      var strength = 10;
      el.addEventListener("mousemove", function (e) {
        var rect = el.getBoundingClientRect();
        var x = e.clientX - rect.left - rect.width / 2;
        var y = e.clientY - rect.top - rect.height / 2;
        el.style.setProperty("--mx", (x / rect.width) * strength + "px");
        el.style.setProperty("--my", (y / rect.height) * strength + "px");
      });
      el.addEventListener("mouseleave", function () {
        el.style.setProperty("--mx", "0px");
        el.style.setProperty("--my", "0px");
      });
    });
  }

  /* ----------------------------------------------------------
     Tilt card — subtle 3D tilt + glow toward the cursor.
     Desktop pointer devices only; CSS already renders a fully
     correct static card with no JS at all, so this only ever
     enhances, never gates content.
     ---------------------------------------------------------- */
  if (!reduceMotion && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    document.querySelectorAll("[data-tilt]").forEach(function (card) {
      var maxTilt = 6;
      card.addEventListener("pointermove", function (e) {
        var rect = card.getBoundingClientRect();
        var px = (e.clientX - rect.left) / rect.width;
        var py = (e.clientY - rect.top) / rect.height;
        var tiltX = (0.5 - py) * maxTilt * 2;
        var tiltY = (px - 0.5) * maxTilt * 2;
        card.style.setProperty("--pointer-x", (px * 100) + "%");
        card.style.setProperty("--pointer-y", (py * 100) + "%");
        card.style.setProperty("--tilt-x", tiltX.toFixed(2) + "deg");
        card.style.setProperty("--tilt-y", tiltY.toFixed(2) + "deg");
        card.classList.add("is-active");
      });
      card.addEventListener("pointerleave", function () {
        card.classList.remove("is-active");
        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--tilt-y", "0deg");
        card.style.setProperty("--pointer-x", "50%");
        card.style.setProperty("--pointer-y", "50%");
      });
    });
  }

  /* ----------------------------------------------------------
     Copy-to-clipboard (Contact page)
     ---------------------------------------------------------- */
  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var value = btn.getAttribute("data-copy");
      var reset = function () {
        btn.setAttribute("data-copied", "false");
        btn.textContent = btn.getAttribute("data-copy-label") || "Copy";
      };
      var succeed = function () {
        btn.setAttribute("data-copy-label", btn.textContent);
        btn.setAttribute("data-copied", "true");
        btn.textContent = "Copied";
        window.setTimeout(reset, 1800);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(succeed).catch(function () {});
      }
    });
  });

  /* ----------------------------------------------------------
     Lightbox — click any artifact/case-study image to view it
     enlarged. Built once, lazily, and reused for every trigger.
     Excludes .press-clipping__img, which already has its own
     click-through to the source article.
     ---------------------------------------------------------- */
  var lightboxTriggers = Array.prototype.slice.call(
    document.querySelectorAll(".artifact-image, .case-visual-image")
  );
  if (lightboxTriggers.length) {
    var overlay = document.createElement("div");
    overlay.className = "lightbox-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-hidden", "true");
    overlay.innerHTML =
      '<button class="lightbox-overlay__close" type="button" aria-label="Close">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.75" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"></path></svg>' +
      "</button>" +
      '<img class="lightbox-overlay__img" alt="">' +
      '<p class="lightbox-overlay__caption"></p>';
    document.body.appendChild(overlay);

    var lbImg = overlay.querySelector(".lightbox-overlay__img");
    var lbCaption = overlay.querySelector(".lightbox-overlay__caption");
    var lbClose = overlay.querySelector(".lightbox-overlay__close");
    var lastTrigger = null;

    var closeLightbox = function () {
      overlay.classList.remove("is-open");
      overlay.setAttribute("aria-hidden", "true");
      unlockScroll();
      if (lastTrigger) lastTrigger.focus();
    };

    var openLightbox = function (trigger) {
      lastTrigger = trigger;
      lbImg.src = trigger.currentSrc || trigger.src;
      lbImg.alt = trigger.alt || "";
      lbCaption.textContent = trigger.alt || "";
      lbCaption.style.display = trigger.alt ? "" : "none";
      overlay.classList.add("is-open");
      overlay.setAttribute("aria-hidden", "false");
      lockScroll();
      lbClose.focus();
    };

    lightboxTriggers.forEach(function (img) {
      img.setAttribute("tabindex", "0");
      img.setAttribute("role", "button");
      if (img.alt) img.setAttribute("aria-label", "View larger: " + img.alt);
      img.addEventListener("click", function () { openLightbox(img); });
      img.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
          e.preventDefault();
          openLightbox(img);
        }
      });
    });

    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) closeLightbox();
    });
    lbClose.addEventListener("click", closeLightbox);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && overlay.classList.contains("is-open")) closeLightbox();
    });
  }
})();
