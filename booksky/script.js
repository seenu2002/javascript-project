var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var btn = document.querySelector(".add-button")
var addbook = document.getElementById("add-book")
var booktitleinput= document.getElementById("book-name-input")
var bookauthorinput= document.getElementById("author-name-input")
var bookdescriptioninput= document.getElementById("desc-input")
var cancelpopup = document.getElementById("cancel-popup")


btn.addEventListener("click",function(){
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
})


cancelpopup.addEventListener("click", function(event){
event.preventDefault()
popupoverlay.style.display="none"
popupbox.style.display="none"})


addbook.addEventListener("click", function(event) {
event.preventDefault()
var div = document.createElement("div")
div.setAttribute("class", "box-container")
var container = document.querySelector(".container")
div.innerHTML=` <h2>${booktitleinput.value}</h2>
<h5>${bookauthorinput.value}</h5>
<p>${bookdescriptioninput.value}</p>
<button  onclick="deletebook(event)">Delete</button>`
container.append(div)
popupoverlay.style.display="none"
popupbox.style.display="none"})

function deletebook(event){
    event.target.parentElement.remove()
}