export const $ = Q => document.querySelector(Q);

export const playSound = soundPath => {
    const sound = document.createElement('audio');
    sound.src = soundPath
    sound.play()
}