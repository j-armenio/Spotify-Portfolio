import songs from "./songs.js"

const player = document.querySelector("#player")
const musicName = document.querySelector("#music-name")
const author = document.querySelector("#music-author")
const songCover = document.querySelector("#song-cover")
const playPauseButton = document.querySelector("#play-pause-button")
const prevButton = document.querySelector("#prev-button")
const nextButton = document.querySelector("#next-button")
const currentTime = document.querySelector("#current-time")
const duration = document.querySelector("#duration")
const progressBar = document.querySelector("#progress-bar")
const progress = document.querySelector("#progress")
const shuffleButton = document.querySelector("#shuffle-button-icon")
const repeatButton = document.querySelector("#repeat-button-icon")

const textButtonPlay = "<i class='bi bi-play-circle-fill'></i>"
const textButtonPause = "<i class='bi bi-pause-circle-fill'></i>"

prevButton.addEventListener("click", () => prevNextMusic("prev"))
nextButton.addEventListener("click", () => prevNextMusic("next"))
playPauseButton.addEventListener("click", () => playPauseMusic())

shuffleButton.addEventListener("click", () => { 
    //checks if the random button is active
    if (shuffleButton.classList.contains("btn-active")) {
        shuffleButton.classList.remove("btn-active")
    }
    else {
        shuffleButton.classList.add("btn-active")
    }
})

repeatButton.addEventListener("click", () => {
    //checks if the repeat button is active
    if (repeatButton.classList.contains("btn-active")){
        repeatButton.classList.remove("btn-active")
    } else {
        repeatButton.classList.add("btn-active")
    }
 })

progressBar.addEventListener("click", (e) => {    
    const newTime = (e.offsetX * player.duration) / progressBar.clientWidth
    player.currentTime = newTime
})

const formatZero = (n) => (n < 10 ? "0" + n : n)

const updateTime = () => {
    const currentMinutes = Math.floor(player.currentTime / 60)
    const currentSeconds = Math.floor(player.currentTime % 60)

    currentTime.textContent = currentMinutes + ":" + formatZero(currentSeconds)

    const durationFormatted = isNaN(player.duration) ? 0 : player.duration
    const durationMinutes = Math.floor(durationFormatted / 60)
    const durationSeconds = Math.floor(durationFormatted % 60)

    duration.textContent = durationMinutes + ":" + formatZero(durationSeconds)

    const progressWidth = durationFormatted ? (player.currentTime * 100) / durationFormatted : 0
    progress.style.width = progressWidth + "%"

    if (player.ended)
        prevNextMusic("next")
}

const playPauseMusic = () => {
    if (player.paused) {
        player.play()
        playPauseButton.innerHTML = textButtonPause
    } else {
        player.pause()
        playPauseButton.innerHTML = textButtonPlay
    }
}

let currentSong = 0
const prevNextMusic = (type) => {
    if ((shuffleButton.classList.contains("btn-active")) && (repeatButton.classList.contains("btn-active")) && (type == "next")) {
        // repeat has priority over shuffle
        currentSong = currentSong
    } else if (shuffleButton.classList.contains("btn-active") && (type == "next")) {
        // deal with shuffle
        currentSong = Math.floor(Math.random() * songs.length)
    } else if ((repeatButton.classList.contains("btn-active")) && (type == "next")) {
        // deal with repeat
        currentSong = currentSong
    } else {
        if ((type  == "next" && currentSong + 1 === songs.length) || (type === "innit")) { 
            currentSong = 0
        } else if (type == "prev" && currentSong === 0) {
            currentSong = songs.length - 1
        } else { 
            if (type === "prev")
                currentSong--
            else
                currentSong++
        }
    }

    player.src = songs[currentSong].src
    musicName.innerHTML = songs[currentSong].name
    author.innerHTML = songs[currentSong].author
    songCover.src = songs[currentSong].songCover

    if (type !== "innit")
        playPauseMusic("play")

    updateTime()
}

const playSong = (song) => {
    player.src = song.src
    musicName.innerHTML = song.name
    author.innerHTML = song.author
    songCover.src = song.songCover

    playPauseMusic("play")

    updateTime()

    // update currentSong variable
    for (let i = 0; i < songs.length; i++) {
        if (songs[i].src === song.src) {
            currentSong = i
            break
        }
    }
}

prevNextMusic("innit")
player.addEventListener("timeupdate", () => updateTime())

export { playSong }