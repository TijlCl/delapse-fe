export default {
  async updateProfile (context, userData) {
    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    }
    await this.$axios.post(`/api/v1/user-settings/update-user`, userData, config)
      .then(response => {
        context.commit('setErrors', {});
      }).catch(errors => {
        context.commit('setErrors', errors.response.data.errors);
        throw errors;
      });
  },
}
