import songs from "./songs.js"
import { playSong } from "./musicPlayer.js"

const sidebarSongsCover = document.querySelector(".sidebar-songs-cover")

const createSongCard = () => {
    for (const song of songs) {
        const cardDiv = document.createElement("div")
        cardDiv.classList.add('sb-card', 'd-flex', 'align-items-center', 'rounded-2', 'p-2', 'text-nowrap', 'overflow-hidden')

        const cardImg = document.createElement("img")
        cardImg.src = song.songCover
        cardImg.classList.add('sb-card-img', 'rounded-2', 'me-2')
        cardImg.style.height = '3rem'

        const cardInfo = document.createElement("div")
        cardInfo.classList.add('d-flex', 'flex-column', 'align-items-start', 'justify-content-between')
        
        const songNameSpan = document.createElement("span")
        songNameSpan.classList.add('sb-song-name', 'pb-1')
        songNameSpan.textContent = song.name

        const songAuthorSpan = document.createElement("span")
        songAuthorSpan.classList.add('sb-song-author')
        songAuthorSpan.textContent = song.author

        cardInfo.appendChild(songNameSpan)
        cardInfo.appendChild(songAuthorSpan)

        cardDiv.appendChild(cardImg)
        cardDiv.appendChild(cardInfo)

        cardDiv.addEventListener('click', () => {
            playSong(song)
        })

        sidebarSongsCover.appendChild(cardDiv)
    }
}

createSongCard()