// Datas
import { projectsData } from "./data.js";
import { skillsData } from "./data.js";

// Variables
const projectsEl = document.querySelector('.projects');
const skillsEl = [...document.querySelector(".skills").children];

// Functions

const loadNeededElements = (projectsEl, skillsEl) => {
    loadProjectsEl(projectsEl)
    loadSkillsEl(skillsEl)
}

const loadProjectsEl = projectsEl => {
    projectsData.forEach(project => {
        // Create Project Codes
        const html = `
            <div class="project">
            <img class="project-bg" src="../assets/img/${project.picture}" alt="current project background">
                <div class="content center">
                    <span>${project.tag}</span>
                    <h1 class="title">${project.name}</h1>
                    <a class="open-this-project" href=${project.link}><i class="bi bi-link-45deg"></i></a>
                </div>
            </div> `
        // Add Project to html
        projectsEl.insertAdjacentHTML("beforeend", html)
    });
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
                    <h2 class="skill-name">${skill.title}</h2>
                    <span>advanced</span>
                </div>
            </div> `
            // Add Skill to html
            contentEl.insertAdjacentHTML("beforeend", html)
        })
    })
}
// Call
loadNeededElements(projectsEl, skillsEl)