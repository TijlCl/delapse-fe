<template>
  <ValidationProvider ref="input" :rules="rules" v-slot="{ errors }">
    <div class="flex w-full items-center rounded-xl border-white border-2 bg-opacity-0"
         v-bind:class="errors.length > 0 ? 'border-red-600' : ''">
      <div v-if="icon" class="flex justify-center w-15 p-3">
        <span class="flex items-center text-xl text-white">
          <font-awesome-icon :icon="icon"/>
        </span>
      </div>
        <date-picker
          placeholder="dd/MM/yyyy"
          format="dd/MM/yyyy"
          v-model="val"
          calendar-class="datepicker-calender"
          class="w-9/12 self-center text-xl outline-none bg-transparent placeholder-white placeholder-opacity-75 datetime-picker-div"
          v-bind:class="{'px-3': !icon, 'datetime-picker-div-right': right, 'datetime-picker-div-left': !right}"
          :placeholder="placeholder" />
    </div>
    <span v-if="errors.length > 0" class="input-errors pl-2">{{ errors[0] }}</span>
    <span v-for="(apiError, i) in apiErrors" :key="i" class="input-errors pl-2">{{ apiError }}</span>
  </ValidationProvider>
</template>

<script>
import {ValidationProvider} from "vee-validate";

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
    right: {
      type: Boolean,
      default: false
    }
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

.datetime-picker-div >>> input {
  border: none;
  background: transparent;
  color: white;
  width: 90%;
}

.datetime-picker-div >>> .datepicker-calender {
  width: 260px;
}

.datetime-picker-div-right >>> .vdp-datepicker__calendar {
  position: fixed;
  margin-top: 10px;
  right: 5%;
}

.datetime-picker-div-left >>> .vdp-datepicker__calendar {
  position: fixed;
  margin-top: 10px;
  left: 5%;
}


</style>
