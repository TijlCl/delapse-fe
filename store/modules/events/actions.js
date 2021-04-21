export default {
  async fetchAll (context) {
    if(context.getters['isEmpty']) {
      const {data} = await this.$axios.get(`/api/v1/events`);
      context.commit('setEvents', data.data);
    }
  },
  async create(context, event) {
    await this.$axios.post(`/api/v1/events`, event)
      .then(response => {
        context.commit('setErrors', {});
        context.commit('addEvent', response.data.data);
      }).catch(errors => {
        context.commit('setErrors', errors.response.data.errors);
        throw errors;
      })
  }
}
