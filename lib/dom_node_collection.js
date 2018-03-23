class DomNodeCollection {
  constructor(elementArr) {
    this.htmlEls = elementArr;
  }

  html(string) {
    if (!string) {
      this.htmlEls[0].innerHTML = string;
    } else {
      this.htmlEls.forEach( (el) => {
        el.innerHTML = string;
       });
    }
  }
}

module.exports = DomNodeCollection;
