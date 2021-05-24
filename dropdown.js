document
  .getElementById("drop-down-menu")
  .addEventListener("click", function () {
    var drowDownMenu = document.getElementById("drop-down-menu");

    if (drowDownMenu.style.display === "none") {
      drowDownMenu.style.display = "flex";
    } else {
      drowDownMenu.style.display = "none";
    }
  });
