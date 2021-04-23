<template>
  <div class="min-h-screen add-event-bg">
    <TopNav pageTitle="Edit event"></TopNav>
    <div
      class="w-3/4 max-w-sm mx-auto flex items-center justify-center"
    >
      <div class="py-4 px-6 mt-8">
        <form @submit.prevent="updateEvent">
          <div class="mt-3">
            <InputField v-model="title" class="mb-4" placeholder="Title" icon="user" :api-errors="errors.title"/>
          </div>
          <div class="mt-6">
            <DatePickerInputField v-model="date" class="mb-4" placeholder="Date" icon="calendar-alt" :api-errors="errors.date" />
          </div>
          <div class="mt-6">
            <InputField v-model="description" class="mb-4" placeholder="Description" icon="book-open" :api-errors="errors.description"/>
          </div>

          <div class="mt-6">
            <SelectField v-model="tag" :options="['Private', 'Work', 'School']" class="mb-4" :api-errors="errors.tag"/>
          </div>

          <div class="mt-12">
            <Button title="Save" color="#1BA711"/>
          </div>
        </form>

        <span class="flex items-center text-2xl text-red-700 mt-10">
          <font-awesome-icon v-on:click="deleteEvent" icon="trash"/>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import resetStateOnLeave from "~/mixins/resetStateOnLeave";

export default {
  mixins: [resetStateOnLeave],
  layout: 'base',
  data() {
    return {
      store: 'event',
    }
  },
  async beforeCreate() {
    const eventId = this.$route.params.id;
    await this.$store.dispatch('event/fetch', eventId);
  },
  computed: {
    title: {
      get() {
        return this.$store.getters['event/title']
      },
      set(val) {
        this.$store.commit('event/setTitle', val);
      },
    },

    date: {
      get() {
        return this.$store.getters['event/date']
      },
      set(val) {
        this.$store.commit('event/setDate', val);
      },
    },

    description: {
      get() {
        return this.$store.getters['event/description']
      },
      set(val) {
        this.$store.commit('event/setDescription', val);
      },
    },

    tag: {
      get() {
        return this.$store.getters['event/tag']
      },
      set(val) {
        this.$store.commit('event/setTag', val);
      },
    },

    errors() {
      return this.$store.getters['event/errors'];
    }
  },
  methods: {
    async updateEvent() {
      const event = {
        title: this.title,
        date: this.date,
        description: this.description,
        tag: this.tag,
      }
      try {
        await this.$store.dispatch('event/update', {id: this.$route.params.id, event: event})
        this.$router.back();
      } catch (e) {
        console.log(e);
      }
    },

    async deleteEvent() {
      try {
          await this.$store.dispatch('event/delete', this.$route.params.id)
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
  background: url('~assets/img/add-event-bg.jpg'), no-repeat;
  background-size: 110% 125%
}
</style>
