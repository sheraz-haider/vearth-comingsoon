const comingSoon = document.getElementById('coming-soon');

function handleResize() {
  console.log('running');
  if (window.innerWidth <= 420) {
    comingSoon.src = './assets/img/COMING SOON2.png';
  } else if (window.innerWidth > 420) {
    comingSoon.src = './assets/img/COMING SOON.png';
  }
}

handleResize();

window.addEventListener('resize', handleResize);
