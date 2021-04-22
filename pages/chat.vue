<template>
  <div>
    <TopNav :pageTitle="title" dark />
    <ul class="chat-messages" id="scroll">
      <li v-for="message in messages">
        <ChatMessageUser v-if="message.isSender" :text="message.body" />
        <ChatMessageContact v-else :text="message.body" />
      </li>
    </ul>
    <div class="w-full absolute bottom-0 mb-4">
      <ChatInput />
    </div>
  </div>
</template>

<script>
import resetStateOnLeave from "~/mixins/resetStateOnLeave";

export default {
  mixins: [resetStateOnLeave],
  data() {
    return {
      store: 'chat',
    }
  },
  computed: {
    messages() {
      return this.$store.getters['chat/messages'];
    },
    title() {
      return this.$route.params.friendName
    }
  },
  watch: {
    messages(newVal) {
      this.scrollToBottom();
    }
  },
  async mounted() {
    await this.fetchChat();
    Echo.private(`message.${this.$auth.user.id}`).listen(".new-message", e => {
      this.$store.commit('chat/addMessage', {body: e.message.body, isSender: false});
    });
    // this.scrollToBottom();
  },
  methods: {
    async fetchChat() {
      const user = this.$route.params.friendId;
      await this.$store.dispatch('chat/fetch', user);
    },
    scrollToBottom() {
      //scroll to bottom when a new message is added
      let objDiv = document.getElementById("scroll");
      objDiv.scrollTop = objDiv.scrollHeight;
    }
  }
}
</script>

<style scoped>
.chat-messages {
  height: 78vh;
  overflow: scroll;
  display: flex;
  flex-direction: column-reverse;
}

</style>
