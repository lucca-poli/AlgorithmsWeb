export class HeaderLinks {
  constructor(linksParent, links) {
    this.linksParent = document.querySelector(linksParent);
    this.links = document.querySelector(links);

    this.activeClass = "active";
  }

  init() {
    if (this.linksParent === undefined) {
      console.log("Error: link received is wrong");
    }
    this.linksParent.addEventListener("click", () => {
      this.linksParent.classList.toggle(this.activeClass);
    });
  }
}
