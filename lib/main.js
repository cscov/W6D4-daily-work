const DomNodeCollection = require('./dom_node_collection');

window.$l =  (selector) => {
  let arr;
  if (selector instanceof HTMLElement) {
     arr = [selector];
  } else {
    const node = document.querySelectorAll(selector);
    arr = Array.from(node);
  }

  return new DomNodeCollection(arr);
};
