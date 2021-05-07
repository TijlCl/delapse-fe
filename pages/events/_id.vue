<template>
  <div class="min-h-screen add-event-bg" :style="pageBackground">

    <TopNav pageTitle="Edit event">
      <font-awesome-icon class="text-xl text-red-700" @click="showDeleteModal" icon="trash"/>
    </TopNav>

    <WarningModal title="Delete event" v-show="deleteModalVisible" @close="closeDeleteModal">
      <button @click="deleteEvent" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
        Delete
      </button>
    </WarningModal>

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
      deleteModalVisible: false,
    }
  },
  async fetch ({ store, params }) {
    const eventId = params.id;
    await store.dispatch('event/fetch', eventId);
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
    },

    pageBackground() {
      const imgUrl = this.$img('/img/add-event-bg.jpg', { width: 400 })
      return {
        backgroundImage: `url('${imgUrl}')`
      }
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

    showDeleteModal () {
      this.deleteModalVisible = true;
    },

    closeDeleteModal () {
      this.deleteModalVisible = false;
    }
  },
}
</script>

<style scoped>
.add-event-bg {
  background-size: 110% 125%
}
</style>
