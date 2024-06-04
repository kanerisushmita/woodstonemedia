document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(card => {
      card.addEventListener('click', function () {
        const videoId = card.getAttribute('data-video');
        const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        document.getElementById('youtube-video').setAttribute('src', videoUrl);
        document.querySelector('.video-popup').style.display = 'block';
      });
    });
  
    document.querySelector('.close-btn').addEventListener('click', function () {
      document.querySelector('.video-popup').style.display = 'none';
      document.getElementById('youtube-video').setAttribute('src', '');
    });
  });
  