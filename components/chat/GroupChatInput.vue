<template>
  <div class="flex flex-wrap justify-center">
    <input v-model="val" type="text" placeholder="Say Something..." class="w-3/4 focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-full py-3" v-on:keyup.enter="send">
    <span class="flex mx-3 items-center text-3xl text-blue-300" @click="send">
      <font-awesome-icon icon="arrow-right"/>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: false
    }
  },
  data() {
    return {
      val: null
    }
  },
  methods: {
    send() {
      this.$store.dispatch('chatGroup/sendMessage', {
        message: this.val,
        chatId: this.id
      });
      this.val = null;
    }
  }
}
</script>
