const tabs = document.querySelector(".work__tabs")
const blocks = Array.from(document.querySelectorAll(".work__box"))

let activeCards = blocks.slice(0, 12)

let unActiveCards = blocks.slice(12, 24)

unActiveCards.forEach(card =>{
    card.style.display = "none"
})

tabs.addEventListener("click", showPhotos)
  
function showPhotos(event){ 
    let target = event.target.dataset.tab 

    if(event.target.tagName !== "LI") return false;

    activeCards.forEach(item =>{
    if (item.classList.contains(target) || target === "all"){
        item.style.display = "block"

    } else {
        item.style.display = "none"
    }
    
})

}   


const button = document.querySelector(".work__btn")

button.addEventListener("click", e =>{
    e.preventDefault();

    unActiveCards.forEach(card=>{
    card.style.display = "block"
})
    button.style.display = "none"
})


