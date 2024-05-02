import songs from "./songs.js"

const player = document.querySelector("#player")
const volumeButton = document.querySelector("#volume-button")
const volumeBar = document.querySelector("#volume-bar")
const volume = document.querySelector("#volume")

const volumeOff = "<i class='icon bi bi-volume-off'></i>"
const volumeDown = "<i class='icon bi bi-volume-down'></i>"
const volumeUp = "<i class='icon bi bi-volume-up'></i>"

let currentVolume = 1
volumeButton.addEventListener("click", () => {
    if (currentVolume === 0) {
        volumeButton.innerHTML = volumeUp
        currentVolume = 1
    } else if (currentVolume > 0) {
        volumeButton.innerHTML = volumeOff
        currentVolume = 0
    }
    updateVolume()
})

volumeBar.addEventListener("click", (e) => {
    const newVolume = e.offsetX / volumeBar.clientWidth
    currentVolume = newVolume
    updateVolume()
})

const updateVolume = () => {
    if (currentVolume === 0 || currentVolume <= 0.05) {
        volumeButton.innerHTML = volumeOff
        currentVolume = 0
    }
    else if (currentVolume > 0.2 && currentVolume <= 0.5)
        volumeButton.innerHTML = volumeDown
    else if (currentVolume > 0.5)
        volumeButton.innerHTML = volumeUp

    volume.style.width = currentVolume * 100 + "%"
    player.volume = currentVolume
}

player.volume = currentVolume
updateVolume()