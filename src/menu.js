import pelmeniImage from "./pelmeni.jpg"
import shubaImage from "./shuba.jpg"
import sarmaleImage from "./sarmale.jpg"

export function loadMenu() {
    let content = document.getElementById("content")

    let div = document.createElement("div")
    div.setAttribute("id", "menu")
    div.classList.add("tabcontent")

    let title = document.createElement("h1")
    title.innerHTML = "Menu"
    title.style.textAlign = "center"
    div.appendChild(title)


    let foodOne = createFoodItem("1. Pelmeni", "Dumplings with pork and beef minced meat served with sour cream", pelmeniImage)
    div.appendChild(foodOne)
    let foodTwo = createFoodItem("2. Shuba", "Salad in layers with beetroot, salted herring, potato, carrots, onions and bound with mayonnaise", shubaImage)
    div.appendChild(foodTwo)
    let foodThree = createFoodItem("3. Cabbage Rolls", "Stuffed pickled cabbage rolls with rice and minced pork meat served with sour cream and polenta", sarmaleImage)
    div.appendChild(foodThree)


    content.appendChild(div)
}

function createFoodItem(title, description, image) {
    let food  = document.createElement("div")
    food.style.display = "flex"
    food.style.alignItems = "center"
    food.style.gap = "20px"

    let foodText = document.createElement("div")
    let foodTitle  = document.createElement("div")
    foodTitle.innerHTML = title
    foodText.appendChild(foodTitle)
    let foodDescription  = document.createElement("div")
    foodDescription.innerHTML = description
    foodDescription.style.fontStyle = "italic"
    foodText.appendChild(foodDescription)
    food.appendChild(foodText)
    
    let img = document.createElement("img")
    img.src = image
    img.style.width = "200px"
    food.appendChild(img)
    return food
}