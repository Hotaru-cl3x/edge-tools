// EDGE TOOLS — main.js

// ナビゲーションのトグル
const navToggle = document.querySelector('.nav-toggle');
const navMain = document.querySelector('.nav-main');

if (navToggle && navMain) {
  navToggle.addEventListener('click', () => {
    navMain.classList.toggle('open');
  });

  // メニュー外クリックで閉じる
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.site-header')) {
      navMain.classList.remove('open');
    }
  });
}

// スクロール時のヘッダースタイル
const header = document.querySelector('.site-header');
if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

// カードのアニメーション（Intersection Observer）
const cards = document.querySelectorAll('.tool-card');
if (cards.length > 0) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = `${(i % 4) * 0.06}s`;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => observer.observe(card));
}
