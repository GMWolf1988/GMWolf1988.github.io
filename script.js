function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-theme');

    document.querySelector('.sun-icon').classList.toggle('hidden');
    document.querySelector('.moon-icon').classList.toggle('hidden');
}

// ===== Modal Logic =====
const openBtn = document.getElementById('openProjectsModal');
const modal = document.getElementById('projectsModal');
const closeBtn = document.getElementById('closeProjectsModal');

openBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}