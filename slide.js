let counter = 1;

const slideImg = document.querySelectorAll(".slide img");

document.getElementById("nextBtn").addEventListener("click", function () {
  counter++;
  if (counter > 4) {
    counter = 1;
  }
  slideImg[0].style.display = "none";
  slideImg[1].style.display = "none";
  slideImg[2].style.display = "none";
  slideImg[3].style.display = "none";
  if (counter === 1) {
    document.getElementById("image1").style.display = "block";
  } else if (counter === 2) {
    document.getElementById("image2").style.display = "block";
  } else if (counter === 3) {
    document.getElementById("image3").style.display = "block";
  } else if (counter === 4) {
    document.getElementById("image4").style.display = "block";
  }
});
document.getElementById("prevBtn").addEventListener("click", function () {
  counter--;
  if (counter < 1) {
    counter = 4;
  }
  slideImg[0].style.display = "none";
  slideImg[1].style.display = "none";
  slideImg[2].style.display = "none";
  slideImg[3].style.display = "none";
  if (counter === 1) {
    document.getElementById("image1").style.display = "block";
  } else if (counter === 2) {
    document.getElementById("image2").style.display = "block";
  } else if (counter === 3) {
    document.getElementById("image3").style.display = "block";
  } else if (counter === 4) {
    document.getElementById("image4").style.display = "block";
  }
});
