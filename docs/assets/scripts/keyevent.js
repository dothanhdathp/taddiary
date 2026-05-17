// assets/js/hotkeys.js
document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'm') {
        const grid = document.querySelector('.md-main__inner.md-grid');
        if (!grid) return;

        const isFullWidth = grid.classList.contains('full-width');

        if (isFullWidth) {
            grid.classList.remove('full-width');
            localStorage.setItem('gridWidth', 'default');
        } else {
            grid.classList.add('full-width');
            localStorage.setItem('gridWidth', 'full');
        }
    }
    if (event.ctrlKey && event.key === 'Escape') {
        closeSlide();
    }
});

// Apply saved mode on page load
window.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.md-main__inner.md-grid');
    const mode = localStorage.getItem('gridWidth');
    if (grid && mode === 'full') {
        grid.classList.add('full-width');
    }
});

// Apply event slide
function openSlide(url) {
    const modal = document.getElementById('slideModal');
    const iframe = document.getElementById('slideFrame');
    iframe.src = url;
    modal.style.display = 'block';
}

function closeSlide() {
    const modal = document.getElementById('slideModal');
    const iframe = document.getElementById('slideFrame');
    modal.style.display = 'none';
    iframe.src = ''; // Xóa src để dừng audio/video nếu có trong slide
}

// Đóng khi click ra ngoài vùng trắng
window.onclick = function(event) {
    const modal = document.getElementById('slideModal');
    if (event.target == modal) {
        closeSlide();
    }
}