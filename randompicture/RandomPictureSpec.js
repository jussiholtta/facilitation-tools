describe('Main view tests', ()=>{
    let randompicture = new RandomPicture(document.documentElement);
    it('should exist', ()=>{
        expect(randompicture).not.toBe(undefined);
    })

    it('should display picture', ()=>{
        let svg = document.getElementsByTagName('svg');
        expect(svg.length).toEqual(1);
    })

    it('should have label label for quantity', ()=>{
        let label = document.getElementsByTagName('label');
        expect(label[0].innerHTML).toEqual('Quantity');
    })

    it('should have field for number, default 1, min, max 53', ()=>{
        let quantityInput = document.getElementById('quantity');
        expect(quantityInput).toEqual(jasmine.any(HTMLInputElement));
        expect(quantityInput.type).toEqual('number');
        expect(quantityInput.value).toEqual('1');
        expect(quantityInput.getAttribute("min")).toEqual('1');
        expect(quantityInput.getAttribute("max")).toEqual('53');
    })

    it('should be able to choose random picture string', ()=>{
        let picture = randompicture.getRandomPicture();
        let picture2 = randompicture.getRandomPicture();
        expect(picture.substr(0,4)).toEqual("<svg");
        expect(picture2).not.toEqual(picture); //will fail randomly
    });

    it('should have a refresh button', ()=>{
        let button = document.getElementById('button');
        expect(button).toEqual(jasmine.any(HTMLButtonElement));
        expect(button.innerHTML).toEqual('Refresh')
    })

    it('should load new picture when refresh button is clicked', ()=>{
        let picture1 = document.getElementById('svgContainer').innerHTML;
        randompicture.refreshClicked();
        let picture2 = document.getElementById('svgContainer').innerHTML;
        expect(picture1).not.toEqual(picture2);
    })

    it('should load multiple unique pictures based on quantity field', ()=>{
        let quantityInput = document.getElementById('quantity');
        quantityInput.value = 24;
        randompicture.refreshClicked();
        let pictures = document.getElementsByTagName('svg');
        expect(pictures.length).toEqual(24);
        let seen = [];
        pictures.forEach(element => {
            expect(seen.indexOf(element)).toEqual(-1);
            seen.push(element);
        });
        expect(seen.length).toEqual(24);
    })
})

