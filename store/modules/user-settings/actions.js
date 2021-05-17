export default {
  async fetch (context) {
    if(context.getters['isEmpty']) {
      const {data} = await this.$axios.get(`/api/v1/user-settings`);
      context.commit('setSettings', data.data);
    }
  },

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

  async update (context, settings) {
    await this.$axios.put(`/api/v1/user-settings/update-settings`, settings)
        .then(response => {
          context.commit('setErrors', {});
          context.commit('setSettings', response.data.data);
        }).catch(errors => {
          context.commit('setErrors', errors.response.data.errors);
          throw errors;
        });
  },
}
