self.addEventListener("install", e => {
    e.waitUntil(
        caches.open('static').then(chache => {
            return chache.addAll(["./", "./style/style.css", "images/me.png"])
        })
    )
})
