const play = document.querySelector(".fa-pause");

const handleCilck = () => {
  play.classList.toggle("fa-play");
};

play.addEventListener("click", handleCilck);
