class Clock {
  constructor() {
    this.secHand = document.querySelector('.second-hand');
    this.minHand = document.querySelector('.min-hand');
    this.hourHand = document.querySelector('.hour-hand');
    this.hands = [this.secHand, this.minHand, this.hourHand];
    this.rotateHands = this.rotateHands.bind(this);
  }
  
  getTime() {
    const time = new Date();
    return [time.getSeconds(), time.getMinutes(), time.getHours()];
  }
  
  rotateHands() {
    const [secs, mins, hours] = this.getTime();
    
    if(secs === 59) {
      this.hands.forEach(hand => {
        hand.style.transition = "all 0s";
      });

      setTimeout(() => this.hands.forEach(hand => {
        hand.style.transition = "all 0.05s";
      }), 2001);

    }
    this.secHand.style.transform = `rotate(${secs * 6 + 90}deg)`;
    this.minHand.style.transform = `rotate(${mins * 6 + 90}deg)`;
    this.hourHand.style.transform = `rotate(${hours * 30 + 90}deg)`;
  }

  run() {
    setInterval(this.rotateHands, 1000);
  }

};

const clock = new Clock();
clock.run();
