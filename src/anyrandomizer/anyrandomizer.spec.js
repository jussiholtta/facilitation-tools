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
    expect(items.value).toEqual('a,b,c');
  });

  it('should display textfield contents as divs', ()=>{
    const itemDivs = document.getElementsByClassName('item');
    expect(itemDivs.length).toEqual(3);
  });

  it('should be able to delete item divs', ()=>{
    anyrand.deleteItems();
    const itemDivs = document.getElementsByClassName('item');
    expect(itemDivs.length).toEqual(0);
  });

  it('should have a randomize button', ()=>{
    const button = document.getElementById('button');
    expect(button).toEqual(expect.any(HTMLButtonElement));
    expect(button.innerHTML).toEqual('Refresh');
  });

  it('should shuffle items when button is clicked', ()=>{
    const picture1 = document.getElementById('svgContainer').innerHTML;
    anyrand.refreshClicked();
    const picture2 = document.getElementById('svgContainer').innerHTML;
    expect(picture1).not.toEqual(picture2);
  });
});
