<template>
  <ValidationProvider ref="input" :rules="rules" v-slot="{ errors }">
    <div class="w-full items-center rounded-xl border-white border-2 bg-opacity-0" v-bind:class="errors.length > 0 ? 'border-red-600' : ''">
      <label>
        <textarea
          v-model="val"
          rows="2"
          class="w-full self-center text-xl outline-none bg-transparent placeholder-opacity-75 border-b-4 resize-none"
          v-bind:class="icon ? '' : 'px-3'"
          :placeholder="placeholder"
        ></textarea>
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
  color: #ff0000;
}
</style>
