class Clock {
  constructor() {
    this.hands = document.querySelectorAll('.hand');
    this.rotateHands = this.rotateHands.bind(this);
  }
  
  getTime() {
    const time = new Date();
    return [time.getSeconds(), time.getMinutes()];
  }
  
  rotateHands() {
    const [secs, mins] = this.getTime();
    this.hands.forEach( hand => {
      const classes = Array.from(hand.classList);
      if (classes.includes('second-hand')) {
        console.log('sec')
        hand.style.transform = `rotate(${secs * 6}deg)`;
      } else if (classes.includes('min-hand')) {
        console.log('min')
        hand.style.transform = `rotate(${mins * 6}deg)`;
      }
    });
  }

  run() {
    setInterval(this.rotateHands, 1000);
  }

};

const clock = new Clock();
clock.run();
