<template>
  <div class="bg-white w-full flex items-center px-5">
    <span class="mr-3 rounded-full h-10 w-10 flex items-center justify-center bg-gray-400">
      <font-awesome-icon icon="user" class="text-white"/>
    </span>
    <div class="flex-grow p-3">
      <div class="font-semibold text-gray-700">
        {{ friend.user.name }}
      </div>
      <div class="text-sm text-gray-500">
        {{ lastMessage }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    friend: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
    }
  },
  computed: {
    lastMessage() {
      return this.friend.chat?.lastMessage?.body;
    }
  }
}
</script>
