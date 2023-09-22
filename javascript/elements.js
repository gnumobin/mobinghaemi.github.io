import { $ } from "./utils.js";
// Datas
import { projectsData } from "./data.js";
import { skillsData } from "./data.js";

// Variables
const projectsEl = $('.projects');
const skillsEl = [...$(".skills").children];

// Functions
const loadNeededElements = (projectsEl, skillsEl) => {
    loadProjectsEl(projectsEl)
    loadSkillsEl(skillsEl)
}

const loadProjectsEl = projectsEl => {
    projectsData.forEach((project, number) => {
        const html = `
                <div class="project" tabindex="-1">
                <img class="project-bg" src="../assets/img/${project?.picture}" alt="${project?.alt}" loading="lazy">
                <i class="bi bi-emoji-smile-upside-down-fill emoji"></i>
                    <div class="content" tabindex="-1">
                        <div class="creadit">
                            <span class='stars star-${number}'>?</span>
                            <i class="bi bi-star"></i>
                        </div>
                        <span>${project?.tag}</span>
                        <h1 class="title">${project?.name}</h1>
                        <div class="buttons">
                        <a class="open-this-project" href=${project?.link} title="open this project at github">
                        <i class="bi bi-link-45deg"></i>
                        </a>
                        ${project.live ? `<a class="run-this-project" href=${project?.live} title="run this project">
                            <i class="bi bi-play"></i>
                        </a>` : ''}
                        </div>
                        <div class="date-parent">
                            <span class='date'>${project.date}</span>
                            <i class="bi bi-calendar"></i>
                        </div>
                    </div>
                </div>`
        // Add Project to html
        projectsEl.insertAdjacentHTML("beforeend", html)
    });
    // Update stars
    projectsData.forEach(async (project, number) => document.querySelector(`.star-${number}`).textContent = await project.getWatchers())
}
const loadSkillsEl = skillsEl => {
    skillsData.forEach((sec, i) => {
        // Set Required ContentEl
        const contentEl = skillsEl[i].querySelector('.content');

        sec.forEach(skill => {
            // Create Project Codes
            const html = `
            <div class="skill">
            <i class="${skill.icon}"></i>
                <div class="text">
                <div class="animation">
                    <h2 class="btn-shine skill-name">${skill.title}</h2>
                    <span>${skill.label}</span>
                </div>
                    <!--<h2 class="skill-name"><strong>${skill.title}</strong></h2>
                    <span>${skill.label}</span>-->
                </div>
            </div> `
            // Add Skill to html
            contentEl.insertAdjacentHTML("beforeend", html)
        })
    })
}
// Call
loadNeededElements(projectsEl, skillsEl)

// Update DOM
import { G_PROFILE } from "./data.js";
// Variables
const authorPictureEl = $('.author-pic img');
const imgShowEl = $('.img-show img');
const addressEl = $('address a span')
const githubFollowersEl = $('#githubFollowers')

// Functions
const updateUI_G = async G_PROFILE => {
    const data = await G_PROFILE();

    if (!data.message) {
        // Update Profile Image
        authorPictureEl.src = data?.avatar_url
        imgShowEl.src = data?.avatar_url
        // Update Location
        addressEl.textContent = data?.location
        // Update Followers
        githubFollowersEl.textContent = data?.followers
    } else authorPictureEl.src = '/images/me.png'

}
updateUI_G(G_PROFILE)