import Clock from './clock.js';

describe('Main view tests', () => {
  document.body.innerHTML = '<div id="clock"></div>';
  const clock = new Clock(document.getElementById('clock'));
  window.clock = clock;

  it('should exist', () => {
    expect(clock).not.toBe(undefined);
  });

  it('should have a button', () => {
    const button = document.getElementById('button');
    expect(button).toEqual(expect.any(HTMLButtonElement));
    expect(button.innerHTML).toEqual('Start');
  });

  it('should have range for duration, 0 min, TIMER_MAX, TIMER_DEFAULT', () => {
    const range = document.getElementById('duration');
    expect(range).toEqual(expect.any(HTMLInputElement));
    expect(range.value).toEqual(clock.TIMER_DEFAULT + '');
    expect(range.min).toEqual('0');
    expect(range.max).toEqual(clock.TIMER_MAX + '');
  });

  it('should create svg element', () => {
    expect(clock.draw.node).toEqual(expect.any(SVGElement));
  });

  it('should have a div for the svg canvas', () => {
    const canvas = document.getElementById('canvas');
    expect(canvas).toEqual(expect.any(HTMLElement));
  });

  it('should display clock svg element', () => {
    const svgClock = document.getElementById('svgclock');
    expect(svgClock.nodeName).toBe('line');
  });

  it('should update clock and text when range is changed', () => {
    clock.rangeMoving(55);
    const svgClock = document.getElementById('svgclock');

    expect(parseFloat(svgClock.getAttribute('x2')))
      .toBeCloseTo(55 * clock.width / clock.TIMER_MAX, 5);
  });

  it('should calc clock width relative to TIMER_MAX', () => {
    expect(clock.calcClockWidth())
      .toEqual(clock.width / clock.TIMER_MAX * 55);
  });

  it('should have a second hand drawn as a line', () => {
    expect(clock.secondHand).not.toBe(undefined);
    expect(clock.secondHand.line.type).toBe('line');
  });

  it('second hand length should be 100', () => {
    expect(clock.secondHand).toHaveLength(100);
  });

  it('1 second should be 6 degrees on the clock face', () => {
    clock.rangeMoving(15);
    expect(clock.secondHand.angle).toBe(90 * Math.PI / 180);
    clock.rangeMoving(30);
    expect(clock.secondHand.angle).toBe(180 * Math.PI / 180);
  });



  /*
    it('', () => {
      expect(true).toBe(false);
    });
    */
});
