export function initialLoad() { 
    const content = document.getElementById("content")

    const title = document.createElement("h1")
    title.innerHTML = "Eat at Svetlana's"
    content.appendChild(title)

    const description = document.createElement("h2")
    description.innerHTML = "Svetlana has a variety of foods prepared for you! From russian cuisine to original recipes, cooked with love!"
    content.appendChild(description)
}

export function openPage(btnId, tabId) {
    const button = document.getElementById(btnId)
    button.addEventListener("click", (event) => {
        let tabcontents = document.getElementsByClassName("tabcontent")
        for (let i=0; i<tabcontents.length; i++) {
            tabcontents[i].style.display = "none"
        }
        let tablinks = document.getElementsByClassName("tablink")
        for (let i=0; i<tablinks.length; i++) {
            tablinks[i].classList.remove("active")
        }
        document.getElementById(tabId).style.display = "block"
        event.currentTarget.classList.add("active")
    })
}