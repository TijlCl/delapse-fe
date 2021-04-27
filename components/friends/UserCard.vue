<template>
  <div class="bg-white w-full flex items-center px-5">
    <span class="mr-3 rounded-full h-10 w-10 flex items-center justify-center bg-gray-400">
      <font-awesome-icon icon="user" class="text-white"/>
    </span>
    <div class="flex-grow p-3">
      <div class="font-semibold text-gray-700">
        {{ user.name }}
      </div>
    </div>
    <font-awesome-icon v-if="!user.isFriend" icon="user-plus" class="text-gray-500"/>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
    }
  },
}
</script>
