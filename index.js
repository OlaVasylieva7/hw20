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
