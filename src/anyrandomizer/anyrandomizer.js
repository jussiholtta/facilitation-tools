/** Main View
 *
 */
export class Anyrandomizer {
  constructor(root) {
    this.rootNode = root;

    const randomizeButton = document.createElement('button');
    randomizeButton.id = 'button';
    randomizeButton.innerHTML = 'Refresh';
    
    const itemsInput = document.createElement('input');
    itemsInput.id = 'items';
    itemsInput.type = 'text';
    itemsInput.value = 'a,b,c';

    this.itemsInput = this.rootNode.appendChild(itemsInput);
    this.rootNode.appendChild(randomizeButton);
    randomizeButton.addEventListener('click', this.buttonClicked, false);
    this.init();
  }

  getAnyrandomizer() {
    let i = Math.floor(Math.random() * INDEX);
    if (this.last == i) // tetris algorithm, roll again if the same pic, but allow same after that
    {
      i = Math.floor(Math.random() * INDEX);
    }
    this.last = i;
    return PICTURES[i];
  }

  init() {
    let input = document.getElementById('items');
    let items = input.value.split(',');
    items.forEach(item => {
      let i = document.createElement('div');
      i.className = 'item'
      i.innerHTML = item;
      this.rootNode.appendChild(i);
    });
  }
  deleteItems() {
    let items = document.getElementsByClassName('item');
    let count = items.length
    for(let i = 0;i <=items.length;i++) {
      console.log(items[i].innerHTML)
      items[0].remove();
    }
      
    
  }

  buttonClicked() {
    const quantity = document.getElementById('quantity').value;
    const svg = document.getElementById('svgContainer');
    svg.innerHTML = getAnyrandomizers(quantity);
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

function getAnyrandomizers(quantity) {
  let pictureString = '';
  shuffleArray(INDEXARRAY);
  const list = INDEXARRAY.slice(0, quantity);
  list.forEach((number) => {
    pictureString += PICTURES[number];
  });
  return pictureString;
}

const PICTURES = [];
const INDEX = 1;//PICTURES.length;
const INDEXARRAY = [...new Array(INDEX).keys()];

function init() {
  const rand = new Anyrandomizer(document.getElementById('anyrandom'));
}
window.addEventListener('load', init);
