/** Main View
 *
 */
class Timer {
    constructor(root) {
        /** CONSTANTS
            */
        this.TIMER_MAX = 360;
        this.TIMER_DEFAULT = 180;

        this.rootNode = root;
        const timerNode = document.createElement("div");
        timerNode.id = 'timer';

        this.partButton = document.createElement("button");
        this.partButton.id = 'button';
        this.partButton.innerHTML = 'Start';
        this.partButton.setAttribute('onClick', 'timer.buttonClicked()');

        this.range = document.createElement("input");
        this.range.id = 'duration';
        this.range.type = 'range';
        this.range.min = 0;
        this.range.max = this.TIMER_MAX;
        this.range.value = this.TIMER_DEFAULT;
        this.range.setAttribute('onInput', 'timer.rangeMoving(this.value)');

        this.numberCheckbox = document.createElement("input");
        this.numberCheckbox.id = 'togglenumbers';
        this.numberCheckbox.type = 'checkbox';
        this.numberCheckbox.checked = false;
        this.numberCheckbox.setAttribute('onInput', 'timer.toggleTimerText()');
        const numberLabel = document.createElement("label");
        numberLabel.innerHTML = 'Show numbers';
        numberLabel.id = 'numberslabel'

        this.rootNode.appendChild(timerNode);
        this.rootNode.appendChild(this.partButton);
        this.rootNode.appendChild(this.range);
        this.rootNode.appendChild(this.numberCheckbox);
        this.rootNode.appendChild(numberLabel);

        this.width = 450;
        this.height = 300;
        this.draw = SVG().size(this.width, this.height).addTo("#timer");
        this.draw.viewbox(0,0,this.width,this.height);
        this.background = this.draw.rect(this.width, this.height).fill('#dde3e1');
        this.timerTextSVG = undefined;
        this.createTimerSVG();
    }

    createTimerText() {
        this.timerTextSVG = this.draw.text(this.range.value).move(this.width/2,this.height/2).font({ fill: '#f06', family: 'Inconsolata' });
        this.timerTextSVG.node.id = 'svgtimertext';
    }

    deleteTimerText() {
        this.timerTextSVG.remove()
        this.timerTextSVG = undefined;
    }


    toggleTimerText() {
        if(this.timerTextSVG == undefined)
            this.createTimerText();
        else
            this.deleteTimerText();
    }

    createTimerSVG() {
        this.timerSVG = this.draw.line(0,this.height/2,this.calcTimerWidth(),this.height/2).stroke({ color: '#000000', width: this.height });
        this.timerSVG.node.id = 'svgtimer';
    }

    calcTimerWidth() {
        return this.width/this.TIMER_MAX*this.range.value;
    }

    rangeMoving(value) {
        this.range.value = value;
        this.timerSVG.node.setAttribute('x2', this.calcTimerWidth());
        if(this.timerTextSVG)
            this.timerTextSVG.text(value+'');
    }

    start() {
      this.partButton.innerHTML = 'Stop';
      this.running = setTimeout(()=> {
        this.rangeMoving(this.range.value - 1);
        if(this.range.value > 0)
            this.start();
      }, 1000);
    }

    stop() {
        window.clearTimeout(this.running);
        this.running = null;
        this.partButton.innerHTML = 'Start';
    }

    buttonClicked() {
        if(this.running)
            this.stop();
        else
            this.start();
    }
}

