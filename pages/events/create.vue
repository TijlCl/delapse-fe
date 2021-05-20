<template>
  <div class="min-h-screen add-event-bg" :style="pageBackground">
    <TopNav pageTitle="Add event"></TopNav>
    <div
      class="w-3/4 max-w-sm mx-auto flex items-center justify-center md:inline md:max-w-full"
    >
      <div class="py-4 px-6 mt-8 md:py-32 md:px-24">
        <form @submit.prevent="storeEvent">
          <div class="mt-3 md:mt-8">
            <InputField v-model="title" class="mb-4" placeholder="Title" icon="user" :api-errors="errors.title"/>
          </div>
          <div class="mt-6 md:mt-12">
            <DatePickerInputField v-model="date" class="mb-4" placeholder="Date" icon="calendar-alt" :api-errors="errors.date" />
          </div>
          <div class="mt-6 md:mt-12">
            <InputField v-model="description" class="mb-4" placeholder="Description" icon="book-open" :api-errors="errors.description"/>
          </div>

          <div class="mt-6 md:mt-12">
            <SelectField v-model="tag" :options="['Private', 'Work', 'School']" class="mb-4" :api-errors="errors.tag"/>
          </div>

          <div class="mt-12 md:mt-32">
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
      tag: 'Private',
    }
  },
  computed: {
    errors() {
      return this.$store.getters['events/errors'];
    },
    pageBackground() {
      const imgUrl = this.$img('/img/add-event-bg.jpg', { width: 400 })
      return {
        backgroundImage: `url('${imgUrl}')`
      }
    }
  },
  methods: {
    async storeEvent() {
      const event = {
        title: this.title,
        date: this.date,
        description: this.description,
        tag: this.tag,
      }
      try {
        await this.$store.dispatch('events/create', event)
        this.$router.back();
      } catch (e) {
          console.log(e);
      }

    },
  },
}
</script>

<style scoped>
.add-event-bg {
  background-size: 110% 125%
}
</style>
