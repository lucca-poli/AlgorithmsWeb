var Renderer = /** @class */ (function () {
    function Renderer() {
    }
    Renderer.prototype.designList = function () {
        var list = document.createElement("div");
        list.appendChild(this.designElement("L", "pointer"));
        list.style.display = "flex";
        list.style.justifyContent = "center";
        list.style.flexDirection = "row";
        list.style.width = "100vw";
        list.style.padding = "1em";
        return list;
    };
    Renderer.prototype.designElement = function (left, right) {
        var element = document.createElement("div");
        var elementValueLeft = document.createElement("div");
        var elementValueRight = document.createElement("div");
        var pointerImage = document.createElement("img");
        pointerImage.src = "../../Assets/longRightArrow.svg";
        pointerImage.style.position = "relative";
        pointerImage.style.left = "25px";
        pointerImage.style.width = "30px";
        pointerImage.style.transform = "scale(3,1)";
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
    };
    return Renderer;
}());
var Elemento = /** @class */ (function () {
    function Elemento(elementValue) {
        this.elementValue = elementValue;
        this.nextElement = null;
        var elementDesign = new Renderer();
        this.elementHTML = elementDesign.designElement(elementValue, "null");
    }
    return Elemento;
}());
var ListaLigada = /** @class */ (function () {
    function ListaLigada() {
        this.start = null;
        var startDesign = new Renderer();
        this.startHTML = startDesign.designList();
    }
    ListaLigada.prototype.listInsert = function (element) {
        if (this.start === null) {
            this.start = element;
            this.startHTML.appendChild(element.elementHTML);
            return;
        }
        element.nextElement = this.start;
        this.start = element;
        var startDesign = new Renderer();
        element.elementHTML = startDesign.designElement(element.elementValue, "pointer");
        this.startHTML.insertBefore(element.elementHTML, this.startHTML.childNodes[1]);
    };
    return ListaLigada;
}());
var listaPrincipal = new ListaLigada();
var firstElement = new Elemento(2);
var secondElement = new Elemento(5);
var thirdElement = new Elemento(11);
listaPrincipal.listInsert(firstElement);
listaPrincipal.listInsert(secondElement);
listaPrincipal.listInsert(thirdElement);
var test = listaPrincipal.startHTML;
var mainDisplay = document.querySelector("#display");
mainDisplay.appendChild(test);
