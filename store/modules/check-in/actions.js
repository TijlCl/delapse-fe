export default {
  async create(context, checkIn) {
    await this.$axios.post(`/api/v1/check-ins`, checkIn)
  }
}
