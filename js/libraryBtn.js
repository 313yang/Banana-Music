const likeBtns = document.querySelectorAll(".fa-heart");

const handleLikeBtn = (event) => {
  const btn = event.target;
  btn.classList.toggle("fa-heart-broken");
};
likeBtns.forEach((btn) => btn.addEventListener("click", handleLikeBtn));
