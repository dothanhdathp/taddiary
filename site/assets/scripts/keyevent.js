// assets/js/hotkeys.js
document.addEventListener('keydown', function (event) {
    if (event.key === 'm') {
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
});

// Apply saved mode on page load
window.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.md-main__inner.md-grid');
    const mode = localStorage.getItem('gridWidth');
    if (grid && mode === 'full') {
        grid.classList.add('full-width');
    }
});
