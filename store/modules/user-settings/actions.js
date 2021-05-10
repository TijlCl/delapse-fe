export default {
  async changeProfilePicture (context, profilePicture) {
    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    }
    return await this.$axios.post(`/api/v1/user-settings/change-profile-picture`, profilePicture, config)
      .then(response => {
        context.commit('setErrors', {});
        return response.data;
      }).catch(errors => {
        context.commit('setErrors', errors.response.data.errors);
        throw errors;
      });
  },
}
