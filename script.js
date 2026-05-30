document.addEventListener('DOMContentLoaded', () => {
    // Анімація появи елементів (Reveal on Scroll)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Спрацьовує, коли 15% елемента видно
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Анімуємо лише один раз
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // Логіка для табів програм (візуальна взаємодія)
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Видаляємо клас active у всіх
            tabs.forEach(t => t.classList.remove('active'));
            // Додаємо натиснутому
            tab.classList.add('active');
            
            // Тут в майбутньому можна додати логіку фільтрації карток
        });
    });
});
