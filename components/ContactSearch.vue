<template>
  <div class="w-full flex">
    <font-awesome-icon @click="$emit('done')" class="self-center mx-5 text-2xl back-arrow" icon="arrow-left"/>
    <input
      v-model="val"
      ref="input"
      type="text"
      placeholder="Search..."
      class="px-0 pr-5 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white bg-white outline-none text-2xl w-full"/>
  </div>
</template>

<script>
import { debounce, isNil } from 'lodash';

export default {
  props: {
    focusInput: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      val: null
    }
  },
  watch: {
    focusInput(newVal){
      if(newVal) {
        this.$refs.input.focus();
      }
    },
    val: debounce(function (newVal) {
      if(!isNil(newVal) && newVal !== '') {
        this.$store.commit('users/setUsers', []);
        this.$store.dispatch('users/fetchAll' , {username: newVal});
      }
    }, 500)
  },
  methods: {
    action() {
      this.$emit('action');
    },
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
