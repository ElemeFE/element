<template>
  <div class="tm-circular-countdown"
       v-show="deltaDate !== 0">
    <svg xmlns="http://www.w3.org/2000/svg"
         version="1.1"
         width="40"
         height="40"
         viewBox="0 0 40 40"
         class="circliful"
         role="img">
      <circle cx="20"
              cy="20"
              r="18"
              fill="none"
              :stroke="circleColors[status].targetColor"
              stroke-width="2"
              stroke-dasharray="113.09"
              :stroke-dashoffset="113.09 + circleSize"
              transform="rotate(-90,20,20)"/>
      <circle cx="20"
              cy="20"
              r="18"
              fill="none"
              :stroke="circleColors[status].backgroundColor"
              stroke-width="2"
              stroke-dasharray="113.09"
              :stroke-dashoffset="circleSize"
              transform="rotate(-90,20,20)"/>
    </svg>
    <div class="tm-circular-countdown__time-info"
         :style="{color: circleColors[status].targetColor}">
      <div class="tm-circular-countdown__time">{{ timeLeft[0] }}</div>
      <div class="tm-circular-countdown__time-type">{{ timeLeft[1] }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TmCircularCountdown',
  data() {
    return {
      circleColors: [
        {
          backgroundColor: 'rgba(93, 195, 118, 0.3)',
          targetColor: '#5dc376'
        },
        {
          backgroundColor: 'rgba(235, 178, 66, 0.3)',
          targetColor: '#ebb242'
        },
        {
          backgroundColor: 'rgba(236, 86, 87, 0.3)',
          targetColor: '#ec5657'
        }
      ],
      deltaDate: null,
      circleSize: 0,
      status: 2,
      timeLeft: ['', ''],
      timer: null
    };
  },
  props: {
    startDate: Date,
    endDate: Date
  },
  watch: {
    startDate() {
      this.update();
    },
    endDate() {
      this.update();
    }
  },
  created() {
    this.update();
    this.timer = setInterval(this.update, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    update() {
      this.deltaDate = this.endDate - this.startDate;
      let currentDelta = this.endDate - new Date();
      let currentDateArray = this.msToDateArray(currentDelta);
      let percents = 100 - (100 / this.deltaDate * currentDelta);
      this.circleSize = this.percentToSize(currentDelta > 0 ? percents : 100);

      if (currentDateArray.d > 0) {
        this.status = 0;
        this.timeLeft = [currentDateArray.d, 'дн'];
      } else if (currentDateArray.h > 3 && currentDateArray.h <= 23) {
        this.status = 0;
        this.timeLeft = [currentDateArray.h, 'ч'];
      } else if (currentDateArray.h >= 1 && currentDateArray.h <= 3) {
        this.status = 1;
        this.timeLeft = [currentDateArray.h, 'ч'];
      } else if (currentDateArray.h < 1 && currentDateArray.m > 0) {
        this.status = 2;
        this.timeLeft = [currentDateArray.m, 'мин'];
      } else {
        this.status = 2;
        this.timeLeft = [currentDateArray.s, 'сек'];
      }
    },
    percentToSize(percent) {
      const c = Math.PI * (18 * 2);
      let pct = ((100 - percent) / 100) * c;
      return pct;
    },
    msToDateArray(ms) {
      let days = Math.floor(ms / (24 * 60 * 60 * 1000));
      days = days < 0 ? 0 : days;
      let daysms = ms % (24 * 60 * 60 * 1000);
      let hours = Math.floor((daysms) / (60 * 60 * 1000));
      hours = hours < 0 ? 0 : hours;
      let hoursms = ms % (60 * 60 * 1000);
      let minutes = Math.floor((hoursms) / (60 * 1000));
      minutes = minutes < 0 ? 0 : minutes;
      let minutesms = ms % (60 * 1000);
      let sec = Math.floor((minutesms) / (1000));
      sec = sec < 0 ? 0 : sec;
      return {
        d: days,
        h: hours,
        m: minutes,
        s: sec
      };
    }
  }
};
</script>
