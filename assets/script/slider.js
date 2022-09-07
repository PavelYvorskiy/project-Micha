const contentSlide = document.querySelectorAll(".outWork-item");
contentSlide.forEach((elem) => {
  const oneImg = elem.querySelector(".oneSlide img");
  elem.addEventListener("click", (e) => {
    const containerSlides = e.target.closest(".container-slides__items img");
    let imgSrc = containerSlides.getAttribute("src");
    oneImg.setAttribute("src", imgSrc);
  });
});
