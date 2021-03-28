<template>
  <ValidationProvider ref="input" :rules="rules" v-slot="{ errors }">
    <div class="w-full">
      <div class="relative inline-flex">
            <span class="absolute top-0 bottom-0 right-0 m-2 mr-3 text-xl">
              <font-awesome-icon icon="chevron-down"/>
            </span>
        <select v-model="val"
                class="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
          <option v-for="(option, i) in options" :key="i">{{ option }}</option>
        </select>
      </div>
    </div>
    <span v-if="errors.length > 0" class="input-errors pl-2">{{ errors[0] }}</span>
    <span v-for="(apiError, i) in apiErrors" :key="i" class="input-errors pl-2">{{ apiError }}</span>
  </ValidationProvider>
</template>

<script>
import {ValidationProvider} from "vee-validate";

export default {
  props: {
    rules: {
      type: String,
      required: false
    },
    value: {
      required: true
    },
    options: {
      type: Array,
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
    return {}
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
.input-errors {
  font-weight: bold;
  color: red;
}
</style>
