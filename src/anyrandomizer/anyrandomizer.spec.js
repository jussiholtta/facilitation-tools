import {Anyrandomizer} from './anyrandomizer.js';

describe('Main view tests', ()=>{
  const anyrand = new Anyrandomizer(document.body);
  window.rand = anyrand;

  it('should exist', ()=>{
    expect(anyrand).not.toBe(undefined);
  });

  it('should have field for text', ()=>{
    const itemInput = document.getElementById('iteminput');
    expect(itemInput).toEqual(expect.any(HTMLInputElement));
    expect(itemInput.type).toEqual('text');
    expect(itemInput.value).toEqual('a,b,c,d,e,f');
  });

  it('should have container for divs', ()=> {
    const itemContainer = document.getElementById('itemcontainer');
    expect(itemContainer).toEqual(expect.any(HTMLElement));
    expect(itemContainer.className).toEqual('container');
  });

  it('should display textfield contents as divs', ()=>{
    const itemDivs = document.getElementsByClassName('item');
    expect(itemDivs).toHaveLength(6);
  });

  it('should have a randomize button', ()=>{
    const button = document.getElementById('button');
    expect(button).toEqual(expect.any(HTMLButtonElement));
    expect(button.innerHTML).toEqual('Refresh');
  });

  it('should shuffle items when button is clicked', ()=>{
    const itemNodes1 = document.getElementsByClassName('item');
    const items1 = Array.from(itemNodes1);
    expect(items1[0].innerHTML).toEqual('a');
    anyrand.buttonClicked();
    const items2 = document.getElementsByClassName('item');
    expect(items2).not.toEqual(items1); // this will fail randomly, randomness doesn't guarantee different
  });

  it('should be able to delete item divs', ()=>{
    anyrand.deleteItems();
    const itemDivs = document.getElementsByClassName('item');
    expect(itemDivs).toHaveLength(0);
  });
});
