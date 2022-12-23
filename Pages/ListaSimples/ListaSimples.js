class Renderer {
  constructor(value, pointer) {
    this.elementDesign = this.designElement(value, pointer);
    this.listDesign = this.designList();
  }

  designList() {
    const list = document.createElement(`div`);
    const firstElement = new Renderer("L", "pointer");
    list.appendChild(firstElement.elementDesign);

    list.style.display = "flex";
    list.style.flexDirection = "row";
    list.style.width = "100vw";

    return list;
  }

  designElement(left, right) {
    const element = document.createElement(`div`);
    const elementValueLeft = document.createElement(`div`);
    const elementValueRight = document.createElement(`div`);
    const pointerImage = document.createElement(`img`);
    pointerImage.src = "../../Assets/longRightArrow.svg";

    pointerImage.style.position = `relative`;
    pointerImage.style.left = `2.5em`;
    pointerImage.style.width = "3vw";
    pointerImage.style.transform = `scale(3,1)`;

    element.style.display = "flex";
    element.style.flexDirection = "row";
    element.style.height = "3vh";
    element.style.width = "6vw";

    elementValueLeft.style.width = "3vw";
    elementValueLeft.style.height = "3vh";
    elementValueLeft.style.display = "flex";
    elementValueLeft.style.alignItems = "center";
    elementValueLeft.style.justifyContent = "center";
    elementValueLeft.style.border = "2px solid black";

    elementValueRight.style.width = "3vw";
    elementValueRight.style.height = "3vh";
    elementValueRight.style.display = "flex";
    elementValueRight.style.alignItems = "center";
    elementValueRight.style.justifyContent = "center";
    elementValueRight.style.border = "2px solid black";

    elementValueLeft.innerHTML = left;
    if (right === "null") {
      elementValueRight.innerHTML = "/";
    }
    if (right === "pointer") {
      elementValueRight.appendChild(pointerImage);
    }
    element.appendChild(elementValueLeft);
    element.appendChild(elementValueRight);
    return element;
  }
}

class ELement {
  constructor(elementValue) {
    this.elementValue = elementValue;
    this.nextElement = null;

    const elementDesign = new Renderer(value, "null");
    this.elementHTML = elementDesign.elementDesign;
  }
}

class ListaLigada {
  constructor() {
    this.start = null;

    const startDesign = new Renderer("L", "pointer");
    this.startHTML = startDesign.listDesign;
  }

  listInsert(element) {
    if (this.start === null) {
      this.start = element;
      return;
    }
    element.nextElement = this.start;
    this.start = element;
    element.elementHTML.style.marginLeft = "2em";
  }
}

const listaPrincipal = new ListaLigada();
const elementTest = new Element(2);

const mainDisplay = document.querySelector(`#display`);
mainDisplay.appendChild(listaPrincipal.startHTML);
