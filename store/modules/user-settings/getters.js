export default {
  errors: state => state.errors,
  isEmpty: state => state.settings.length <= 0,
  enableLocation: state => state.settings.enableLocation,
  sponsor: state => state.settings.sponsor,
  publicGallery: state => state.settings.publicGallery,
  emergencyContact: state => state.settings.emergencyContact
}
