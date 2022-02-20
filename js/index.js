const ArrowButton = document.querySelector(".pagelink > p");
// console.log(ArrowButton);
ArrowButton.addEventListener("click", subpagelink);

function subpagelink(){
    ArrowButton.documentElement.style.setProperty('--arrowdeg','-90deg');
}