<template>
  <div>
    <div v-show="!searching">
      <TopNav pageTitle="Chat" dark>
        <font-awesome-icon icon="search" class="search" @click="startSearch"/>
      </TopNav>
      <nav class="flex flex-row mb-4">
        <button class="w-1/2 text-gray-700 py-4 px-6 block focus:outline-none border-b-2 font-medium border-gray-600">
          Chats
        </button>
        <button class="w-1/2 text-gray-700 py-4 px-6 block focus:outline-none">
          Chat groups
        </button>
      </nav>
      <FriendCard v-for="(friend, i) in friends" :key="i" :friend="friend" @click.native="openChat(friend)"/>
    </div>
    <div v-show="searching">
      <ContactSearch ref="search" :focusInput="focusInput" @done="doneSearching" />
      <UserCard v-for="(user, i) in users"
                :key="i"
                :user="user"
                class="my-3" @click.native="userClicked(user)"/>
    </div>
  </div>
</template>

<script>
import FriendCard from "~/components/friends/FriendCard";
import UserCard from "~/components/friends/UserCard";
import Vue from 'vue';

export default {
  name: "friends",
  components: {
    FriendCard,
    UserCard
  },
  data() {
    return {
      searching: false,
      focusInput: false,
    }
  },
  computed: {
    friends () {
      return this.$store.getters['friends/friends'];
    },
    users () {
      return this.$store.getters['users/users'];
    },
  },
  mounted() {
    this.$store.dispatch('friends/fetchAll');
  },
  methods: {
    openChat(friend) {
      this.$router.push({
        name: 'chat',
        params: {friendId: friend.user.id, friendName: friend.user.name }
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
