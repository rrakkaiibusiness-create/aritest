document.addEventListener('DOMContentLoaded', () => {
    // Налаштування для Intersection Observer
    const observerOptions = {
        root: null, // Відстежуємо відносно viewport
        rootMargin: '0px',
        threshold: 0.1 // Спрацьовує, коли 10% елемента видно на екрані
    };

    // Callback функція, яка додає клас 'active', коли елемент у полі зору
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Додаємо клас для запуску CSS-анімації
                entry.target.classList.add('active');
                // Припиняємо спостереження після появи, щоб анімація не повторювалась
                observer.unobserve(entry.target);
            }
        });
    };

    // Ініціалізація Observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Знаходимо всі елементи з класом .reveal та додаємо їх до Observer
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
});