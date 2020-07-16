window.addEventListener('DOMContentLoaded', () =>{
    const tabs = document.querySelectorAll('.catalog__tab'),
        tabsContent = document.querySelectorAll('.catalog__content'),
        tabsParent = document.querySelector('.catalog__tabs');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none';
        });

        tabs.forEach(item => {
            item.classList.remove('catalog__tab_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].style.display = 'flex';
        tabs[i].classList.add('catalog__tab_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('catalog__tab')) {
            tabs.forEach((item, i) => {
                if (target == item) { //таргет будет совпадать с элементом форИч
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
});

