// open menu popup
document.getElementById('menu-icon').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.remove('animate__fadeOutRight');
  document.getElementById('mobile-menu').classList.add('animate__fadeInRight');
  document.querySelectorAll('.menu-item').forEach((item, index) => {
    if (index % 2 === 0) {
      item.classList.add('animate__fadeInLeft');
    } else {
      item.classList.add('animate__fadeInRight');
    }
  });
  document.getElementById('mobile-menu').style.display = 'block';
});

// close menu popup
Array.from(document.getElementsByClassName('menu-item')).forEach((element) => {
  element.addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.remove('animate__fadeInRight');
    document.getElementById('mobile-menu').classList.add('animate__fadeOutRight');
    setTimeout(() => {
      document.getElementById('mobile-menu').style.display = 'none';
    }, 500);
  });
});

// highligh current menu section in nav (desktop)
document.addEventListener('scroll', () => {
  Array.from(document.getElementsByClassName('nav-section')).forEach((element) => {
    const rect = element.getBoundingClientRect();

    const isTopVisible = rect.top >= 0 && rect.top <= window.innerHeight;
    const isSectionBodyVisible = rect.top <= 0 && rect.bottom >= window.innerHeight;

    if (isTopVisible || isSectionBodyVisible) {
      document.querySelector(`.nav-menu a[href='#${element.id}']`).style.textDecoration = 'underline';
    } else {
      document.querySelector(`.nav-menu a[href='#${element.id}']`).style.textDecoration = 'none';
    }
  });
});
