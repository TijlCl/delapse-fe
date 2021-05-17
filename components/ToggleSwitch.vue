<template>
  <ValidationProvider ref="input" :rules="rules" v-slot="{ errors }">

    <div class="flex justify-between items-center" @click="val = !val">
    <!-- Title -->
      <h2 class="p-3 text-white"> {{title}} </h2>

      <div class="p-3">

      <!-- Switch Container -->
      <div class="w-12 h-6 flex items-center bg-gray-300 rounded-full p-1" :class="{ 'bg-green-400': val}">

        <!-- Switch -->
        <div class="bg-white w-4 h-4 rounded-full shadow-md transform  duration-300 ease-in-out" :class="{ 'translate-x-6': val}"></div>

      </div>
      <!-- Switch Container End -->

      </div>

    </div>
    <span v-if="errors.length > 0" class="input-errors pl-2">{{ errors[0] }}</span>
    <span v-for="(apiError, i) in apiErrors" :key="i" class="input-errors pl-2">{{ apiError }}</span>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from "vee-validate";
export default {
  props: {
    rules: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: true
    },
    value: {
      type: Boolean,
      required: true
    },
    apiErrors: {
      type: Array,
      required: false
    },
  },
  components: {
    ValidationProvider
  },
  data() {
    return {
    }
  },
  computed: {
    val: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value);
      }
    }
  }
}
</script>

<style scoped>

</style>
