class ELement {
  constructor(elementValue) {
    this.elementValue = elementValue;
    this.nextElement = null;
  }
}

class ListaLigada {
  constructor() {
    this.start = null;

    const startBlock = document.createElement(`div`);
    const seta = document.createElement(`i`);
    seta.classList.add("fa-solid", "fa-arrow-right-long");
    const display = document.querySelector(`#display`);
    startBlock.innerHTML = '<i class="fa-solid fa-arrow-right-long"></i>';
    startBlock.style.width = "1.5em";
    startBlock.style.height = "1.5em";
    startBlock.style.padding = "0.2em";
    startBlock.style.display = "flex";
    startBlock.style.alignItems = "center";
    startBlock.style.justifyContent = "center";
    startBlock.style.border = "2px solid black";
    display.appendChild(startBlock);
  }

  listInsert(element) {
    if (this.start === null) {
      this.start = element;
      return;
    }
    element.nextElement = this.start;
    this.start = element;
  }
}

const listaPrincipal = new ListaLigada();
