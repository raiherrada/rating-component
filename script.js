/* Initial state

Rating card visible

No rating selected

Selection state

One rating button highlighted

Submit enabled

Submitted state

Rating card hidden

Thank-you card visible

Selected rating displayed 

“What happens if I press Enter?”

“What happens if no rating is selected?”*/

const submitEl = document.querySelector(".submit-btn")
const hiddenEl = document.querySelector(".hidden-container")
const container = document.querySelector(".container")
const ratingButtons = document.querySelectorAll(".score-buttons button")
const ratingText = document.getElementById("rating-text")

submitEl.disabled = true

for (let i = 0; i < ratingButtons.length; i++){
    ratingButtons[i].addEventListener('click', function(){
        const selectedRating = ratingButtons[i].textContent
        localStorage.setItem("rating", selectedRating)
        submitEl.disabled = false
    })
}

submitEl.addEventListener('click', function(e){
    e.preventDefault()
    container.style.display = 'none'
    hiddenEl.style.display = 'flex'

    const rating = localStorage.getItem("rating")
    ratingText.textContent = `You selected ${rating} out of 5`
})