(function () {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
            setActiveMenuItem();
        });

    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('beforeend', data);
            updateLoadTime();
        });

    function setActiveMenuItem() {
        const currentPage = document.location.pathname.split('/').pop();
        const menuItems = document.querySelectorAll('.menu li a');
        
        menuItems.forEach(item => {
            item.classList.remove('active');
        });
    
        const charactersMenu = document.getElementById('menu-characters');
        const charactersSubpages = ['characters.html', 'constructor.html'];
    
        if (charactersSubpages.includes(currentPage)) {
            charactersMenu.classList.add('active');
        } else {
            menuItems.forEach(item => {
                if (item.getAttribute('href') === currentPage) {
                    item.classList.add('active');
                }
            });
        }
    }
    
    function updateLoadTime() {
        const loadTime = performance.now().toFixed(2);
        const loadTimeElement = document.getElementById('load-time');
        if (loadTimeElement) {
            loadTimeElement.textContent = loadTime;
        }
    }
    
    setActiveMenuItem();
})();
