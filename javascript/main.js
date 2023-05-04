const $ = Q => document.querySelector(Q);
// Variables
const body = $('body');

const themeSwitchBtn = $('#themeSwitch input');
// tabSwitcher El
const tabSwitcherEl = [...$('#tabSwitcher').children];
// Get tabs and dependencies
const tabsEl = [...$('.tabs').children]
// Events
// Switch Theme (Checkbox) Ev
themeSwitchBtn.addEventListener('click', themeSwitchFunc)
// TabSwitcher Childs (All) Events
tabSwitcherEl.forEach((el, index) => el.addEventListener('click', tabsHandlerFunc.bind(this, index)))

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
// Add ScrollReveal Animations (Load Elements Animations)
const showElAnimation = () => {
    const SR = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 100
    })

    SR.reveal('header')
    SR.reveal('.author-pic', { delay: 100 })
    SR.reveal('.author-name', { delay: 300 })
    SR.reveal('.social-media', { delay: 400 })
    SR.reveal('.experiences', { delay: 500 })
    SR.reveal('.contact', { delay: 600 })
    SR.reveal('#tabSwitcher', { delay: 700 })
    SR.reveal('.tabs', { delay: 800 })
    // SR.reveal('footer', {delay : 800})

}
showElAnimation()

// Tabs Handle Function
function tabsHandlerFunc(index, e) {
    // hidden all tabs
    tabsEl.forEach((_, i) => tabsEl[i].classList.add('hidden'))
    // remove active class on all buttons 
    tabSwitcherEl.forEach((btn, i) => btn.classList.remove('active'))
    // add styles for current tab and btn
    e.target.classList.add('active')
    tabsEl[index].classList.remove('hidden')
}