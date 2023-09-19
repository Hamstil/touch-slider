let slider = document.querySelector(".slider"); // Общий контейнер для слайдера с элементами
let sliderList = slider.querySelector(".slider__list"); // Контейнер слайдера который будет листаться
let sliderTrack = slider.querySelector(".slider__track"); // Контейнер с изображениями
let sliderImages = slider.querySelectorAll(".slider__image"); // Все изображения для слайдера
let arrows = slider.querySelector(".slider__arrows"); // Стрелки для слайдера
let prev = arrows.children[0]; // Стрелка назад
let next = arrows.children[1]; // Стрелка вперед
let slideIndex = 0; // Номер текущего слайда

// Функция возвращает ширину изображения в зависимости от экрана
function getResizeWidth() {
  return sliderImages[0].offsetWidth;
}

// Функция листания слайда
function slideImage() {
  // анимация отрисовки за 5с
  sliderTrack.style.transition = "transform .5s";
  // изменение свойства трансформ по х
  sliderTrack.style.transform = `translate3d(-${
    slideIndex * getResizeWidth()
  }px, 0px, 0px)`;

  // отключаем стрелку назад при начальном значении слайда
  prev.classList.toggle("disabled", slideIndex === 0);
  // отключаем стрелку вперед при конечном значении слайда
  next.classList.toggle("disabled", slideIndex === sliderImages.length - 1);
}

// вызов функции листания страниц изначально
slideImage();

// слушатель события клика на стрелки и в зависимости по какой стрелке нажали увеличиваем номер текущего слайда
arrows.addEventListener("click", function () {
  let target = event.target;

  if (target === next) {
    slideIndex++;
  } else if (target === prev) {
    slideIndex--;
  } else {
    return;
  }
  slideImage();
});

// слушатель события изменения окна браузера
window.addEventListener("resize", slideImage);
