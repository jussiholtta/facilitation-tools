import './anyrandomizer.css';

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

    const itemInput = document.createElement('input');
    itemInput.id = 'iteminput';
    itemInput.type = 'text';
    itemInput.value = 'a,b,c,d,e,f';

    this.itemContainer = document.createElement('div');
    this.itemContainer.id = 'itemcontainer';
    this.itemContainer.className = 'container';

    this.itemInput = this.rootNode.appendChild(itemInput);
    this.rootNode.appendChild(randomizeButton);
    this.rootNode.appendChild(this.itemContainer);
    randomizeButton.addEventListener('click', this.buttonClicked, false);

    this.initialLoad();
  }

  initialLoad() {
    const input = document.getElementById('iteminput');
    const items = input.value.split(',');
    this.createItems(items);
  }

  createItems(items) {
    items.forEach((item) => {
      const itemdiv = document.createElement('div');
      itemdiv.className = 'item';
      itemdiv.innerHTML = item;
      this.itemContainer.appendChild(itemdiv);
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
    window.rand.deleteItems();
    const newinput = document.getElementById('iteminput');
    const newitems = newinput.value.split(',');
    shuffleArray(newitems);
    window.rand.createItems(newitems);
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
let rand;
function init() {
  rand = new Anyrandomizer(document.getElementById('anyrandomizer'));
  window.rand = rand;
}
window.addEventListener('load', init);
