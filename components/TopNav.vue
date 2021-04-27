<template>
  <div class="w-full h-16 flex flex-wrap content-center grid grid-cols-3 place-content-center" v-bind:class="line ? 'bottom-border' : ''">
    <font-awesome-icon @click="$router.back()" class="self-center ml-5 text-2xl back-arrow" icon="arrow-left"/>
    <h2 class="page-title justify-self-center" v-bind:class="dark ? '' : 'text-white'">{{ pageTitle }}</h2>
    <div class="justify-self-end self-center mr-5">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pageTitle: {
      type: String,
      required: false
    },
    dark: {
      type: Boolean,
      default: false
    },
    line: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
    }
  },
  methods: {
    action() {
      this.$emit('action');
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
