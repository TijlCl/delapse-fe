<template>
  <div class="min-h-screen">
    <div v-masonry transition-duration="1s" column-width="3"  item-selector=".item" gutter="1" fit-width="true" class="m-0 w-full image-grid">
      <div v-masonry-tile class="item" :key="index" v-for="(challenge, index) in completedChallenges" :class="randomImageClass(index)" @click="challengeDetail(challenge.id)">
        <img :src="challenge.image || require(`~/assets/img/${challenge.challenge.image}.jpg`)" class="rounded-2xl">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      woOptions: []
    }
  },

  methods: {
    randomImageClass (imageNumber) {
      let width = '';
      if (this.completedChallenges.length < 3) {
        width = ' grid-item-4';
      } else if (this.completedChallenges.length < 6) {
        width = ' grid-item-3';
      } else if (imageNumber === this.completedChallenges.length - 1) {
        width = ' grid-item-1';
      } else {
        const index = Math.floor(Math.random() * this.wOptions.length)
        width = ' grid-item-' + this.wOptions[index];
        this.wOptions.splice(index, 1);
      }
      return 'style' + Math.floor(Math.random() * 10 + 1) + width;
    },

    challengeDetail (id) {
      this.$router.push({
        name: 'challenges-completed-id',
        params: {id: id}
      })
    }
  },
  computed: {
    wOptions() {
      return this.completedChallenges.map(function (challenge, index) {
        if (index % 5 === 0) {
          return 2;
        } else {
          return 1;
        }
      })
    },
    completedChallenges() {
      return this.$store.getters['completedChallenges/completedChallenges'];
    },
  }
}
</script>

<style scoped>

.image-grid {
  width: 100% !important;
}

.image-grid:after {
  content: '';
  display: block;
  clear: both;
}

.grid-item {
  float: left;
}

.grid-item-1 {
  width: 33%;
}

.grid-item-2 {
  width: 66%;
}

.grid-item-3 {
  width: 50%;
}

.grid-item-4 {
  width: 99%;
}

.item {
  padding: 5px;
}

</style>
