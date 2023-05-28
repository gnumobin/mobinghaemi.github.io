// Projects (Works) Data
export const projectsData = [
    {
        tag: 'web',
        name: 'Vazheyab golden',
        link: 'https://github.com/mobinghaemi/vazheyab-golden',
        picture: 'project-1.png'
    },
    {
        tag: 'web',
        name: 'Vecia',
        link: 'https://github.com/mobinghaemi/Vecia',
        picture: 'project-2.png'
    },
    {
        tag: 'web',
        name: 'Portfolio',
        link: 'https://github.com/mobinghaemi/mobinghaemi.github.io',
        picture: 'project-3.png'
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
        { title: 'React', label: 'medium', icon: 'bi bi-filetype-jsx' },
    ],
    // Section 2 (Other)
    [
        { title: 'Git', label: 'advanced', icon: 'bi bi-git' },
        { title: 'Linux', label: 'medium', icon: 'bi bi-app' },
        { title: 'GJS', label: 'medium', icon: 'bi bi-magic' },
        { title: 'React Native', label: 'basic', icon: 'bi bi-phone' }
    ]
]


export const G_PROFILE = async _ => {
    const USER = `https://api.github.com/users/mobinghaemi`;
    return await fetch(USER).then(r => r.json()).then(r => r)
}