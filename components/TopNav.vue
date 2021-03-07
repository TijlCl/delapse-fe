<template>
  <div class="w-full h-16 flex flex-wrap content-center grid grid-cols-3 place-content-center bottom-border">
    <font-awesome-icon @click="$router.back()" class="self-center ml-5 text-2xl back-arrow" icon="arrow-left"/>
    <h2 class="page-title text-white justify-self-center">{{ pageTitle }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    pageTitle: {
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

.page-title{
  font-size: 16pt;
}

.back-arrow{
  color: #089082;
}

.bottom-border{
  border-bottom: 1px solid #707070;
}

</style>
