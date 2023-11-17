const PopUpCarInfo = () => {
  const allBoxes = document.querySelectorAll(".main-bottom .col");
  Array.from(allBoxes).forEach((box) => {
    const popupButton = box.querySelector(".popup-button");
    const popupBox = box.querySelector(".info-car-popup");
    popupButton.addEventListener("click", () =>
      popupBox.classList.toggle("hidden")
    );
  });
};

const PopUpCar = () => {
  const buttons = document.querySelectorAll(".popup-btn button");
  const boxes = document.querySelectorAll(".popup-box");
  buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      buttons.forEach((btn) => {
        btn.classList.remove("popup-active");
      });
      boxes.forEach((box) => {
        box.classList.remove("active");
      });

      btn.classList.add("popup-active");
      boxes[index].classList.add("active");
    });
  });
};

PopUpCar();
