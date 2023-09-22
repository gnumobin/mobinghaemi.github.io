const star = async () => {
    const response = await fetch('https://api.github.com/users/mobinghaemi/repos');
    const data = await response.json()
    return data
}

async function getWatchers() {
    const repos = await star();
    const newData = repos.map(repo => this.ID === repo.id && repo.watchers)
    const index = newData.find(data => Boolean(data))
    return index
}

export const G_PROFILE = async _ => {
    const USER = `https://api.github.com/users/mobinghaemi`;
    const response = await fetch(USER);
    const data = await response.json()
    return data
}
// Projects (Works) Data
export const projectsData = [
    {
        tag: 'web',
        name: 'Vazheyab',
        link: 'https://github.com/mobinghaemi/vazheyab-golden',
        picture: 'project-1.jpeg',
        alt: 'VazheYab Golden',
        ID: 510254619,
        getWatchers,
        date: '2021',
        live: false
    },
    {
        tag: 'web',
        name: 'Vecia',
        link: 'https://github.com/mobinghaemi/Vecia',
        picture: 'project-2.jpeg',
        alt: 'Vecia',
        ID: 575857792,
        getWatchers,
        date: '2022',
        live: 'https://mobinghaemi.github.io/Vecia'
    },
    {
        tag: 'web',
        name: 'Portfolio',
        link: 'https://github.com/mobinghaemi/mobinghaemi.github.io',
        picture: 'project-3-light.png',
        alt: 'This Website',
        ID: 636470619,
        getWatchers,
        date: '2023',
        live: 'https://mobinghaemi.github.io/'
    }
]
// Skills (HTML , Css , ...) Data
export const skillsData = [
    // Section 1 (Front)
    [
        { title: 'HTML', label: 'advanced', icon: 'bi bi-filetype-html' },
        { title: 'CSS', label: 'advanced', icon: 'bi bi-filetype-css' },
        { title: 'Sass/Scss', label: 'advanced', icon: 'bi bi-filetype-scss' },
        { title: 'Javascript', label: 'advanced', icon: 'bi bi-filetype-js' },
        { title: 'React', label: 'mediocre', icon: 'bi bi-filetype-jsx' },
        { title: 'Svelte', label: 'advanced', icon: 'bi bi-braces' },
    ],
    // Section 2 (Other)
    [
        { title: 'Git', label: 'advanced', icon: 'bi bi-git' },
        { title: 'Linux', label: 'mediocre', icon: 'bi bi-app' },
        { title: 'Gnome.js', label: 'mediocre', icon: 'bi bi-magic' },
        { title: 'React Native', label: 'basilar', icon: 'bi bi-phone' }
    ]
]
// Twit
export const twits = [
    {
        text : 'Hi, this is my first tweet'
    },
    {
        text : 'Hi, this is my second tweet'
    }
]

// twits.forEach(twit => {
//     const customTwit = document.createElement('div')
//     customTwit.classList = 'twit';
//     customTwit.textContent = twit.text
//     document.querySelector('.twits').innerHTML += `
//         <div class='twit'>
//             <p>${twit.text}</p>
//         </div>
//         <hr color='gray'/>
//     `
// })


// fetch('https://api.github.com/repos/mobinghaemi/mobinghaemi.github.io/contents/README.md').then(r => r.json())
//     .then(r => {
//         console.log(r);
//     })

// fetch('https://raw.githubusercontent.com/mobinghaemi/mobinghaemi.github.io/master/README.md').then(r => {
//     return r.text()
// }).then(r => {
//     console.log(r);
// })

fetch('/blog/potatoes.txt').then(r => r.text()).then(r => {
    console.log(r.split(',,,').filter(index => index !== ''));
})