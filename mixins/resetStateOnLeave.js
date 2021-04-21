export default {
  beforeDestroy () {
    this.$store.commit(`${this.store}/resetState`);
  }
}
