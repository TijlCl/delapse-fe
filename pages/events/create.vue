<template>
  <div class="min-h-screen add-event-bg">
    <TopNav pageTitle="Add event"></TopNav>
    <div
      class="w-3/4 max-w-sm mx-auto flex items-center justify-center"
    >
      <div class="py-4 px-6 mt-8">
        <form @submit.prevent="loginPassport">
          <div class="mt-3">
            <InputField  v-model="title" class="mb-4" placeholder="Title" icon="user"/>
          </div>
          <div class="mt-6">
            <InputField  v-model="date" class="mb-4" placeholder="Date" icon="calendar-alt"/>
          </div>
          <div class="mt-6">
            <InputField  v-model="description" class="mb-4" placeholder="Description" icon="book-open"/>
          </div>
          <div class="mt-12">
            <Button title="Save" color="#1BA711"/>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'base',
  auth: 'guest',
  data() {
    return {
      title: null,
      date: null,
      description: null,
      error: null,
    }
  },
  methods: {

  },
}
</script>

<style scoped>
.add-event-bg{
  background: url('~assets/img/add-event-bg.jpg'), no-repeat;
  background-size: 110% 125%
}
</style>
