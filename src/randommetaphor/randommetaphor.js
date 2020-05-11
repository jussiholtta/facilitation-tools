import './randommetaphor.css';

/** Main View
 *
 */
export class RandomMetaphor {
  constructor(root) {
    this.rootNode = root;

    const randomizeButton = document.createElement('button');
    randomizeButton.id = 'button';
    randomizeButton.innerHTML = 'New Metaphor';
    randomizeButton.className = 'tch-btn-header-secondary'; // teachable class name


    this.itemContainer = document.createElement('h1');
    this.itemContainer.id = 'itemcontainer';
    this.itemContainer.className = 'container';

    this.rootNode.appendChild(randomizeButton);
    this.rootNode.parentNode.appendChild(this.itemContainer);
    randomizeButton.addEventListener('click', this.buttonClicked, false);

    this.METAPHORS = [
      'all the world\'s a stage',
      'music to my ears',
      'rings a bell',
      'up in the air',
      'broke the bank',
      'a piece of cake',
      'not my cup of tea',
      'heart of stone',
      'strength of an ox',
      'stab me in the back',
      'face the music',
      'break the ice',
      'the black sheep',
      'weighing on my mind',
      'spill the beans',
      'give someone a hand',
      'hit him hard',
      'eaten up',
      'at the back of my mind',
      'took an unexpected direction',
      'time is money',
      'a fish out of water',
      'conscience is a man\'s compass',
      'cold feet',
      'night owl',
      'beat a dead horse',
      'early bird',
      'couch potato',
      'heart of a lion',
      'heart of gold',
      'light up the room',
    ];
    this.init(); // disabled for teachable
  }

  init() {
    this.pickItem(this.METAPHORS[Math.floor(Math.random()*this.METAPHORS.length)]);
  }


  pickItem(newitem) {
    const itemdiv = document.getElementById('itemcontainer');
    itemdiv.innerHTML = newitem;
  }

  buttonClicked() {
    shuffleArray(window.rand.METAPHORS);
    window.rand.pickItem(window.rand.METAPHORS[0]);
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
  rand = new RandomMetaphor(document.getElementById('randommetaphor'));
  window.rand = rand;
}

window.randommetaphorinit = init;
