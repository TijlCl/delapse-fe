export default {
  async fetchAll (context, filters) {
    const {data} = await this.$axios.get(`/api/v1/users/getByUsername`, {
      params: filters
    });
    context.commit('setUsers', data.data);
  }
}
