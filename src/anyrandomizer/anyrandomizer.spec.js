import Anyrandomizer from './anyrandomizer.js';

describe('Main view tests', ()=>{
  let anyrand;

  beforeEach(() => {
    document.body.innerHTML ='<div id="Anyrandomizer"></div>';
    anyrand = new Anyrandomizer(document.getElementById('Anyrandomizer'));
  });
  afterEach(() => {
    jest.resetModules();
  });

  it('should exist', ()=>{
    expect(anyrand).not.toBe(undefined);
  });

  it('should have div(s) for items', ()=>{
    const div = document.getElementById('Anyrandomizer');
    expect(div).toEqual(expect.any(HTMLElement));
  });
});
