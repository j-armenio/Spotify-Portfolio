const timeOfDayMessage = document.querySelector("#time-of-day-message")

const getTimeOfDay = () => {
    const date = new Date()
    const hour = date.getHours()

    if (hour >= 0 && hour < 12)
        timeOfDayMessage.textContent = "Bom dia"
    else if (hour >= 12 && hour < 18)
        timeOfDayMessage.textContent = "Boa tarde"
    else
        timeOfDayMessage.textContent = "Boa noite"
}

getTimeOfDay()