<template>
  <div class="rounded-xl overflow-hidden h-20 inline-block shadow-lg mr-3 event-card">
    <div class="md:flex relative h-full">
      <img class="object-cover h-auto" :src="require(`~/assets/img/${img}.jpg`)" alt="event background image">
      <div class="text-block">
        <p class=" text-xs text-white">{{ title }}</p>
        <div class="flex">
          <label class=" text-2s text-white mr-auto">{{ date }}</label>
          <label class=" text-2s text-white ml-auto">{{ tag }}</label>
        </div>

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
    date: {
      type: String,
      required: true
    },
    tag: {
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
  width: 140px;
}

.text-block {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 3px 15px 38px 20px;
  max-height: 45%;
  width: 100%;
}

.text-2s{
  font-size: 0.60rem;
  line-height: 1rem;
}
</style>
