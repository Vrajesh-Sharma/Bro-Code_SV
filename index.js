const navItems = document.querySelectorAll('.navbar-center ul li a');

navItems.forEach((item) => {
    item.addEventListener('mouseover', () => {
        navItems.forEach((otherItem) => {
            if (otherItem !== item) {
                otherItem.style.opacity = '0.4';
            }
        });
    });

    item.addEventListener('mouseout', () => {
        navItems.forEach((otherItem) => {
            otherItem.style.opacity = '1';
        });
    });
});
