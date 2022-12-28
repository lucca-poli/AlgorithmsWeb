class Renderer {
  designList() {
    const list = document.createElement(`div`);

    list.appendChild(this.designElement("L", "pointer"));

    list.style.display = "flex";
    list.style.justifyContent = "center";
    list.style.flexDirection = "row";
    list.style.width = "100vw";
    list.style.padding = "1em";

    return list;
  }

  designElement(left: number | string, right: string) {
    const element = document.createElement(`div`);
    const elementValueLeft = document.createElement(`div`);
    const elementValueRight = document.createElement(`div`);
    const pointerImage = document.createElement(`img`);
    pointerImage.src = "../../Assets/longRightArrow.svg";

    pointerImage.style.position = `relative`;
    pointerImage.style.left = `25px`;
    pointerImage.style.width = "30px";
    pointerImage.style.transform = `scale(3,1)`;

    element.style.display = "flex";
    element.style.flexDirection = "row";
    element.style.height = "30px";
    element.style.width = "60px";
    element.style.marginLeft = "40px";

    elementValueLeft.style.width = "30px";
    elementValueLeft.style.height = "30px";
    elementValueLeft.style.display = "flex";
    elementValueLeft.style.alignItems = "center";
    elementValueLeft.style.justifyContent = "center";
    elementValueLeft.style.border = "2px solid black";

    elementValueRight.style.width = "30px";
    elementValueRight.style.height = "30px";
    elementValueRight.style.display = "flex";
    elementValueRight.style.alignItems = "center";
    elementValueRight.style.justifyContent = "center";
    elementValueRight.style.border = "2px solid black";

    elementValueLeft.innerHTML = left.toString();
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

class Elemento {
  elementValue: number;
  nextElement: Elemento | null;
  elementHTML: Node;

  constructor(elementValue: number) {
    this.elementValue = elementValue;
    this.nextElement = null;

    const elementDesign = new Renderer();
    this.elementHTML = elementDesign.designElement(elementValue, "null");
  }
}

class ListaLigada {
  start: Elemento | null;
  startHTML: Node;

  constructor() {
    this.start = null;

    const startDesign = new Renderer();
    this.startHTML = startDesign.designList();
  }

  listInsert(element: Elemento) {
    if (this.start === null) {
      this.start = element;
      this.startHTML.appendChild(element.elementHTML);
      return;
    }
    element.nextElement = this.start;
    this.start = element;

    const startDesign = new Renderer();
    element.elementHTML = startDesign.designElement(
      element.elementValue,
      "pointer"
    );

    this.startHTML.insertBefore(
      element.elementHTML,
      this.startHTML.childNodes[1]
    );
  }

  listSearch(k: number) {
    let elementX = this.start;
    while (k !== elementX?.elementValue && elementX?.nextElement !== null) {
      elementX = elementX?.nextElement;
    }
  }
}

const listaPrincipal = new ListaLigada();
const firstElement = new Elemento(2);
const secondElement = new Elemento(5);
const thirdElement = new Elemento(11);

listaPrincipal.listInsert(firstElement);
listaPrincipal.listInsert(secondElement);
listaPrincipal.listInsert(thirdElement);

const test = listaPrincipal.startHTML;

const mainDisplay = document.querySelector("#display");
mainDisplay?.appendChild(test);
