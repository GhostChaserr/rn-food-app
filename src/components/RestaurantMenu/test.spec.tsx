import React from 'react'
import TestRenderer from 'react-test-renderer'
import { restaurantData } from 'src/screens/Home/mocks'
import RestaurantMenu from './index'

describe('Testing Menu Component', () => {
  it('Should render Restaurant Menu Component', () => {
    const menu = restaurantData[0].menu[0];
    const tree = TestRenderer.create(
      <RestaurantMenu
        name={menu.name}
        photo={menu.photo}
        menuId={menu.menuId}
        description={menu.description}
      />
    )
    expect(tree).toMatchSnapshot()
  })
})
