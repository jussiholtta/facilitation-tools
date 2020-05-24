import { SVG } from '@svgdotjs/svg.js';
import './clock.css';
/** Main View
 *
 */
export default class Clock {
  /**
   * Create new clock
   * @param {*} root
   */
  constructor(root) {
    /** CONSTANTS
            */
    this.TIMER_MAX = 360;
    this.TIMER_DEFAULT = 180;

    this.rootNode = root;

    this.handButton = document.createElement('button');
    this.handButton.id = 'button';
    this.handButton.innerHTML = 'Start';

    this.range = document.createElement('input');
    this.range.id = 'duration';
    this.range.type = 'range';
    this.range.min = 0;
    this.range.max = this.TIMER_MAX;
    this.range.value = this.TIMER_DEFAULT;
    this.range.setAttribute('onInput', 'clock.rangeMoving(this.value)');

    const canvas = document.createElement('div');
    canvas.id = 'canvas';
    canvas.className = 'canvas';


    this.rootNode.appendChild(canvas);
    this.rootNode.appendChild(this.handButton);
    this.rootNode.appendChild(this.range);

    this.width = window.innerWidth - 50;
    this.height = window.innerHeight - 100;
    this.draw = SVG().addTo('#canvas').size(this.width, this.height);

    this.draw.viewbox(0, 0, this.width, this.height);
    this.background = this.draw.rect(this.width, this.height).fill('#dde3e1');
    this.createClockSVG();
    this.createSecondHand();

    this.handButton.addEventListener('click', this.buttonClicked, false);
  }

  /**
   * Create graphical clock
   */
  createClockSVG() {
    this.clockSVG = this.draw.line(0, this.height / 2,
      this.calcClockWidth(), this.height / 2)
      .stroke({ color: '#000000', width: this.height });
    this.clockSVG.node.id = 'svgclock';
  }

  /**
   * Create graphical clock
   */
  createSecondHand() {
    this.secondHand = {};
    this.secondHand.ox = this.width / 2;
    this.secondHand.oy = this.height / 2;
    this.secondHand.length = 100;
    this.secondHand.angle = this.range.value * 6 * Math.PI / 180;
    this.secondHand.width = 3;
    this.secondHand.line = this.drawHand(this.secondHand);
    this.secondHand.line.node.id = 'secondhand';
  }

  drawHand(hand) {
    let x = hand.ox + hand.length * Math.cos(hand.angle);
    let y = hand.oy + hand.length * Math.sin(hand.angle);
    return this.draw.line(hand.ox, hand.oy, x, y).stroke({ color: '#000000', width: hand.width });
  }

  setTime() {
    this.secondHand.line.remove();
    this.createSecondHand();
  }

  /**
 *
 * @return {number} calculated clock width
 */
  calcClockWidth() {
    return this.width / this.TIMER_MAX * this.range.value;
  }

  /**
   * React to the range slider
   * @param {number} value
   */
  rangeMoving(value) {
    this.range.value = value;
    this.clockSVG.node.setAttribute('x2', this.calcClockWidth());
    this.setTime(value);
  }
  /**
   * Start clock
   */
  start() {
    this.handButton.innerHTML = 'Stop';
    this.running = setTimeout(() => {
      this.rangeMoving(this.range.value - 1);
      if (this.range.value > 0) {
        window.clock.start();
      }
    }, 1000);
  }
  /**
 * Stop clock
 */
  stop() {
    window.clearTimeout(this.running);
    window.clock.running = null;
    window.clock.handButton.innerHTML = 'Start';
  }

  /**
   * button handler
   */
  buttonClicked() {
    if (window.clock.running) {
      window.clock.stop();
    } else {
      window.clock.start();
    }
  }
}

/**
 * automatically create clock when loaded
 */
function init() {
  window.clock = new Clock(document.getElementById('clock'));
}
window.addEventListener('load', init);
