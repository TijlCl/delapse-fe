export default {
  event: state => state.event,
  errors: state => state.errors,
  title: state => state.event.title,
  date: state => state.event.date,
  description: state => state.event.description,
  tag: state => state.event.tag,
}
