export default {
  addCity: (state, city) => {
    state.cities.push(city)
  },
  setCities: (state, cities) => {
    state.cities = cities
  },
  removeCity(state, city) {
    state.cities = state.cities.filter(item => item !== city)
    const widget = state.widgets.find(item => item.name === city)
    if (widget)
      this.commit('removeWidget', widget)
  },
  addWidget: (state, widget) => {
    const widgetInState = state.widgets.findIndex(item => item.id === widget.id)
    if (!~widgetInState) {
      state.widgets.push(widget)
      return
    }
    if (state.widgets[widgetInState].dt + 600 < widget.dt) {
      state.widgets[widgetInState] = widget
    }
  },
  removeWidget: (state, widget) => {
    state.widgets = state.widgets.filter(item => item.id !== widget.id)
  }
}
