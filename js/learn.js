const skills = document.querySelectorAll('.skill');

skills.forEach((clickedSkill, index) => {
  clickedSkill.addEventListener('click', () => {
    // تعداد ستون‌های گرید رو مشخص کن (بسته به سایز صفحه)
    const columns = getComputedStyle(document.querySelector('.skills-container')).gridTemplateColumns.split(' ').length;

    // محاسبه شروع و پایان ردیف
    const rowStart = Math.floor(index / columns) * columns;
    const rowEnd = rowStart + columns;

    // همه کارت‌ها رو اول ببند
    skills.forEach(skill => skill.classList.remove('active'));

    // کارت‌های هم‌ردیف رو باز کن
    for (let i = rowStart; i < rowEnd && i < skills.length; i++) {
      skills[i].classList.add('active');
    }
  });
});
