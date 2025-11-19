document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menuToggle');
    const mobileOverlay = document.createElement('div');
    
    // Create mobile overlay
    mobileOverlay.className = 'mobile-overlay';
    document.body.appendChild(mobileOverlay);
    
    // Set active nav item based on current page
    setActiveNavItem();
    
    // Toggle sidebar function
    function toggleSidebar() {
        sidebar.classList.toggle('collapsed');
        
        if (window.innerWidth <= 768) {
            sidebar.classList.toggle('mobile-open');
            mobileOverlay.classList.toggle('active');
        }
        
        // Save sidebar state to localStorage
        const isCollapsed = sidebar.classList.contains('collapsed');
        localStorage.setItem('sidebarCollapsed', isCollapsed);
    }
    
    // Event listeners
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleSidebar);
    }
    
    mobileOverlay.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            toggleSidebar();
        }
    });
    
    // Handle responsive behavior
    function handleResize() {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('mobile-open');
            mobileOverlay.classList.remove('active');
            
            // Restore sidebar state from localStorage on desktop
            const savedState = localStorage.getItem('sidebarCollapsed');
            if (savedState === 'true') {
                sidebar.classList.add('collapsed');
            } else {
                sidebar.classList.remove('collapsed');
            }
        } else {
            // Auto-collapse sidebar on mobile
            sidebar.classList.add('collapsed');
            sidebar.classList.remove('mobile-open');
            mobileOverlay.classList.remove('active');
        }
    }
    
    window.addEventListener('resize', handleResize);
    
    // Initialize responsive state
    handleResize();
    
    // Handle iframe loading states
    const iframes = document.querySelectorAll('.app-container-frame');
    iframes.forEach(iframe => {
        iframe.addEventListener('load', function() {
            const loadingElement = iframe.previousElementSibling;
            if (loadingElement && loadingElement.classList.contains('loading-indicator')) {
                loadingElement.style.display = 'none';
            }
            iframe.style.opacity = '1';
        });
        
        iframe.addEventListener('error', function() {
            const loadingElement = iframe.previousElementSibling;
            if (loadingElement && loadingElement.classList.contains('loading-indicator')) {
                loadingElement.innerHTML = `
                    <i class="fas fa-exclamation-triangle" style="color: #e74c3c;"></i>
                    <p>Lỗi tải ứng dụng. Vui lòng thử lại.</p>
                    <button onclick="location.reload()" style="margin-top: 10px; padding: 8px 16px; background: #3498db; color: white; border: none; border-radius: 4px; cursor: pointer;">
                        Tải lại
                    </button>
                `;
            }
        });
    });
    
    // Add smooth transitions to iframes
    iframes.forEach(iframe => {
        iframe.style.opacity = '0';
        iframe.style.transition = 'opacity 0.3s ease';
    });
    
    console.log('MES Unified App initialized successfully');
}

function setActiveNavItem() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        const link = item.querySelector('.nav-link');
        const href = link.getAttribute('href');
        
        // Remove active class from all items
        item.classList.remove('active');
        
        // Add active class to current page
        if (href === currentPage) {
            item.classList.add('active');
        }
        
        // Special case for index.html
        if (currentPage === '' || currentPage === 'index.html' && href === 'index.html') {
            item.classList.add('active');
        }
    });
}

// Handle navigation and preserve sidebar state
document.addEventListener('click', function(e) {
    if (e.target.matches('.nav-link') || e.target.closest('.nav-link')) {
        const link = e.target.matches('.nav-link') ? e.target : e.target.closest('.nav-link');
        const href = link.getAttribute('href');
        
        // Only handle internal navigation
        if (href && !href.startsWith('http')) {
            // Save current sidebar state
            const sidebar = document.getElementById('sidebar');
            const isCollapsed = sidebar.classList.contains('collapsed');
            localStorage.setItem('sidebarCollapsed', isCollapsed);
        }
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + B to toggle sidebar
    if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
        e.preventDefault();
        const menuToggle = document.getElementById('menuToggle');
        if (menuToggle) {
            menuToggle.click();
        }
    }
    
    // Escape to close sidebar on mobile
    if (e.key === 'Escape' && window.innerWidth <= 768) {
        const sidebar = document.getElementById('sidebar');
        if (sidebar && sidebar.classList.contains('mobile-open')) {
            sidebar.classList.remove('mobile-open');
            document.querySelector('.mobile-overlay').classList.remove('active');
        }
    }
});
