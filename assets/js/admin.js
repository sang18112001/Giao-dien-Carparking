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

const SideBar = () => {
  const buttons = document.querySelectorAll(".side-bar-btn button");
  const mainbox = document.querySelectorAll(".side-bar-box");
  buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      buttons.forEach((btn) => {
        btn.classList.remove("side-bar-active");
      });
      mainbox.forEach((box) => {
        box.classList.remove("flex");
      });
      btn.classList.add("side-bar-active");
      mainbox[index].classList.add("flex");
    });
  });
};

SideBar();