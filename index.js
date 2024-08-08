// task 1
const images = document.querySelectorAll(".image");
const fullImageContainer = document.querySelector(".full-image-container");
const fullImage = document.querySelector(".full-image");

let currentIndex = 0;

images.forEach((image, index) => {
  image.addEventListener("click", () => {
    showFullImage(index);
  });
});

function showFullImage(index) {
  currentIndex = index;

  const src = images[index].getAttribute("src");

  fullImage.setAttribute("src", src);
  fullImageContainer.style.display = "block";

  document.addEventListener("keydown", handleKeyPress);
}

function handleKeyPress(e) {
  if (e.key === "Escape") {
    hideFullImage();
  } else if (e.key === "ArrowLeft") {
    showPrevImage();
  } else if (e.key === "ArrowRight") {
    showNextImage();
  }
}

function hideFullImage() {
  fullImageContainer.style.display = "none";
  document.removeEventListener("keydown", handleKeyPress);
}

function showPrevImage() {
  currentIndex = (currentIndex - 1) % images.length;

  const src = images[currentIndex].getAttribute("src");
  fullImage.setAttribute("src", src);
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;

  const src = images[currentIndex].getAttribute("src");
  fullImage.setAttribute("src", src);
}

fullImageContainer.addEventListener("click", hideFullImage);

// task 2

const input = document.getElementById("input");
const createBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxes = document.getElementById("boxes");

function getRandomColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

function createBoxes(amount) {
  let sizeDefault = 30;
  for (let i = 0; i < amount; i += 1) {
    const size = sizeDefault + 10 * i;
    const color = getRandomColor();
    boxes.innerHTML += `<div style="width:${size}px; height:${size}px; background-color:${color};"></div>`;
  }
}

createBtn.addEventListener("click", () => {
  createBoxes(input.value)
});

function destroyBoxes() {
  boxes.innerHTML = "";
}

destroyBtn.addEventListener("click", destroyBoxes);
