document.addEventListener('DOMContentLoaded', function () {

  
    function initializeVideoPlayer(wrapperSelector) {
        const wrapper = document.querySelector(wrapperSelector);
        if (!wrapper) return;

        const video = wrapper.querySelector('video');
        const btn = wrapper.querySelector('.video-play-btn');

        if (!video || !btn) return;

      
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            if (video.paused) {
                video.play();
            } else {
                video.pause(); 
            }
        });

       
        video.addEventListener('play', function () {
            wrapper.classList.add('playing');
        });

        video.addEventListener('pause', function () {
            wrapper.classList.remove('playing');
        });

        video.addEventListener('ended', function () {
             wrapper.classList.remove('playing');
        });

        btn.addEventListener('keydown', function (e) {
            if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                btn.click();
            }
        });
    }

    initializeVideoPlayer('.energy__wrapper');

    initializeVideoPlayer('.hero__video-card');

    initializeVideoPlayer('.centra__video');
});

  document.addEventListener('DOMContentLoaded', () => {
    const imgs = Array.from(document.querySelectorAll('.zoomable'));

    imgs.forEach(img => {
      img.addEventListener('click', (e) => {
        e.stopPropagation();

        if (img.classList.contains('zoomed')) {
          img.classList.remove('zoomed');
          return;
        }

        imgs.forEach(i => i.classList.remove('zoomed'));
        img.classList.add('zoomed');
      });
    });

    document.addEventListener('click', () => {
      imgs.forEach(i => i.classList.remove('zoomed'));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') imgs.forEach(i => i.classList.remove('zoomed'));
    });
  });