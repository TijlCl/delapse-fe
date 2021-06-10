<template>
  <NuxtLink to="/events/create" class="rounded-xl overflow-hidden h-20 inline-block shadow-lg mr-3 w-20 add-event-card">
    <div class="md:flex relative h-full">
      <img class="object-cover h-auto h-full" :src="`/img/${img}.jpg`" alt="event background image" />
      <div class="background-overflow flex justify-center">
        <font-awesome-icon class="text-white self-center" icon="plus"/>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true
    },
  },
  data() {
    return {}
  }
}
</script>

<style scoped>


.background-overflow {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  height: 100%;
  width: 100%;
}

@media only screen and (min-width: 768px) {
  .add-event-card {
    height: 7rem;
    width: 7rem;
  }
}

@media only screen and (min-width: 1024px) {

  .add-event-card {
    width: 8em;
    height: 8rem;
  }
}
</style>
