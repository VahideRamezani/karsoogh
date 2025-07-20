document.querySelectorAll('.skill-title').forEach(title => {
    title.addEventListener('click', () => {
        const skill = title.parentElement;

        // اگر مهارت کلیک‌شده قبلاً باز بود، آن را ببند
        if (skill.classList.contains('active')) {
            skill.classList.remove('active');
        } else {
            // ابتدا همه مهارت‌ها را ببند
            document.querySelectorAll('.skill').forEach(skill => {
                skill.classList.remove('active');
            });

            // سپس مهارت کلیک‌شده را باز کن
            skill.classList.add('active');
        }
    });
});