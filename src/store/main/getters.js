export default {
  getWidgets: s => s.cities.map(city => s.widgets.find(item => item.name === city))
}
