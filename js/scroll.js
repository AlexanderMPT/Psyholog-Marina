
document.addEventListener("DOMContentLoaded", function() {
    let wrapperInner = document.querySelector(".first__wrapper-inner");
    wrapperInner.addEventListener("click", function() {
        let scrollStep = document.documentElement.scrollHeight;
        let scrollDuration = 50000; // Продолжительность анимации в миллисекундах (5 секунд)
        let scrollInterval = 10; // Интервал между шагами прокрутки в миллисекундах (10 миллисекунд)

        let startTime = null;

        function smoothScroll(timestamp) {
            if (!startTime) {
                startTime = timestamp;
            }
            let progress = timestamp - startTime;
            let easing = easeOutCubic(progress / scrollDuration);

            let scrollAmount = easing * scrollStep;

            if (window.scrollY + window.innerHeight < document.documentElement.scrollHeight) {
                window.scrollBy(0, scrollAmount);
                requestAnimationFrame(smoothScroll);
            }
        }

        function easeOutCubic(t) {
            t--;
            return t * t * t + 1;
        }

        requestAnimationFrame(smoothScroll);
    });
});
