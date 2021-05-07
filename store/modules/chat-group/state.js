const initialModel = {
  id: null,
  messages: [],
  users: []
}

const model = {
  title: null,
  description: null
}

export default () => ({
  initialState: initialModel,
  id: null,
  messages: [],
  users: [],
  model: model
})
