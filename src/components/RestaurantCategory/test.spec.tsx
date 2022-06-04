import React from 'react'
import TestRenderer from 'react-test-renderer';
import { icons, images } from 'src/constants'

import RestaurantCategory, { RestaurantCategoryT } from './index'

describe('Testing restaurant category component', () => {
  it('Should render as selected', () => {
    const testData: RestaurantCategoryT = {
      id: 1,
      name: 'Modern Fries',
      icon: icons.fries
    }
    const tree = TestRenderer
      .create(
        <RestaurantCategory
          onCategorySelect={(ct) => console.log(ct)}
          selected={true}
          id={testData.id}
          icon={testData.icon}
          name={testData.name}
        />
      )
    expect(tree).toMatchSnapshot();
  })

  it('Should render as not selected', () => {
    const testData: RestaurantCategoryT = {
      id: 1,
      name: 'Modern Fries',
      icon: icons.fries
    }
    const tree = TestRenderer
      .create(
        <RestaurantCategory
          onCategorySelect={(ct) => console.log(ct)}
          selected={false}
          id={testData.id}
          icon={testData.icon}
          name={testData.name}
        />
      )
      expect(tree).toMatchSnapshot();
  })
})
