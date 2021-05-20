<template>
  <div>
    <TopNav :pageTitle="title" dark>
      <font-awesome-icon icon="user-plus" class="search md:text-2xl" @click="creatingGroup = true"/>
    </TopNav>

    <div v-if="!creatingGroup">
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

    <div v-else class="mt-2">
      <FriendCard v-for="(friend, i) in friends" :key="i" :friend="friend" @click.native="addToGroup(friend.user.id)" :showLastMessage="false"/>
    </div>
  </div>
</template>

<script>
import resetStateOnLeave from "~/mixins/resetStateOnLeave";
import FriendCard from "~/components/friends/FriendCard";

export default {
  mixins: [resetStateOnLeave],
  components: {
    FriendCard,
  },
  data() {
    return {
      store: 'chat',
      creatingGroup: false
    }
  },
  beforeDestroy() {
    Echo.leave(`message.${this.$auth.user.id}`);
  },
  computed: {
    friends () {
      return this.$store.getters['friends/friends'];
    },
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
      this.markAsRead(e.message.id);
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
    },
    markAsRead(messageId) {
      this.$store.dispatch('chat/markMessageAsRead', messageId);
    },
    addToGroup(friendToAddID) {
      const currentFriendId = this.$route.params.friendId;
      this.$store.dispatch('chatGroups/create', [friendToAddID, currentFriendId])
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
