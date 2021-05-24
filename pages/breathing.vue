<template>
  <div class="breathing-container min-h-screen" :style="pageBackgroundImage">
    <TopNav pageTitle="Take a breath" :line="false" arrowColor="white"/>
    <button v-if="selecting" @click="start" class="text-white play">
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
        <Button :title="paused ? 'Play' : 'Pause'" color="#000000" @click.native="paused = !paused"/>
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

export default {
  middleware: 'auth',
  components: {
    EqualBreathing,
    ExtendedBreathing,
    BellyBreathing,
    BoxBreathing,
    EnergizeBreathing,
    RelaxBreathing
  },
  data() {
    return {
      paused: true,
      selecting: true,
      selectingTime: false,
      time: 2,
      exercise: 'extended'
    }
  },
  computed: {
    pageBackgroundImage() {
      const imgUrl = this.$img('/img/breathing.jpg', { width: 400 })
      return {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url('${imgUrl}')`
      }
    }
  },
  methods: {
    setTime() {
      if(this.time === 1) {
        this.time = 2;
      } else if (this.time === 2) {
        this.time = 3;
      } else if (this.time === 3) {
        this.time = 5;
      } else if (this.time === 5) {
        this.time = 1;
      }
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
    start() {
      this.selecting = false;
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

.animation-container {
  padding-top: 45%;
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
