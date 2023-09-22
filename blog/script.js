const twitsEl = document.querySelector('.twits')

getTwits();

setInterval(getTwits, 10000);

function getTwits() {
    fetch('https://raw.githubusercontent.com/mobinghaemi/potatoes/master/potatoes.txt').then(r => r.text()).then(r => {
        console.log('Get Twits!');
        twitsEl.innerHTML = ''
        const twits = r.split(',,,').filter(twit => twit !== '').reverse();
        twits.forEach(twit => {
            const content = `
        <div class="twit">
            <div class="twit-author">
                <img src="/images/me.png" class="pic">
                <h2 class="name">
                    <strong>mobin</strong>
                    <img id="blueTick" src="/assets/img/blue-tick.png">
                </h2>
            </div>
            <p>${twit}</p>
        </div>
        `
            twitsEl.innerHTML += content
        })
    })
}