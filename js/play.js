
const play = document.querySelector(".fa-pause");


const CLICKED_CLASS = "fa-play";

function handleCilck() {
  play.classList.toggle(CLICKED_CLASS);
}

function init() {
  play.addEventListener("click", handleCilck);
}

init();
