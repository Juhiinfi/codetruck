var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var btn = document.getElementById("btn")

btn.addEventListener("click",function(){
	popupoverlay.style.display="block"
	popupbox.style.display="block"
})
var Laterpopup = document.getElementById("cancel-popup")


Laterpopup.addEventListener("click",function(event){
	event.preventDefault()
	popupoverlay.style.display="none"
	popupbox.style.display="none"
})
