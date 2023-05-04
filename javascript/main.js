const $ = Q => document.querySelector(Q);
// Variables
const themeSwitchBtn = $('#themeSwitch input');
// Events
const body = $('body');
// Switch Theme (Checkbox) Ev
themeSwitchBtn.addEventListener('click', themeSwitchFunc)

// Funcs

// Run Codes before runnig page
window.onload = _ => {
    // set user theme on web
    callThemeFromLS()
}
// Switch Theme Func
function themeSwitchFunc(e) {
    // Set Dark Theme Styles
    body.classList.toggle('dark-theme');
    // Create a condition for save user theme
    const condition = e.target.checked;
    // Save Theme for next refresh
    condition ? localStorage.setItem('theme', JSON.stringify({ name: 'light', condition: true }))
        : localStorage.setItem('theme', JSON.stringify({ name: 'dark', condition: false }))
}
// Read Saved theme from localStorage
function callThemeFromLS() {
    // create default theme for prevention bug
    const defaultObj = { name: 'dark', condition: true };
    // Get Saved theme from local storage
    const { name: theme, condition } = localStorage.getItem('theme') ? JSON.parse(localStorage.getItem('theme')) : defaultObj;
    // set saved theme styles on website
    body.classList.toggle(`${theme}-theme`);
    themeSwitchBtn.checked = condition;
}