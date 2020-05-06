import './pickrandom.css';

/** Main View
 *
 */
export class PickRandom {
  constructor(root) {
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
    this.rootNode.parentNode.appendChild(this.itemContainer);
    randomizeButton.addEventListener('click', this.buttonClicked, false);

    this.initialLoad();
  }

  initialLoad() {
    const input = document.getElementById('iteminput');
    const items = input.value.split(',');
    this.pickItem(items[0]);
  }

  pickItem(newitem) {
    const itemdiv = document.getElementById('itemcontainer');
    itemdiv.innerHTML = newitem;
  }

  buttonClicked() {
    const newinput = document.getElementById('iteminput');
    const newitems = newinput.value.split(',');
    shuffleArray(newitems);
    window.rand.pickItem(newitems[0]);
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
  rand = new PickRandom(document.getElementById('pickrandom'));
  window.rand = rand;
}
window.addEventListener('load', init);
