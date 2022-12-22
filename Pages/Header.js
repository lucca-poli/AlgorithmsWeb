const dataStructures = document.querySelector(`#datastructures-menu`);
const algorithms = document.querySelector(`#algorithms-menu`);

const dataStructuresButton = document.querySelector(
  `.datastructures-menu-button`
);
const algorithmsButton = document.querySelector(`.algorithms-menu-button`);

dataStructuresButton.addEventListener("click", () => {
  if (window.getComputedStyle(dataStructures).display === "none") {
    dataStructures.style.display = "block";
    dataStructures.style.transform = "translateY(0%)";
  } else {
    dataStructures.style.display = "none";
    dataStructures.style.transform = "translateY(-100%)";
  }
});

algorithmsButton.addEventListener("click", () => {
  if (window.getComputedStyle(algorithms).display === "none") {
    algorithms.style.display = "block";
    algorithms.style.transform = "translateY(0%)";
  } else {
    algorithms.style.display = "none";
    algorithms.style.transform = "translateY(-100%)";
  }
});
