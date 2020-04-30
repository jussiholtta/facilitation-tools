import {Anyrandomizer} from './anyrandomizer.js';

describe('Main view tests', ()=>{
  const anyrand = new Anyrandomizer(document.body);

  it('should exist', ()=>{
    expect(anyrand).not.toBe(undefined);
  });

  it('should have field for text', ()=>{
    const items = document.getElementById('items');
    expect(items).toEqual(expect.any(HTMLInputElement));
    expect(items.type).toEqual('text');
    expect(items.value).toEqual('a,b,c,d,e,f');
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
    const items1 = document.getElementsByClassName('item');
    expect(items1[0].innerHTML).toEqual('a');
    anyrand.buttonClicked();
    const items2 = document.getElementsByClassName('item');
    expect(items1[0].innerHTML).toEqual('a');
    expect(items2[0]).toEqual('a');
    expect(items2).not.toEqual(items1);
  });

  it('should be able to delete item divs', ()=>{
    anyrand.deleteItems();
    const itemDivs = document.getElementsByClassName('item');
    expect(itemDivs).toHaveLength(0);
  });
});
