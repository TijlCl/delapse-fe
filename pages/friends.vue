<template>
  <div>
    <div v-show="!searching">
      <TopNav pageTitle="Chat" dark>
        <font-awesome-icon icon="search" class="search md:text-2xl md:text-3xl" @click="startSearch"/>
      </TopNav>
      <nav class="flex flex-row mb-4">
        <button class="w-1/2 text-gray-700 py-4 px-6 block focus:outline-none font-medium md:text-xl lg:text-2xl" @click="focus('chats')" v-bind:class="display === 'chats' ? 'border-b-2 border-gray-600' : ''">
          Chats
        </button>
        <button class="w-1/2 text-gray-700 py-4 px-6 block focus:outline-none md:text-xl lg:text-2xl" @click="focus('chat_groups')" v-bind:class="display === 'chat_groups' ? 'border-b-2 border-gray-600' : ''">
          Chat groups
        </button>
      </nav>
      <div v-if="display === 'chats'">
        <friend-request-card v-for="(request, i) in friendRequests" :key="request.id" :user="request" />
        <FriendCard v-for="(friend, i) in friends" :key="i" :friend="friend" @click.native="openChat(friend)"/>
      </div>
      <div v-else>
        <ChatGroupCard v-for="(chatGroup, i) in chatGroups" :key="i" :id="chatGroup.id" @click.native="openChatGroup(chatGroup.id)"/>
      </div>
    </div>
    <div v-show="searching">
      <ContactSearch ref="search" :focusInput="focusInput" @done="doneSearching" />
      <UserCard v-for="(user, i) in users"
                :key="i"
                :user="user"
                class="my-3" @click.native="userClicked(user)"/>
    </div>
    <bottom-nav active="chat"/>
  </div>
</template>

<script>
import FriendCard from "~/components/friends/FriendCard";
import FriendRequestCard from "~/components/friends/FriendRequestCard";
import UserCard from "~/components/friends/UserCard";
import ChatGroupCard from "~/components/friends/ChatGroupCard";
import Vue from 'vue';

export default {
  name: "friends",
  components: {
    FriendCard,
    FriendRequestCard,
    UserCard,
    ChatGroupCard
  },
  data() {
    return {
      searching: false,
      focusInput: false,
      display: 'chats'
    }
  },
  computed: {
    friends () {
      return this.$store.getters['friends/friends'];
    },
    users () {
      return this.$store.getters['users/users'];
    },
    chatGroups () {
      return this.$store.getters['chatGroups/chatGroups'];
    },
    friendRequests() {
      return this.$store.getters['friends/friendRequests'];
    }
  },
  mounted() {
    this.$store.dispatch('friends/fetchAll');
    this.$store.dispatch('chatGroups/fetchAll');
    this.$store.dispatch('friends/fetchRequests');
  },
  methods: {
    focus(target) {
      this.display = target;
    },
    openChat(friend) {
      this.$router.push({
        name: 'chat',
        params: {friendId: friend.user.id, friendName: friend.user.name }
      })
    },
    openChatGroup(id) {
      this.$router.push({
        name: 'chat-group',
        params: {id: id }
      })
    },
    startSearch() {
      this.searching = true;
      Vue.nextTick(() => {
        this.focusInput = true;
      });
    },
    doneSearching() {
      this.searching = false;
      this.focusInput = false;
    },
    userClicked(user) {
      if(user.isFriend) {
        this.$router.push({
          name: 'chat',
          params: {friendId: user.id, friendName: user.name }
        })
      } else {
        this.$router.push({
          name: 'users-id',
          params: {id: user.id}
        })
      }
    }
  }
}
</script>

<style scoped>
.search{
  color: #089082;
}
</style>
