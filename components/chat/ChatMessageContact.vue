<template>
  <div class="chat-message mx-4 my-1">
    <div class="flex items-end">
      <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
        <div>
          <span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600 md:text-xl">{{ text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  },
  data() {
    return {
    }
  },
}
</script>
