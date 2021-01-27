import {render, screen, fireEvent} from '@testing-library/vue'
import CityLine from "@/components/options/CityLine";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCog, faTimes, faTrashAlt, faBars, faLevelDownAlt } from '@fortawesome/free-solid-svg-icons'
import actions from "@/store/main/actions";
import getters from "@/store/main/getters";
import mutations from "@/store/main/mutations";
library.add(faCog, faTimes, faTrashAlt, faBars, faLevelDownAlt)

describe('Testing component CityLine.vue', () => {
  it('Displays the city name during transmission city props', () => {
    render(CityLine, {
      props: {
        city: 'Moscow'
      },
      components: {
        FontAwesomeIcon
      }
    })
    expect(screen.queryByText('Moscow')).toBeTruthy()
  })
  it('Display icons', () => {
    render(CityLine, {
      components: {
        FontAwesomeIcon
      }
    })
  })
  //Todo @Kotaro -> Perhaps this should be attributed to the tests of the page itself
  it('Deleted city', async () => {
    const t = render(CityLine, {
      components: {
        FontAwesomeIcon
      },
      props: {
        city: 'Moscow'
      },
      store: {
        state: {
          cities: ['Moscow'],
          widgets: [{
            name: 'Moscow'
          }]
        },
        actions: actions,
        mutations: mutations,
        getters: getters
      }
    })
    await fireEvent.click(t.getByTestId('trash-alt', { selector: 'svg' }))
  })
})
