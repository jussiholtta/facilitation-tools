import expect from 'expect';
describe('Main view tests', ()=>{
    let timer = new Timer(document.documentElement);
    it('should exist', ()=>{
        expect(timer).not.toBe(undefined);
    })

    it('should have a button', ()=>{
        let button = document.getElementById('button');
        expect(button).toEqual(jasmine.any(HTMLButtonElement));
        expect(button.innerHTML).toEqual('Start')
    })

    it('should have range for duration, 0 min, TIMER_MAX max, TIMER_DEFAULT default', ()=>{
        let range = document.getElementById('duration');
        expect(range).toEqual(jasmine.any(HTMLInputElement));
        expect(range.value).toEqual(timer.TIMER_DEFAULT+'');
        expect(range.min).toEqual('0');
        expect(range.max).toEqual(timer.TIMER_MAX+'');
    })

    it('should create svg element', ()=>{
        expect(timer.draw).toEqual(jasmine.any(SVG.Svg));
    })

    it('should display timer svg element', ()=>{
        let svgTimer = document.getElementById('svgtimer');
        expect(svgTimer).toEqual(jasmine.any(SVGLineElement));
    })

    it('should have an checkbox to show/hide text with a label', ()=> {
        let checkbox = document.getElementById('togglenumbers');
        let numberlabel = document.getElementById('numberslabel');
        expect(checkbox).toEqual(jasmine.any(HTMLInputElement));
        expect(checkbox.checked).toBe(false);
        expect(numberlabel.innerHTML).toEqual('Show numbers');
    });

    it('should actually show the time as text when checked', ()=>{
      expect(timer.timerTextSVG).toBe(undefined);
      timer.toggleTimerText();
      expect(timer.timerTextSVG.text()).toEqual('180');
    })

    it('should update timer and text when range is changed', ()=> {
        timer.rangeMoving(55);
        let svgTimer = document.getElementById('svgtimer');
        expect(svgTimer.x2.baseVal.value).toEqual(55*timer.width/timer.TIMER_MAX);
        let svgTimerText = document.getElementById('svgtimertext');
        expect(svgTimerText.childNodes[0].innerHTML).toEqual('55');
    })

    it('should calc timer width relative to TIMER_MAX', ()=> {
        expect(timer.calcTimerWidth()).toEqual(timer.width/timer.TIMER_MAX*55);
    })

    it('timer should count down every second and stop when button clicked', done => {
        timer.rangeMoving(55);
        timer.buttonClicked();
        setTimeout(function() {
            let svgTimerText = document.getElementById('svgtimertext');
            expect(svgTimerText.childNodes[0].innerHTML).toEqual('53');
            timer.buttonClicked();
            setTimeout(function() {
                let svgTimerText = document.getElementById('svgtimertext');
                expect(svgTimerText.childNodes[0].innerHTML).toEqual('53');
                done();
            }, 2000);
        }, 2020); //minor delay from buttonclicked?
        
    })



    /*it('should slide in a logarithmic scale'
    https://stackoverflow.com/a/846249
function logslider(position) {
  // position will be between 0 and 100
  var minp = 0;
  var maxp = 100;

  // The result should be between 100 an 10000000
  var minv = Math.log(100);
  var maxv = Math.log(10000000);

  // calculate adjustment factor
  var scale = (maxv-minv) / (maxp-minp);

  return Math.exp(minv + scale*(position-minp));
}
    */


})

