const observeElements = function (selector, ...animationClass) {
  const elements = document.querySelectorAll(selector);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated', ...animationClass);
      }
    });
  });

  elements.forEach((element) => {
    observer.observe(element);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  // headline
  observeElements('#presentation-block h1', 'animate__fadeInLeft');
  observeElements('#presentation-block h2', 'animate__zoomIn');
  observeElements('#presentation-block p', 'animate__fadeInRight');
  observeElements('#headline .social-medias li:nth-child(-n+2)', 'animate__fadeInDown');
  observeElements('#headline .social-medias li:nth-child(3)', 'animate__zoomIn');
  observeElements('#headline .social-medias li:nth-child(n+4)', 'animate__fadeInUp');

  // projects section
  observeElements('#recent-works h1', 'animate__fadeInLeft');

  // projects section
  observeElements('.project-card-1 img', 'animate__fadeInLeft');
  observeElements('.project-card-1 h1', 'animate__fadeInRight');
  observeElements('.project-card-1 p', 'animate__fadeInRight');
  observeElements('.project-card-1 ul', 'animate__zoomIn');
  observeElements('.project-card-1 button', 'animate__zoomIn');
  observeElements('.project-card:nth-child(3n)', 'animate__fadeInRight');
  observeElements('.project-card:nth-child(3n+1)', 'animate__fadeInLeft');
  observeElements('.project-card:nth-child(3n+2)', 'animate__zoomIn');

  // about section
  observeElements('#resume-block h1', 'animate__fadeInLeft');
  observeElements('#resume-block p', 'animate__fadeInRight');
  observeElements('#resume-button', 'animate__zoomIn');
  observeElements('#read-more', 'animate__zoomIn');

  // skills section
  observeElements('#skills-block ul:nth-child(1) li', 'animate__fadeInLeft');
  observeElements('#skills-block ul:nth-child(2) li', 'animate__zoomIn');
  observeElements('#skills-block ul:nth-child(3) li', 'animate__fadeInRight');

  // contact section
  observeElements('#contact-section p', 'animate__fadeInLeft');
  observeElements('#contact-section form', 'animate__fadeInRight');
  observeElements('#contact-section .social-medias li:nth-child(n+4)', 'animate__fadeInRight');
  observeElements('#contact-section .social-medias li:nth-child(3)', 'animate__zoomIn');
  observeElements('#contact-section .social-medias li:nth-child(-n+2)', 'animate__fadeInLeft');
});
