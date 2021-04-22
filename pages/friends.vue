<template>
  <div>
    <TopNav pageTitle="Chat" dark />
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
</template>

<script>
import FriendCard from "~/components/friends/FriendCard";
export default {
  name: "friends",
  components: {
    FriendCard
  },
  data() {
    return {
    }
  },
  computed: {
    friends () {
      return this.$store.getters['friends/friends'];
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
    }
  }
}
</script>

<style scoped>

</style>
