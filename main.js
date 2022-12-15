const Header = document.getElementById("Header");
const Body = document.getElementById("Body");

const Home = document.createElement("div");
const DataStructures = document.createElement("div");
const Algorithms = document.createElement("div");

Home.className = "headerElement";
DataStructures.className = "headerElement";
Algorithms.className = "headerElement";

Home.innerText = "Home";
DataStructures.innerText = "Data Structures";
Algorithms.innerText = "Algorithms";

Header.appendChild(DataStructures);
Header.appendChild(Home);
Header.appendChild(Algorithms);

//falta implementar, perguntar pra AI:
//how can i make a div overwrite and ignore
//other HTML elements?
//like a error message that takes over the entire screen
const SubHeader = document.createElement("div");
SubHeader.className = "subHeader";
