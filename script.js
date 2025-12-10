document.addEventListener('DOMContentLoaded', function () {

    /**
     * Инициализирует логику пользовательской кнопки для видео
     * @param {string} wrapperSelector - Селектор родительского контейнера видео
     */
    function initializeVideoPlayer(wrapperSelector) {
        const wrapper = document.querySelector(wrapperSelector);
        if (!wrapper) return;

        const video = wrapper.querySelector('video');
        const btn = wrapper.querySelector('.video-play-btn');

        if (!video || !btn) return;

        // 1. Обработка клика по центральной кнопке:
        // Она должна только запустить видео, если оно на паузе.
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            if (video.paused) {
                video.play(); // Если на паузе, запускаем
            } else {
                video.pause(); // Если играет, ставим на паузу
            }
        });

        // 2. Скрытие/показ кнопки/оверлея при старте/паузе:
        // Эти слушатели управляют видимостью центральной кнопки через CSS класс 'playing'
        video.addEventListener('play', function () {
            wrapper.classList.add('playing');
        });

        video.addEventListener('pause', function () {
            wrapper.classList.remove('playing');
        });

        // 3. Обработка окончания видео:
        video.addEventListener('ended', function () {
             wrapper.classList.remove('playing');
        });

        // 4. Доступность с клавиатуры (если вы это используете):
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