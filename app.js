const ratingBtnsContainer = document.querySelector('.rating__btns');
const ratingBtns = document.querySelectorAll('.rating-btn');
const submitBtn = document.querySelector('.submit-btn');
const ratingCard = document.querySelector('.card--rating');
const thankYouCard = document.querySelector('.card--thank-you');
const ratingNumber = document.querySelector('.rating-num');

let ratingNum = 5;

function handleClick(e) {
  if (!e.target.matches('.rating-btn')) return;
  ratingNum = e.target.textContent;

  //update UI: chnage the background color of the clicked button
  ratingBtns.forEach((btn) => btn.classList.remove('active'));
  e.target.classList.add('active');
}

function handleSubmit() {
  ratingCard.classList.remove('show');
  ratingNumber.textContent = ratingNum;
  thankYouCard.classList.add('show');
}

ratingBtnsContainer.addEventListener('click', handleClick);
submitBtn.addEventListener('click', handleSubmit);
