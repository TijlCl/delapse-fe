<template>
  <NuxtLink to="/events/create" class="rounded-xl overflow-hidden h-20 inline-block shadow-lg mr-3 w-20">
    <div class="md:flex relative h-full">
      <img class="object-cover h-full" :src="require(`~/assets/img/${img}.jpg`)" alt="event background image">
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
</style>
