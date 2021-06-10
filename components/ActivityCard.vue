<template>
  <div class="overflow-hidden shadow-2xl inline-block" v-bind:class="rounded ? 'rounded-xl' : ''">
    <div class="challenge-container">
      <img class="h-48 md:h-64 w-full object-cover" :src="`/img/${img}.jpg`" :alt="alt" />
      <div class="text-block">
        <div class="uppercase tracking-wide text-sm text-center text-white font-semibold">{{ title }}</div>
        <p class="text-white">{{ caption }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    caption: {
      type: String,
      required: false
    },
    rounded: {
      type: Boolean,
      default: true
    },
    alt: {
      type: String,
      default: "challenge image"
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.challenge-container {
  position: relative;
}
.text-block {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 10px 20px 10px 20px;
  max-height: 45%;
  width: 100%;
}
</style>
