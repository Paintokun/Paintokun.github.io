
window.onload = () => {
  const welcome = document.querySelector('.Video_Text p');
  if (welcome) {
    welcome.textContent = "Welcome to Sanrick Rojas' Portfolio!";
  }
};
let slideIndex = 0;
const slides = document.querySelectorAll(".mySlides");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

function showSlide(index) {
  if (index >= slides.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;
  for (let slide of slides) {
    slide.style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

showSlide(slideIndex);
