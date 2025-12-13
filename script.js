console.log("GitHub User Finder Script Loaded");

const change_bg_color = document.getElementById("change-bg-color");

function getRandomColor() {
  return `rgb(
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)}
  )`;
}

change_bg_color.addEventListener("click", () => {
  change_bg_color.style.backgroundColor = getRandomColor();
});
