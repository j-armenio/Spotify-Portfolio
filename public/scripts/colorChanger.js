const infocards = document.querySelectorAll('#infocard')
const background = document.querySelector("#main-content")
const header = document.querySelector("#main-header")

const gradientColor0 = getComputedStyle(document.documentElement).getPropertyValue('--gradient-background-0')
const gradientColor1 = getComputedStyle(document.documentElement).getPropertyValue('--gradient-background-1')
const gradientColor2 = getComputedStyle(document.documentElement).getPropertyValue('--gradient-background-2')
const gradientColor3 = getComputedStyle(document.documentElement).getPropertyValue('--gradient-background-3')

const activateInfoCard = () => {
    infocards.forEach((infocard) => {
        infocard.addEventListener('mouseover', (event) => {
            if (infocard.classList.contains('info-0')) {
                header.style.background = gradientColor0
                background.style.background = gradientColor0
                background.style.backgroundAttachment = 'local'
            } else if (infocard.classList.contains('info-1')) {
                header.style.background = gradientColor1
                background.style.background = gradientColor1
                background.style.backgroundAttachment = 'local'
            } else if (infocard.classList.contains('info-2')) {
                header.style.background = gradientColor2
                background.style.background = gradientColor2
                background.style.backgroundAttachment = 'local'
            } else if (infocard.classList.contains('info-3')) {
                header.style.background = gradientColor3
                background.style.background = gradientColor3
                background.style.backgroundAttachment = 'local'
            }
            
        })
    })
}

activateInfoCard()