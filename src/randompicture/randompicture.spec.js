import {RandomPicture} from './randompicture.js';

describe('Main view tests', ()=>{
  const randompicture = new RandomPicture(document.body);
  window.randompicture = randompicture;

  it('should exist', ()=>{
    expect(randompicture).not.toBe(undefined);
  });

  it('should display picture', ()=>{
    const svg = document.getElementsByTagName('svg');
    expect(svg).toHaveLength(1);
  });

  it('should have label label for quantity', ()=>{
    const label = document.getElementsByTagName('label');
    expect(label[0].innerHTML).toEqual('Quantity');
  });

  it('should have field for number, default 1, min, max 52', ()=>{
    const quantityInput = document.getElementById('quantity');
    expect(quantityInput).toEqual(expect.any(HTMLInputElement));
    expect(quantityInput.type).toEqual('number');
    expect(quantityInput.value).toEqual('1');
    expect(quantityInput.getAttribute('min')).toEqual('1');
    expect(quantityInput.getAttribute('max')).toEqual('52');
  });

  it('should be able to choose random picture string', ()=>{
    const picture = randompicture.getRandomPicture();
    const picture2 = randompicture.getRandomPicture();
    expect(picture.substr(0, 4)).toEqual('<svg');
    expect(picture2).not.toEqual(picture); // will fail randomly
  });

  it('should have a refresh button', ()=>{
    const button = document.getElementById('button');
    expect(button).toEqual(expect.any(HTMLButtonElement));
    expect(button.innerHTML).toEqual('Refresh');
  });

  it('should load new picture when refresh button is clicked', ()=>{
    const picture1 = document.getElementById('svgContainer').innerHTML;
    randompicture.refreshClicked();
    const picture2 = document.getElementById('svgContainer').innerHTML;
    expect(picture1).not.toEqual(picture2);
  });

  it('should load multiple unique pictures based on quantity field', ()=>{
    const quantityInput = document.getElementById('quantity');
    quantityInput.value = 24;
    randompicture.refreshClicked();
    const pictures = document.getElementsByTagName('svg');
    expect(pictures).toHaveLength(24);
    const seen = [];
    for (let i = 0; i < pictures.length; i++) {
      expect(seen.indexOf(pictures[i])).toEqual(-1);
      seen.push(pictures[i]);
    }
    expect(seen).toHaveLength(24);
  });
});
