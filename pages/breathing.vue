<template>
  <div class="breathing-container min-h-screen" :style="pageBackgroundImage">
    <TopNav v-if="selecting" pageTitle="Take a breath" :line="false" arrowColor="white"/>
    <TopNavBreathing v-else pageTitle="Take a breath" :line="false" arrowColor="white" @back="stop"/>
    <p v-if="!selecting" class="text-white timer">{{ timer }}</p>
    <button v-if="selecting" @click="select" class="text-white play">
      <font-awesome-icon icon="play"/>
    </button>
    <carousel v-if="selecting" :perPage="1" :mouseDrag="false" :minSwipeDistance="20" @page-change="choose">
      <slide>
        <p class="breathing-type">Extended exhale</p>
        <p class="breathing-info">Inhale deeply through your nose. <br> Exhale slowly through your mouth.</p>
        <button @click="setTime" class="text-white time">
          <font-awesome-icon icon="play"/>&emsp;{{ time }} min
        </button>
      </slide>
      <slide>
        <p class="breathing-type">Equal breathing</p>
        <p class="breathing-info">Inhale deeply through your nose. Hold. <br> Exhale slowly through your mouth.</p>
        <button @click="setTime" class="text-white time">
          <font-awesome-icon icon="play"/>&emsp;{{ time }} min
        </button>
      </slide>
      <slide>
        <p class="breathing-type">Deep belly breathing</p>
        <p class="breathing-info">Fill your belly with air then your chest. <br> Exhale slowly through your mouth.</p>
        <button @click="setTime" class="text-white time">
          <font-awesome-icon icon="play"/>&emsp;{{ time }} min
        </button>
      </slide>
      <slide>
        <p class="breathing-type">Box breathing</p>
        <p class="breathing-info">Inhale deeply through your nose. hold. <br> Exhale slowly through your mouth. hold.</p>
        <button @click="setTime" class="text-white time">
          <font-awesome-icon icon="play"/>&emsp;{{ time }} min
        </button>
      </slide>
      <slide>
        <p class="breathing-type">Energize</p>
        <p class="breathing-info">Inhale deeply through your nose. <br> Exhale rapidly through your nose.</p>
        <button @click="setTime" class="text-white time">
          <font-awesome-icon icon="play"/>&emsp;{{ time }} min
        </button>
      </slide>
      <slide>
        <p class="breathing-type">Relaxing breath</p>
        <p class="breathing-info">Inhale deeply through your nose. long hold. <br> Exhale slowly through your mouth.</p>
        <button @click="setTime" class="text-white time">
          <font-awesome-icon icon="play"/>&emsp;{{ time }} min
        </button>
      </slide>
    </carousel>
    <div v-else>
      <div class="animation-container">
        <equal-breathing v-if="exercise === 'equal'" :paused="paused" />
        <extended-breathing v-if="exercise === 'extended'" :paused="paused" />
        <belly-breathing v-if="exercise === 'deep'" :paused="paused" />
        <box-breathing v-if="exercise === 'box'" :paused="paused" />
        <energize-breathing v-if="exercise === 'energize'" :paused="paused" />
        <relax-breathing v-if="exercise === 'relax'" :paused="paused" />
      </div>
      <div class="w-20 pause-btn">
        <Button v-if="started" :title="paused ? 'Play' : 'Pause'" color="#000000" @click.native="pause"/>
        <Button v-else title="Start" color="#000000" @click.native="start"/>
      </div>
    </div>
  </div>
</template>

<script>
import EqualBreathing from "~/components/breathing/EqualBreathing";
import ExtendedBreathing from "~/components/breathing/ExtendedBreathing";
import BellyBreathing from "~/components/breathing/BellyBreathing";
import BoxBreathing from "~/components/breathing/BoxBreathing";
import EnergizeBreathing from "~/components/breathing/EnergizeBreathing";
import RelaxBreathing from "~/components/breathing/RelaxBreathing";
import TopNavBreathing from "~/components/breathing/TopNavBreathing";

