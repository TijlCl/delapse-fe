<template>
  <div class="min-h-screen">
    <div v-masonry transition-duration="1s" column-width="3"  item-selector=".item" gutter="1" fit-width="true" class="m-0 w-full image-grid">
      <div v-masonry-tile class="item" :key="index" v-for="(image, index) in images" :class="randomImageClass(index)">
        <img :src="require(`~/assets/img/${image.name}`)" class="rounded-2xl">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      images: [
        { name: 'forest.jpg' },
        { name: 'cake.jpg' },
        { name: 'meditation.jpg' },
        { name: 'forest.jpg' },
        { name: 'forest.jpg' },
        { name: 'cake.jpg' },
        { name: 'meditation.jpg' },
        { name: 'forest.jpg' },
        { name: 'cake.jpg' },
        { name: 'meditation.jpg' },
        { name: 'register-bg.jpg' },
        { name: 'register-bg.jpg' },
      ],
      woOptions: []
    }
  },

  mounted () {
    // if (typeof this.$redrawVueMasonry === 'function') {
    //   this.$redrawVueMasonry()
    // }
  },
  methods: {
    randomImageClass (t) {
      let width = '';
      if (t === this.images.length - 1) {
        width = ' grid-item-1';
      } else {
        const index = Math.floor(Math.random() * this.wOptions.length)
        width = ' grid-item-' + this.wOptions[index];
        this.wOptions.splice(index, 1);
      }
      return 'style' + Math.floor(Math.random() * 10 + 1) + width;
    }
  },
  computed: {
    wOptions() {
      return this.images.map(function (image, index) {
         if (index % 5 === 0) {
          return 2;
        } else {
          return 1;
        }
      })
    }
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
  width: 99%;
  max-height: 50vh;
}

.item {
  padding: 5px;
}

</style>
