import React from 'react'
import TestRenderer from 'react-test-renderer'
import { restaurantData } from 'src/screens/Home/mocks'
import RestaurantPreview from './index'

describe('Testing restaurant preview component', () => {
  it('Should render restaurant preview component', () => {
    const restaurant = restaurantData[0]
    const tree = TestRenderer.create(
      <RestaurantPreview
        navigation={{}}
        data={{
          menu: restaurant.menu,
          duration: restaurant.duration,
          name: restaurant.name,
          id: restaurant.id,
          rating: restaurant.rating,
          photo: restaurant.photo
        }}
      />
    )
    expect(tree).toMatchSnapshot()
  })
})
