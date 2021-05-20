<template>
  <div class="bg-white w-full flex items-center px-5">
    <span class="mr-3 rounded-full h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 flex items-center justify-center bg-gray-400">
      <font-awesome-icon icon="user" class="text-white"/>
    </span>
    <div class="flex-grow p-3 read md:text-xl lg:text-2xl">
      <div>
        {{ names }}
      </div>
<!--      <div class="text-xs" v-if="showLastMessage">-->
<!--        {{ lastMessage }}-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>

export default {
  props: {
    id: {
      type: Number,
      required: true
    },
  },
  data() {
    return {
    }
  },
  computed: {
    chat() {
      return this.$store.getters['chatGroups/findById'](this.id);
    },
    names() {
      return this.chat?.users.map((user) => user.name).join(', ');
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
