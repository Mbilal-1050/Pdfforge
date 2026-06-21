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
// ===== Typewriter Effect for Demo =====
document.addEventListener('DOMContentLoaded', function() {
    const heroHeading = document.querySelector('.hero h1');
    if (!heroHeading) return;
    
    // Original text store karein
    const originalText = heroHeading.innerHTML;
    // Sirf "Complete PDF Toolkit" wala text target karein (HTML tags ko ignore karein)
    const textNode = heroHeading.childNodes[0]; // pehla text node
    if (!textNode) return;
    
    const fullText = textNode.textContent.trim();
    heroHeading.innerHTML = ''; // Empty karein
    
    let index = 0;
    function typeWriter() {
        if (index < fullText.length) {
            heroHeading.innerHTML = fullText.substring(0, index + 1) + 
                '<span style="color: #fbbf24; animation: blink 0.7s infinite;">|</span>';
            index++;
            setTimeout(typeWriter, 100 + Math.random() * 50);
        } else {
            heroHeading.innerHTML = fullText + ' <br><span class="gold">32+ Free Tools</span>';
        }
    }
    
    // Start typing after 1 second
    setTimeout(typeWriter, 1000);
});
