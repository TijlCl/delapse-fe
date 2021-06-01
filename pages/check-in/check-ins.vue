<template>
  <div class="min-h-screen check-in" :style="homeBackground">
    <TopNav pageTitle="Your check ins" arrowColor="white" />

    <div class="date-wrapper">
      <DatePickerInputField v-model="from" class="from" placeholder="From" icon="calendar-alt" />
      <DatePickerInputField v-model="to" class="to" placeholder="To" icon="calendar-alt" right/>
    </div>

    <div class="content-wrapper">
      <div class="total">
        <h2>Total check ins</h2>
        <h1>{{ total }}</h1>
      </div>
      <check-in-average-mood class="mt-5" />
      <div>
        <check-in-card v-for="(checkIn, key) in checkIns" :key="key" :check-in="checkIn" />
      </div>
    </div>
  </div>
</template>

<script>
import CheckInCard from "~/components/checkIn/CheckInCard";
import CheckInAverageMood from "~/components/checkIn/CheckInAverageMood";

export default {
  components: {
    CheckInCard,
    CheckInAverageMood
  },
  data() {
    return {
      date: new Date(),
    }
  },
  computed: {
    from: {
      get() {
        return new Date(this.date.getFullYear(), this.date.getMonth(), 1)
      },
      set(val) {
        this.getData(val, this.to);
      }
    },
    to: {
      get() {
        return new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0)
      },
      set(val) {
        this.getData(this.to, val);
      }
    },
    homeBackground() {
      const imgUrl = this.$img('/img/check-in-2.jpg', { width: 400 })
      return {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${imgUrl}')`
      }
    },
    checkIns() {
      return this.$store.getters['checkIns/checkIns'];
    },
    total() {
      return this.$store.getters['checkIns/totalCheckIns'];
    }
  },
  async fetch ({ store }) {
    const date = new Date();
    const from = new Date(date.getFullYear(), date.getMonth(), 1);
    const to = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    await store.dispatch('checkIns/fetchAll', {from, to});
    await store.dispatch('checkIns/averageMoods');
  },
  watch: {
  },
  methods: {
    async getData(from, to) {
      await this.$store.dispatch('checkIns/fetchAll', {from, to});
      await this.$store.dispatch('checkIns/averageMoods', {from, to});
    }
  }
}
</script>

<style scoped>

.content-wrapper {
  overflow: scroll;
  height: 91vh;
  background-repeat: no-repeat;
  background-size: 110% 100%
}

.check-in{
  background-repeat: no-repeat;
  background-size: 110% 100%
}

.total{
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 1.5rem auto;
  background: rgba(13,98,12, .7);
  background: linear-gradient(90deg, rgba(13,98,12,.7) 0%, rgba(15,145,36,.7) 45%, rgba(0,212,255,.7) 100%);
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  color: white;
}

.total h1 {
  font-size: 18pt;
  font-weight: bolder;
}

.date-wrapper{
  display: flex;
  width: 90%;
  margin: 0 auto;
}

.from {
  width: 49%;
}

.to {
  margin-left: 2%;
  width: 49%;
}
</style>
