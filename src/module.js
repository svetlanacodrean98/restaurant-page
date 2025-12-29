export function initialLoad() { 
    const content = document.getElementById("content")

    const title = document.createElement("h1")
    title.innerHTML = "Eat at Svetlana's"
    content.appendChild(title)

    const description = document.createElement("h2")
    description.innerHTML = "Svetlana has a variety of foods prepared for you! From russian cuisine to original recipes, cooked with love!"
    content.appendChild(description)
}