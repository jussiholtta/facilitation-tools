import {RandomMetaphor} from './randommetaphor.js';

describe('Main view tests', ()=>{
  const pickrand = new RandomMetaphor(document.body);
  window.rand = pickrand;

  it('should exist', ()=>{
    expect(pickrand).not.toBe(undefined);
  });

  it('should have container div', ()=> {
    const itemContainer = document.getElementById('itemcontainer');
    expect(itemContainer).toEqual(expect.any(HTMLElement));
    expect(itemContainer.className).toEqual('container');
  });

  /* it('should not load metaphor on load', ()=> { // teachable version like this
    const itemContainer = document.getElementById('itemcontainer');
    expect(itemContainer.innerHTML).toEqual('');
  });*/

  it('should have a refresh button', ()=>{
    const button = document.getElementById('button');
    expect(button).toEqual(expect.any(HTMLButtonElement));
    expect(button.innerHTML).toEqual('New Metaphor');
  });

  it('should shuffle items when button is clicked', ()=>{
    const item1 = document.getElementById('itemcontainer').innerHTML;
    pickrand.buttonClicked();
    const item2 = document.getElementById('itemcontainer').innerHTML;
    expect(item2).not.toEqual(item1); // this will fail randomly, randomness doesn't guarantee different
  });
});
