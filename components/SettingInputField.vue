<template>
  <ValidationProvider ref="input" :rules="rules" v-slot="{ errors }">
    <p class="text-gray-400"> {{title}} </p>
    <div class="flex w-full items-center bg-opacity-0" v-bind:class="errors.length > 0 ? 'border-red-600' : ''">
      <label>
        <p v-if="disabled" class="w-9/12 self-center text-xl outline-none bg-transparent placeholder-white placeholder-opacity-75 text-gray-600"> {{value}} </p>
        <input
          v-else
          v-model="val"
          :type="inputType"
          class="w-9/12 self-center text-xl outline-none bg-transparent placeholder-white placeholder-opacity-75 text-white"
          :placeholder="placeholder"
        />
      </label>
    </div>
    <hr>
    <span v-if="errors.length > 0" class="input-errors pl-2">{{ errors[0] }}</span>
    <span v-for="(apiError, i) in apiErrors" :key="i" class="input-errors pl-2">{{ apiError }}</span>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from "vee-validate";
export default {
  props: {
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
    disabled: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
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

.disabled-background {
  background-color: rgba(0, 0, 0, 0.4);;
}
</style>
