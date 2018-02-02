import React, { Component } from 'react';

class SaleCountdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const date = this.calculate(this.props.date);

      if(date) {
        this.setState(date);
      } else {
        this.stop();
      }
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  calculate(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    if(diff <= 0) return false;

    const timeLeft = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    };

    if(diff >= 86400) {
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if(diff >= 3600) {
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if(diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
  }

  addLeadingZeros(value) {
    value = String(value);
    while(value.length < 2) {
      value = '0' + value;
    }
    return value;
  }

  render() {
    const countDown = this.state;

    return (
      <span>
				<span>
					<strong>{this.addLeadingZeros(countDown.days)}</strong>
					<span> {countDown.days === 1 ? 'Day' : 'Days'} </span>
				</span>

        <span>
					<strong>{this.addLeadingZeros(countDown.hours)}</strong>
					<span> Hours </span>
				</span>

        <span>
					<strong>{this.addLeadingZeros(countDown.min)}</strong>
					<span> Min </span>
				</span>

        <span>
					<strong>{this.addLeadingZeros(countDown.sec)}</strong>
					<span> Sec</span>
				</span>
      </span>
    );
  }
}

export default SaleCountdown;