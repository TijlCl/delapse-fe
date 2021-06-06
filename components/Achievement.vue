<template>
  <div class="rounded-xl overflow-hidden h-20 inline-block shadow-lg mr-3 event-card">
    <div class="md:flex relative h-full">
      <nuxt-img class="object-cover h-auto" :src="`/img/${img}.jpg`" width="400" alt="event background image" />
      <div class="text-block">
        <h1 class="text-xs md:text-base text-white text-center lg:text-xl">{{ title }}</h1>
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
  width: 9em;
}

.text-block {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 3px 15px 3px 15px;
  max-height: 50%;
  white-space: normal;
  width: 100%;
}

@media only screen and (min-width: 768px) {
  .event-card {
    width: 12em;
    height: 7rem;
  }

  .text-block {
    padding: 3px 30px 30px 30px;
  }
}

@media only screen and (min-width: 768px) {
  .event-card {
    width: 12em;
    height: 7rem;
  }

  .text-block {
    padding: 3px 30px 30px 30px;
  }
}

@media only screen and (min-width: 1024px) {

  .event-card {
    width: 15em;
    height: 8rem;
  }

  .text-block {
    padding: 3px 35px 35px 35px;
  }
}
</style>
