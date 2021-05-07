<template>
  <div>
    <TopNav :pageTitle="title" dark>
      <font-awesome-icon icon="user-plus" class="search" @click="addingUser = true"/>
    </TopNav>

    <div v-if="!addingUser">
      <ul class="chat-messages" id="scroll">
        <li v-for="message in messages">
          <ChatMessageUser v-if="message.isSender" :text="message.body" />
          <ChatMessageContact v-else :text="message.body" />
        </li>
      </ul>
      <div class="w-full absolute bottom-0 mb-4">
        <GroupChatInput :id="chatId" />
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
import GroupChatInput from "@/components/chat/GroupChatInput";

export default {
  mixins: [resetStateOnLeave],
  components: {
    FriendCard,
    GroupChatInput
  },
  data() {
    return {
      store: 'chat-group',
      addingUser: false
    }
  },
  beforeDestroy() {
    Echo.leave(`group-message.${this.chatId}`);
  },
  computed: {
    friends () {
      return this.$store.getters['friends/friends'];
    },
    chatId() {
      return this.$store.getters['chatGroup/id']
    },
    messages() {
      return this.$store.getters['chatGroup/messages'];
    },
    users() {
      return this.$store.getters['chatGroup/users'];
    },
    title() {
      return this.users.map((user) => user.name).join(', ');
    }
  },
  watch: {
    messages(newVal) {
      this.scrollToBottom();
    }
  },
  async mounted() {
    await this.fetchChat();
    Echo.private(`group-message.${this.chatId}`).listen(".new-group-message", e => {
      if(e.message.senderId !== this.$auth.user.id) {
        this.$store.commit('chatGroup/addMessage', {body: e.message.body, isSender: false});
      }
    });
  },
  methods: {
    async fetchChat() {
     await this.$store.dispatch('chatGroup/fetch', this.$route.params.id);
    },
    scrollToBottom() {
      //scroll to bottom when a new message is added
      let objDiv = document.getElementById("scroll");
      objDiv.scrollTop = objDiv.scrollHeight;
    },
    markAsRead(messageId) {
      this.$store.dispatch('chat/markMessageAsRead', messageId);
    },
    addToGroup(friendId) {
      this.$store.dispatch('chatGroup/addUser', friendId)
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
