document.getElementById('read-more').addEventListener('click', function () {
  const text = this.previousElementSibling;
  text.classList.toggle('collapsed');

  if (text.classList.contains('collapsed')) {
    this.innerText = 'Read more...';
  } else {
    this.innerText = 'Read less';
  }
});

document.getElementById('resume-button').addEventListener('click', () => {
  window.open('https://docs.google.com/document/d/1CDXvh2nutunhGR-anCu029Nk0T0RhUMbEBPH_2zd_Pw/edit?usp=sharing', '_blank');
});
