/** Main View
 *
 */
export class Anyrandomizer {

  constructor(root) {
    const self = this;
    this.rootNode = root;

    const randomizeButton = document.createElement('button');
    randomizeButton.id = 'button';
    randomizeButton.innerHTML = 'Refresh';

    const itemsInput = document.createElement('input');
    itemsInput.id = 'items';
    itemsInput.type = 'text';
    itemsInput.value = 'a,b,c,d,e,f';

    this.itemsInput = this.rootNode.appendChild(itemsInput);
    this.rootNode.appendChild(randomizeButton);
    randomizeButton.addEventListener('click', this.buttonClicked, false);
    this.init();
  }

  init() {
    const input = document.getElementById('items');
    const items = input.value.split(',');
    this.createItems(items);
  }

  createItems(items) {
    items.forEach((item) => {
      const itemdiv = document.createElement('div');
      itemdiv.className = 'item';
      itemdiv.innerHTML = item;
      this.rootNode.appendChild(itemdiv);
    });
  }

  deleteItems() {
    const items = document.getElementsByClassName('item');
    const count = items.length;
    for (let i = 0; i < count; i++) {
      items[0].remove(); // remove makes the array smaller, just remove the first on n times
    }
  }

  buttonClicked() {
    var self = this;
    self.deleteItems();
    var newinput = document.getElementById('items');
    var newitems = newinput.value.split(',');
    console.log(newitems);
    shuffleArray(newitems);
    console.log(newitems);
    self.createItems(newitems);
  }
}

/**
     * In-place shuffle algorithm stolen from https://stackoverflow.com/a/12646864
     */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function init() {
  const rand = new Anyrandomizer(document.getElementById('anyrandomizer'));
}
window.addEventListener('load', init);