export default {
  middleware: 'auth',
  components: {
    EqualBreathing,
    ExtendedBreathing,
    BellyBreathing,
    BoxBreathing,
    EnergizeBreathing,
    RelaxBreathing,
    TopNavBreathing
  },
  data() {
    return {
      paused: true,
      selecting: true,
      selectingTime: false,
      time: 2,
      exercise: 'extended',
      countDown : 120,
      started: false
    }
  },
  watch: {
    started(newVal) {
      if (newVal) {
        this.countDownTimer();
      }
    }
  },
  computed: {
    pageBackgroundImage() {
      const imgUrl = this.$img('/img/breathing.jpg', { width: 400 })
      return {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url('${imgUrl}')`
      }
    },
    timer () {
      return new Date(this.countDown * 1000).toISOString().substr(14, 5)
    }
  },
  methods: {
    setTime() {
      if(this.time === 1) {
        this.time = 2;
        this.countDown = 120;
      } else if (this.time === 2) {
        this.time = 3;
        this.countDown = 180;
      } else if (this.time === 3) {
        this.time = 5;
        this.countDown = 300;
      } else if (this.time === 5) {
        this.time = 1;
        this.countDown = 60;
      }
    },
    countDownTimer() {
      if(this.countDown > 0 && this.started && !this.paused) {
        setTimeout(() => {
          this.countDown -= 1
          this.countDownTimer()
        }, 1000)
      }
    },
    start() {
      this.started = true;
      this.paused = false;
    },
    choose(val) {
      if(val === 0) {
        this.exercise = 'extended';
      } else if (val === 1) {
        this.exercise = 'equal';
      } else if (val === 2) {
        this.exercise = 'deep';
      } else if (val === 3) {
        this.exercise = 'box';
      } else if (val === 4) {
        this.exercise = 'energize';
      } else if (val === 5) {
        this.exercise = 'relax';
      }
    },
    select() {
      this.selecting = false;
    },
    stop() {
      this.selecting = true;
      this.paused = true;
      this.started = false;
      this.countDown = 120;
      this.time = 2;
    },
    pause() {
      this.paused = !this.paused;
      this.countDownTimer();
    }
  }
}
</script>
<style scoped>
.h-slide {
  padding: 20px;
  height: auto !important;
}

.breathing-container {
  background-repeat: no-repeat;
  background-size: 110% 140%;
}

.breathing-type {
  margin-top: 3vh;
  font-size: 9vw;
}

.breathing-info {
  font-size: 4vw;
  font-style: italic;
  margin-top: 3vh;
}

.play {
  margin: 7vh auto;
  display: flex;
  font-size: 50px;
  padding: 40px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  animation: breath 8s  linear infinite;
}

@keyframes breath{
  0%{ transform: scale(.9); }
  25%{ transform: scale(1); }
  55%{ transform: scale(.9); }
  80%{ transform: scale(1); }
  100%{ transform: scale(.9); }
}

.time {
  position: absolute;
  margin: 0 auto;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 5vw;
  padding: 8px 20px 8px 20px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2), 0 0 20px 0 rgba(0, 0, 0, 0.15);
}

.play svg {
  color: rgba(255, 255, 255, 0.8);
  left: 5px;
  position: relative;
}

.timer {
  font-size: 10vw;
  text-align: center;
  margin-top: 10vh;
}

.animation-container {
  padding-top: 10%;
}

.pause-btn {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 10%;
}

.VueCarousel-slide {
  position: relative;
  background: rgba(255, 255, 255, 0);
  color: #fff;
  font-size: 24px;
  text-align: center;
  min-height: 100%;
}

.label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

>>> .VueCarousel-inner {
  height: 40vh !important;
}

>>> .VueCarousel-dot {
  background-color: rgba(255, 255, 255, 0.2) !important;
}

>>> .VueCarousel-dot--active {
  background-color: white !important;
  width: 12px !important;
  height: 12px !important;
}
</style>
