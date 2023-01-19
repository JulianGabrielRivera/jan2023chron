class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    // this.currentTime += 1;
    // setInterval(printTimeCallback, 1000);
    this.intervalId = setInterval(() => {
      this.currentTime = this.currentTime + 1;
      if (typeof printTimeCallback === "function") {
        console.log(this);
        console.log(printTimeCallback);
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
    // ... your code goes here
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    console.log(value);
    if (value === 0) {
      return `${value}${value}`;
    } else if (value <= 9) {
      return `0${value}`;
    }
    return value.toString();
  }

  stop() {
    clearInterval(this.intervalId);
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
    return (this.currentTime = 0);
  }

  split() {
    // ... your code goes here
    return `${
      this.computeTwoDigitNumber(this.getMinutes()) +
      ":" +
      this.computeTwoDigitNumber(this.getSeconds())
    }`;
  }
}
