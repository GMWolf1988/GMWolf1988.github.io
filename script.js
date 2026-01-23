function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-theme');

    document.querySelector('.sun-icon').classList.toggle('hidden');
    document.querySelector('.moon-icon').classList.toggle('hidden');
}

