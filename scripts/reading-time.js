(() => {
  const target = document.querySelector('[data-reading-time]');
  if (!target) return;

  const article = document.querySelector('.prose, .blog-post-body');
  if (!article) return;

  const text = article.textContent || '';
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 220));
  target.textContent = `${minutes} min read`;
})();
