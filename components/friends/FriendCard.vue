<template>
  <div class="bg-white w-full flex items-center px-5">
    <span class="mr-3 rounded-full h-10 w-10 flex items-center justify-center bg-gray-400">
      <font-awesome-icon icon="user" class="text-white"/>
    </span>
    <div class="flex-grow p-3" v-bind:class="hasUnreadMessage ? 'unread' : 'read'">
      <div>
        {{ friend.user.name }}
      </div>
      <div class="text-xs">
        {{ lastMessage }}
      </div>
    </div>
  </div>
</template>

<script>
import { isNil } from 'lodash'

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
    },
    hasUnreadMessage() {
      return isNil(this.friend.chat?.lastMessage) ? false : this.friend.chat?.lastMessage?.isUnread;
    }
  }
}
</script>

<style scoped>
.read {
  font-weight: bold;
  color: gray;
}

.unread {
  font-weight: bolder;
  color: black;
}
</style>
