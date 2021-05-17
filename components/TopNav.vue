<template>
  <div class="w-full h-16 flex flex-wrap content-center grid grid-cols-3 place-content-center container" v-bind:class="line ? 'bottom-border' : ''">
    <font-awesome-icon @click="$router.back()" class="self-center ml-5 text-xl" icon="arrow-left" v-bind:style="{ color: arrowColor }"/>
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
    },
    arrowColor: {
      type: String,
      default: '#089082'
    },
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

.container {
  grid-template-columns: 15% 70% 15% !important;
}

.page-title{
  font-size: 16pt;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
}

.bottom-border{
  border-bottom: 1px solid rgba(112, 112, 112, .3);
}

</style>
