(function(window) {
  function Circular() {
    this.index = 0;
    this.items = ["1", "2", "3"];

    this.cache();
    this.addListeners();
    this.render();
  }

  Circular.prototype.cache = function() {
    this.holder = document.querySelector(".circular__holder");
    this.nextButton = document.querySelector(".circular__button");
  };

  Circular.prototype.addListeners = function() {
    this.nextButton.addEventListener("click", this.nextItem.bind(this));
  };

  Circular.prototype.nextItem = function() {
    var itemsLength = this.items.length;
    this.index = this.index + 1 >= itemsLength ? 0 : this.index + 1;
    this.render();
  };

  Circular.prototype.render = function() {
    var item = document.createElement("h1");
    var text = document.createTextNode(this.index.toString());
    item.appendChild(text);

    this.holder.innerHTML = "";
    this.holder.appendChild(item);
  };

  window.Circular = new Circular();
})(window);
