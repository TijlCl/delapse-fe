<template>
  <div class="rounded-xl overflow-hidden h-20 inline-block shadow-lg mr-3 event-card">
    <div class="md:flex relative h-full">
      <nuxt-img class="object-cover h-auto" :src="`/img/${img}.jpg`" width="400" alt="event background image" />
      <div class="text-block">
        <p class="text-xs text-white text-center">{{ title }}</p>
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
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>

.event-card{
  width: 180px;
}

.text-block {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 3px 15px 20px 20px;
  max-height: 15%;
  width: 100%;
}

.text-2s{
  font-size: 0.60rem;
  line-height: 1rem;
}
</style>
