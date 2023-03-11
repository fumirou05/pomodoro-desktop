import dayjs from "dayjs";

class MyTimer {
  isActive;
  baseTime;
  activeTimeLength;
  restTimeLength;
  value = 0;

  constructor(dom, renderer) {
    this.dom = dom;
    this.render = renderer;
    this.reset();
  }

  reset() {
    this.baseTime = new dayjs();
  }

  start() {
    this.isActive = true;
    setTimeout(() => this.renew(), 1000);
  }

  stop() {
    this.isActive = false;
  }

  renew() {
    const now = new dayjs();
    if (this.isActive) {
      this.value =
        now.diff(this.baseTime, "hour").toString() +
        ":" +
        (now.diff(this.baseTime, "minutes") % 60).toString() +
        ":" +
        (now.diff(this.baseTime, "second") % 60).toString();
      this.render(this.dom, this.value);
      setTimeout(() => this.renew(), 1000);
    }
  }
}

function renderer(dom, value) {
  dom.innerHTML = value;
}

const dom = document.getElementById("timer");

const myTimer = new MyTimer(dom, renderer);

myTimer.start();
