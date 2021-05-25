let toggle;
console.log(toggle);
function show_hide() {
  if (toggle == 1) {
    document.getElementById("drop-down-menu").style.display = "none";
    return (toggle = 0);
  } else {
    document.getElementById("drop-down-menu").style.display = "flex";
    return (toggle = 1);
  }
}
