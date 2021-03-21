export default {
  async fetchAll (context) {
    const {data} = await this.$axios.get(`/api/v1/events`);
    context.commit('setEvents', data.data);
  }
}
