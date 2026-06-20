// Highlight current page in nav
const pages = ['index', 'about', 'privacy', 'terms', 'cookies', 'contact', 'faq', 'blog-pdf-tips', 'blog-how-to-use', 'blog-pdf-security', 'disclaimer', 'sitemap'];
const current = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
document.querySelectorAll('nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.includes(current + '.html')) {
        link.style.color = '#2563eb';
        link.style.fontWeight = '600';
    }
});
console.log('PDFForge loaded.');