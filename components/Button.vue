<template>
  <button class="button text-white" :style="{ 'background-color': color}">{{ title }}</button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>

.button{
  width: 100%;
  padding: 5px 20px 5px 20px;
  border-radius: 25px;
  text-align: center;
  opacity: 80%;
}

</style>
