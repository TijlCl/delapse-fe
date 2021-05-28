<template>
  <ValidationProvider ref="input" :rules="rules" v-slot="{ errors }">
    <div class="flex w-full items-center rounded-xl border-white border-2 bg-opacity-0" v-bind:class="errors.length > 0 ? 'border-red-600' : ''">
      <div v-if="icon" class="flex justify-center p-3">
        <span class="flex items-center text-base sm:text-xl md:text-2xl text-white lg:text-3xl">
          <font-awesome-icon :icon="icon"/>
        </span>
      </div>
      <label>
          <input
            v-model="val"
            :type="inputType"
            class="w-10/12 self-center text-xl outline-none text-white bg-transparent placeholder-white placeholder-opacity-75 lg:text-2xl"
            v-bind:class="icon ? '' : 'px-3'"
            :placeholder="placeholder"
          />
      </label>
    </div>
    <span v-if="errors.length > 0" class="input-errors pl-2">{{ errors[0] }}</span>
    <span v-for="(apiError, i) in apiErrors" :key="i" class="input-errors pl-2">{{ apiError }}</span>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from "vee-validate";
export default {
  props: {
    icon: {
      type: String,
      required: false
    },
    placeholder: {
      type: String,
      required: false
    },
    rules: {
      type: String,
      required: false
    },
    inputType: {
      type: String,
      default: 'text'
    },
    value: {
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
.input-errors{
  font-weight: bold;
  color: red;
}
</style>
