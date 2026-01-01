export function loadHome() {
    let content = document.getElementById("content")

    let div = document.createElement("div")
    div.setAttribute("id", "home")
    div.classList.add("tabcontent")

    let title = document.createElement("h1")
    title.innerHTML = "Eat at Svetlana's"
    div.appendChild(title)

    let description = document.createElement("h2")
    description.innerHTML = "Svetlana has a variety of foods prepared for you! From russian cuisine to original recipes, cooked with love!"
    div.appendChild(description)

    content.appendChild(div)
}