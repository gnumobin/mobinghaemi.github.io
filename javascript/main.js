import { $ } from "./utils.js";
// Variables
const body = $('body');
const overlay = $('.overlay');
// Calculate Page Height 
let html = document.documentElement;
// Get Container
let container = $('.container');
const themeSwitchBtn = $('#themeSwitch input');
// tabSwitcher El
const tabSwitcherEl = [...$('#tabSwitcher').children];
// Get tabs and dependencies
const tabsEl = [...$('.tabs').children]
// Author picture 
const authorPictureEl = $('.author-pic');
// Show Image Biggest El
const imgShowEl = $('.img-show');
// Close Image Biggest El Btn
const closeImgShowBtn = $('#closeImgShow')
// Years Of Work El
const yearsOfWorkEl = $('.years-of-work')
// Circles Box (Bg anime)
const circlesBox = $('.circles');

// Events
// Switch Theme (Checkbox) Ev
themeSwitchBtn.addEventListener('click', themeSwitchFunc)
// TabSwitcher Childs (All) Events
tabSwitcherEl.forEach((el, index) => el.addEventListener('click', tabsHandlerFunc.bind(this, index)))
// Click on author picture
authorPictureEl.addEventListener('click', showAuthorPicture)
// After Click overlay (close all element with z-index +1)
overlay.addEventListener('click', overlayHandler)
// close image biggest element
closeImgShowBtn.addEventListener('click', overlayHandler)

// Funcs

// Run Codes before runnig page
window.onload = _ => {
    // set user theme on web
    callThemeFromLS()
    // Update Years Of Work
    yearsOfWorkEl.textContent = `+${new Date().getFullYear() - 2021}`;
    // Set Page Height for bg anime
    circlesBox.style.height = `${container.clientHeight + 10}px`
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
    // create default theme for prevention bug and auto dark mode
    let defaultObj = { name: 'light', condition: true };
    // Check Auto dark mode or color scheme supported or not
    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all')
        if (window.matchMedia('(prefers-color-scheme: dark)')) {
            const darkModeEnabled = matchMedia('(prefers-color-scheme: dark)').matches;
            darkModeEnabled ? defaultObj = { name: 'dark', condition: false } : defaultObj = { name: 'light', condition: true }
        }
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
    const activeEl = $('.active');
    // hidden all tabs
    tabsEl.forEach((_, i) => tabsEl[i].classList.add('hidden'))
    // Show index Section
    tabsEl[index].classList.remove('hidden')
    circlesBox.style.height = `${container.clientHeight + 10}px`
    // Set active on active li , set active el position
    index ? activeEl.classList.add('position') : activeEl.classList.remove('position')
}
// Show Biggest author picture 
function showAuthorPicture() {
    overlay.style.display = 'block'
    imgShowEl.style.transform = 'translate(-50%, -50%) scale(1)'
}
// After Click on Overlay
function overlayHandler() {
    overlay.style.display = 'none'
    imgShowEl.style.transform = 'translate(-50%, -50%) scale(0)'
}
// PWA
if ("serviceWorker" in navigator)
    navigator.serviceWorker.register("sw.js").then(r => { }).catch(err => console.log(err))