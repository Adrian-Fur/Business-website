const toogleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');
const image5 = document.getElementById('image5');
const image6 = document.getElementById('image6');

const DARK_THEME = 'dark'
const LIGHT_THEME = 'light'

function imageMode(color) {
    image1.src = `assets/undraw_co-working_${color}.svg`;
    image2.src = `assets/undraw_programming_${color}.svg`;
    image3.src = `assets/undraw_real_time_sync_${color}.svg`;
    image4.src = `assets/undraw_meet_the_team_${color}.svg`;
    image5.src = `assets/undraw_folder_files_${color}.svg`;
    image6.src = `assets/undraw_current_location_${color}.svg`;
}

function toogleDarkLightMode(theme) {
    nav.style.backgroundColor = (theme === 'dark') ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = (theme === 'dark') ? 'Dark Mode' : 'Light Mode';
    (theme === 'dark') ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    (theme === 'dark') ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light');
    (theme === 'dark') ? imageMode('dark') : imageMode('light');
}

function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        toogleDarkLightMode(DARK_THEME);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        toogleDarkLightMode(LIGHT_THEME);
    }
}

toogleSwitch.addEventListener('change', switchTheme);

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toogleSwitch.checked = true;
        toogleDarkLightMode(DARK_THEME);
    }
}