import {AA} from './aa.js';

describe('Main view tests', ()=>{
  const aa = new AA(document.body);
  window.aa = aa;

  it('should exist', ()=>{
    expect(aa).not.toBe(undefined);
  });

  it('should display 2 pictures', ()=>{
    const svg = document.getElementsByTagName('svg');
    expect(svg).toHaveLength(2);
  });

  it('should have a refresh button', ()=>{
    const button = document.getElementById('button');
    expect(button).toEqual(expect.any(HTMLButtonElement));
    expect(button.innerHTML).toEqual('New Pair');
  });

  it('should 2 display different pictures', ()=>{
    aa.refreshClicked();
    const pictures = document.getElementsByTagName('svg');
    expect(pictures).toHaveLength(2);
    const seen = [];
    for (let i = 0; i < pictures.length; i++) {
      expect(seen.indexOf(pictures[i])).toEqual(-1);
      seen.push(pictures[i]);
    }
    expect(seen).toHaveLength(2);
  });
});
