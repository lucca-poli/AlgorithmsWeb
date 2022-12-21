const dataStructures = document.querySelector(`.datastructures-menu`);
const algorithms = document.querySelector(`.algorithms-menu`);

const dataStructuresButton = document.querySelector(
  `.datastructures-menu-button`
);
const algorithmsButton = document.querySelector(`.algorithms-menu-button`);

dataStructuresButton.addEventListener("click", () => {
  //the listener is working but not the .style inside the listener
  if (window.getComputedStyle(dataStructuresButton).display === "none") {
    dataStructures.style.display = "block";
    dataStructures.style.transform = "translateY(0%)";
  } else {
    dataStructures.style.display = "none";
    dataStructures.style.transform = "translateY(-100%)";
  }
});
