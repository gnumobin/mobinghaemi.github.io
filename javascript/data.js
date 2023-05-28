export const G_PROFILE = async _ => {
    const USER = `https://api.github.com/users/mobinghaemi`;
    return await fetch(USER).then(r => r.json()).then(r => r)
}
// Projects (Works) Data
export const projectsData = [
    {
        tag: 'web',
        name: 'Vazheyab',
        link: 'https://github.com/mobinghaemi/vazheyab-golden',
        picture: 'project-1.png',
        alt: 'VazheYab Golden',
        ID: 510254619,
        
    },
    {
        tag: 'web',
        name: 'Vecia',
        link: 'https://github.com/mobinghaemi/Vecia',
        picture: 'project-2.png',
        alt: 'Vecia',
        ID: 575857792
    },
    {
        tag: 'web',
        name: 'Portfolio',
        link: 'https://github.com/mobinghaemi/mobinghaemi.github.io',
        picture: 'project-3.png',
        alt: 'This Website',
        ID: 636470619
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
    ],
    // Section 2 (Other)
    [
        { title: 'Git', label: 'advanced', icon: 'bi bi-git' },
        { title: 'Linux', label: 'mediocre', icon: 'bi bi-app' },
        { title: 'GJS', label: 'mediocre', icon: 'bi bi-magic' },
        { title: 'React Native', label: 'basilar', icon: 'bi bi-phone' }
    ]
]


function Repo() {
    projectsData.forEach(i =>
        fetch('https://api.github.com/users/mobinghaemi/repos').then(r => r.json()).then(r => r.forEach((e, n) => e.id === i.ID && e.watchers))
    )
}


// Repo()