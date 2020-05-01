import Timer from './timer.js';

describe('Main view tests', ()=>{
  document.body.innerHTML ='<div id="timer"></div>';
  const timer = new Timer(document.getElementById('timer'));

  it('should exist', ()=>{
    expect(timer).not.toBe(undefined);
  });

  it('should have a button', ()=>{
    const button = document.getElementById('button');
    expect(button).toEqual(expect.any(HTMLButtonElement));
    expect(button.innerHTML).toEqual('Start');
  });

  it('should have range for duration, 0 min, TIMER_MAX, TIMER_DEFAULT', ()=>{
    const range = document.getElementById('duration');
    expect(range).toEqual(expect.any(HTMLInputElement));
    expect(range.value).toEqual(timer.TIMER_DEFAULT+'');
    expect(range.min).toEqual('0');
    expect(range.max).toEqual(timer.TIMER_MAX+'');
  });

  it('should create svg element', ()=>{
    expect(timer.draw.node).toEqual(expect.any(SVGElement));
  });

  it('should display timer svg element', ()=>{
    const svgTimer = document.getElementById('svgtimer');
    expect(svgTimer.nodeName).toBe('line');
  });

  it('should have an checkbox to show/hide text with a label', ()=> {
    const checkbox = document.getElementById('togglenumbers');
    const numberlabel = document.getElementById('numberslabel');
    expect(checkbox).toEqual(expect.any(HTMLInputElement));
    expect(checkbox.checked).toBe(false);
    expect(numberlabel.innerHTML).toEqual('Show numbers');
  });

  it('should actually show the time as text when checked', ()=>{
    expect(timer.timerTextSVG).toBe(undefined);
    timer.toggleTimerText();
    expect(timer.timerTextSVG.text()).toEqual('180');
  });

  it('should update timer and text when range is changed', ()=> {
    timer.rangeMoving(55);
    const svgTimer = document.getElementById('svgtimer');

    expect(svgTimer.getAttribute('x2'))
        .toEqual(55*timer.width/timer.TIMER_MAX+'');

    const svgTimerText = document.getElementById('svgtimertext');
    expect(svgTimerText.childNodes[0].innerHTML).toEqual('55');
  });

  it('should calc timer width relative to TIMER_MAX', ()=> {
    expect(timer.calcTimerWidth())
        .toEqual(timer.width/timer.TIMER_MAX*55);
  });

  it('timer should count seconds and stop when button clicked', (done) => {
    timer.rangeMoving(55);
    timer.buttonClicked();
    setTimeout(function() {
      const svgTimerText = document.getElementById('svgtimertext');
      expect(svgTimerText.childNodes[0].innerHTML).toEqual('53');
      timer.buttonClicked();
      setTimeout(function() {
        const svgTimerText = document.getElementById('svgtimertext');
        expect(svgTimerText.childNodes[0].innerHTML).toEqual('53');
        done();
      }, 2000);
    }, 2020); // minor delay from buttonclicked?
  });


  /* it('should slide in a logarithmic scale'
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
});
