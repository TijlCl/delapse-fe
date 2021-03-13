<template>
  <div>
    <div v-for="message in messages">
      <ChatMessageUser v-if="message.isSender" :text="message.body" />
      <ChatMessageContact v-else :text="message.body" />
    </div>
    <div class="w-full absolute bottom-0 mb-4">
      <ChatInput />
    </div>
  </div>
</template>

<script>
import chatModule from '../store/modules/chat'

export default {
  name: "chat",
  data() {
    return {
      store: 'chat'
    }
  },
  computed: {
    messages() {
      return this.$store.getters['chat/messages'];
    }
  },
  mounted() {
    this.registerModule();
    this.fetchChat();
    Echo.private(`message.${this.$auth.user.id}`).listen(".new-message", e => {
      this.$store.commit('chat/addMessage', {body: e.message.body, isSender: false});
    });
  },
  methods: {
    async registerModule() {
      await this.$store.registerModule('chat', chatModule);
    },
    async fetchChat() {
      const user = this.$route.params.friendId;
      await this.$store.dispatch('chat/fetch', user);
    }
  }
}
</script>

<style scoped>

</style>
