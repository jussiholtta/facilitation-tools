import './metaphorcourse.css';

/** Main View
 *
 */
export class MetaphorCourse {
  constructor(root, datasource) {
    this.rootNode = root;

    const randomizeButton = document.createElement('button');
    randomizeButton.id = 'button';
    randomizeButton.className = 'tch-btn-header-secondary'; // teachable class name

    if (datasource === 'questions') {
      randomizeButton.innerHTML = 'New Question';
      this.DATA = [
        'What is your current profession?',
        'How was your childhood?',
        'What do you want to be?',
        'What\'s up?',
        'What is your sense of humor like?',
        'What do you want?',
      ];
    } else {
      randomizeButton.innerHTML = 'New Metaphor';
      this.DATA = [
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
        'leaf on the wind',
      ];
    }


    this.itemContainer = document.createElement('h1');
    this.itemContainer.id = 'itemcontainer';
    this.itemContainer.className = 'container';

    this.rootNode.appendChild(randomizeButton);
    this.rootNode.parentNode.appendChild(this.itemContainer);
    randomizeButton.addEventListener('click', this.buttonClicked, false);
  }

  init() {
    this.pickItem(this.DATA[Math.floor(Math.random()*this.DATA.length)]);
  }


  pickItem(newitem) {
    const itemdiv = document.getElementById('itemcontainer');
    itemdiv.innerHTML = newitem;
  }

  buttonClicked() {
    shuffleArray(window.rand.DATA);
    window.rand.pickItem(window.rand.DATA[0]);
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
function init(parameter) {
  if (parameter) {
    rand = new MetaphorCourse(document.getElementById('random'+parameter), parameter);
  } else {
    rand = new MetaphorCourse(document.getElementById('randommetaphors'));
  }
  window.rand = rand;
}

window.metaphorcourseinit = init;
