import {PickRandom} from './pickrandom.js';

describe('Main view tests', ()=>{
  const pickrand = new PickRandom(document.body);
  window.rand = pickrand;

  it('should exist', ()=>{
    expect(pickrand).not.toBe(undefined);
  });

  it('should have field for text', ()=>{
    const itemInput = document.getElementById('iteminput');
    expect(itemInput).toEqual(expect.any(HTMLInputElement));
    expect(itemInput.type).toEqual('text');
    expect(itemInput.value).toEqual('a,b,c,d,e,f');
  });

  it('should have container div', ()=> {
    const itemContainer = document.getElementById('itemcontainer');
    expect(itemContainer).toEqual(expect.any(HTMLElement));
    expect(itemContainer.className).toEqual('container');
  });

  it('should have a refresh button', ()=>{
    const button = document.getElementById('button');
    expect(button).toEqual(expect.any(HTMLButtonElement));
    expect(button.innerHTML).toEqual('Refresh');
  });

  it('should shuffle items when button is clicked', ()=>{
    const item1 = document.getElementById('itemcontainer').innerHTML;
    expect(item1).toEqual('a');

    pickrand.buttonClicked();
    const item2 = document.getElementById('itemcontainer').innerHTML;
    expect(item2).not.toEqual(item1); // this will fail randomly, randomness doesn't guarantee different
  });
});
