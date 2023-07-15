import { $, playSound } from "./utils.js";

const IEl = document.querySelectorAll('i')

const IElParents = [...IEl].map(el => el.parentElement)

const filterArr = IElParents.filter(element => element.className !== 'skill' && element.className !== 'project' && element.className !== 'author-pic')

filterArr.forEach(el => {
    el.addEventListener('click' , e => {
        e.stopPropagation()
        
        playSound('../assets/sound/click.mp3')
    })
})