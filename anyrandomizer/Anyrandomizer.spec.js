import Anyrandomizer from './Anyrandomizer.js';

describe('Main view tests', ()=>{
    var anyrand;

    beforeEach(() => {
        document.body.innerHTML ='<div id="Anyrandomizer"></div>'
        anyrand = new Anyrandomizer(document.getElementById("Anyrandomizer"));
    });
    afterEach(() => {
        jest.resetModules()
    });
    
    it('should exist', ()=>{
        expect(anyrand).not.toBe(undefined);
    })

    it('should have div(s) for items', ()=>{
        let div = document.getElementById('Anyrandomizer');
        expect(div).toEqual(expect.any(HTMLElement));
    })

})
