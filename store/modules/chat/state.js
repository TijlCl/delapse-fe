const initialModel = {
  id: null,
  messages: []
}

const model = {
  title: null,
  // date: moment().now(),
  description: null
}

export default () => ({
  initialState: initialModel,
  id: null,
  messages: [],
  model: model
})
