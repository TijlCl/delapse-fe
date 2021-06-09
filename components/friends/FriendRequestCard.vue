<template>
  <div class="friend-request-wrapper shadow-lg">
    <p class="mb-6">{{user.name}} has sent you a friend request</p>
    <div class="flex gap-3">
      <Button title="Accept" color="#1BA711" @click.native="accept"/>
      <Button title="Decline" color="#BB0303" @click.native="decline"/>
    </div>
  </div>
</template>

<script>
import { isNil } from 'lodash'

export default {
  props: {
    user: {
      type: Object,
      default: () => {}
    },
  },
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
    async accept() {
      await this.$store.dispatch('friends/acceptRequest', this.user.id);
      this.$store.commit('notifications/removeNotification');
    },
    async decline() {
      await this.$store.dispatch('friends/declineRequest', this.user.id)
      this.$store.commit('notifications/removeNotification');
    }
  }
}
</script>

<style scoped>
.friend-request-wrapper {
  width: 80vw;
  margin: 20px auto;
  padding: 20px;
  border-radius: 0.75rem;
}
</style>
