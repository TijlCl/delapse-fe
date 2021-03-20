<template>
  <div class="min-h-screen add-event-bg">
    <TopNav pageTitle="Add event"></TopNav>
    <div
      class="w-3/4 max-w-sm mx-auto flex items-center justify-center"
    >
      <div class="py-4 px-6 mt-8">
        <form @submit.prevent="storeEvent">
          <div class="mt-3">
            <InputField v-model="title" class="mb-4" placeholder="Title" icon="user" :api-errors="errors.title"/>
          </div>
          <div class="mt-6">
            <DatePickerInputField v-model="date" class="mb-4" placeholder="Date" icon="calendar-alt" :api-errors="errors.date" />
          </div>
          <div class="mt-6">
            <InputField v-model="description" class="mb-4" placeholder="Description" icon="book-open" :api-errors="errors.description"/>
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

  data() {
    return {
      title: null,
      date: null,
      description: null,
      date_today: null,
      errors: {},
    }
  },
  methods: {
    async storeEvent() {
      this.error = null;
      this.$axios.post("api/v1/events", {
        title: this.title,
        date: this.date,
        description: this.description,
      }).then(response => {

      })
        .catch(errors => {
          console.log(errors.response.data.errors);
          this.errors = errors.response.data.errors;
        })
    },
  },
}
</script>

<style scoped>
.add-event-bg {
  background: url('~assets/img/add-event-bg.jpg'), no-repeat;
  background-size: 110% 125%
}
</style>
