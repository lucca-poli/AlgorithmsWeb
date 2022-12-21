const dataStructures = document.querySelector(`.datastructures-menu`);
const algorithms = document.querySelector(`.algorithms-menu`);

const dataStructuresButton = document.querySelector(
  `.datastructures-menu-button`
);
const algorithmsButton = document.querySelector(`.algorithms-menu-button`);

dataStructuresButton.addEventListener("click", () => {
  //the transition is not smooth
  if (window.getComputedStyle(dataStructures).display === "none") {
    dataStructures.style.display = "block";
    dataStructures.style.transform = "translateY(0%)";
    dataStructures.style.opacity = 1;
    dataStructures.style.transition =
      "transform 2s ease-out, opacity 2s ease-out";
  } else {
    dataStructures.style.display = "none";
    dataStructures.style.transform = "translateY(-100%)";
    dataStructures.style.opacity = 0;
  }
});

algorithmsButton.addEventListener("click", () => {
  if (window.getComputedStyle(algorithms).display === "none") {
    algorithms.style.display = "block";
    algorithms.style.transform = "translateY(0%)";
    algorithms.style.opacity = 1;
  } else {
    algorithms.style.display = "none";
    algorithms.style.transform = "translateY(-100%)";
    algorithms.style.opacity = 0;
  }
});
