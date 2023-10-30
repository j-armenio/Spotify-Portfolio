import songs from "./songs.js"
import { playSong } from "./musicPlayer.js"

const sidebarSongsCover = document.querySelector(".sidebar-songs-cover")

const createSongCard = () => {
    for (const song of songs) {
        const cardDiv = document.createElement("div")
        cardDiv.classList.add('sb-card', 'd-flex', 'align-items-center', 'rounded-2', 'p-2', 'text-nowrap', 'overflow-hidden', 'justify-content-between')

        const cardImg = document.createElement("img")
        cardImg.src = song.songCover
        cardImg.classList.add('sb-card-img', 'rounded-2', 'me-2')
        cardImg.style.height = '3rem'

        const cardInfo = document.createElement("div")
        cardInfo.classList.add('d-flex', 'flex-row', 'align-items-start', 'justify-content-between')
        
        const songNameSpan = document.createElement("span")
        songNameSpan.classList.add('sb-song-name', 'pb-1')
        songNameSpan.textContent = song.name

        const songAuthorSpan = document.createElement("span")
        songAuthorSpan.classList.add('sb-song-author')
        songAuthorSpan.textContent = song.author

        const songInfoDiv = document.createElement("div")
        songInfoDiv.classList.add('d-flex', 'flex-column', 'align-items-start', 'justify-content-between')

        // add the animated music bars div
        const musicBarsDiv = document.createElement("div")
        musicBarsDiv.classList.add('music-bars')
        
        // add the 3 bars span
        for (let i = 0; i < 3; i++) {
            const barSpan = document.createElement("span")
            musicBarsDiv.appendChild(barSpan)
        }

        songInfoDiv.appendChild(songNameSpan)
        songInfoDiv.appendChild(songAuthorSpan)
        cardInfo.appendChild(cardImg)
        cardInfo.appendChild(songInfoDiv)

        cardDiv.appendChild(cardInfo)

        cardDiv.appendChild(musicBarsDiv)

        cardDiv.addEventListener('click', () => {
            playSong(song)
        })

        sidebarSongsCover.appendChild(cardDiv)
    }
}

createSongCard()