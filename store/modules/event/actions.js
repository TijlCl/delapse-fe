export default {
  async fetch (context, eventId) {
    const { data } = await this.$axios.get(`/api/v1/events/${eventId}`);
    context.commit('setEvent', data.data);
  },

  async update(context, { id, event }) {
    await this.$axios.put(`/api/v1/events/${id}`, event)
      .then(response => {
        context.commit('setErrors', {});
        context.commit('events/updateById', response.data.data, { root: true });
      }).catch(errors => {
        context.commit('setErrors', errors.response.data.errors);
        throw errors;
      })
  },

  async delete(context, id) {
    await this.$axios.delete(`/api/v1/events/${id}`)
      .then(response => {
        context.commit('setErrors', {});
        context.commit('events/removeById', id, { root: true });
      }).catch(errors => {
        context.commit('setErrors', errors.response.data.errors);
        throw errors;
      })
  },

}
