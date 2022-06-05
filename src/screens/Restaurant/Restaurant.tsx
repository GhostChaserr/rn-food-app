import React  from 'react'
import { icons } from 'src/constants'
import Animated from 'react-native-reanimated'

import Header from 'src/components/Header'
import Layout from 'src/components/Layout'

import { RestaurantMenu } from 'src/components'
import { RestaurantMenuT } from 'src/types'

import { restaurantData } from '../Home/mocks'
import { StyledFoodInfoWrapper } from './RestaurantStyles'

const Restaurant = ({ route, navigation }: any) => {
  const restaurant = restaurantData[1]

  const handleHeaderLeftIconPress = () => {
    navigation.goBack()
  }

  const handleHeaderRightIconPress = () => {
    navigation.goBack()
  }


  return (
    <Layout>
      <Header
        handleRightIconPress={handleHeaderRightIconPress}
        handleLeftIconPress={handleHeaderLeftIconPress}
        leftIcon={icons.back}
        rightIcon={icons.hamburger}
        centerText='Burger detail'
      />
      <StyledFoodInfoWrapper>
        <Animated.ScrollView
          horizontal
          pagingEnabled={true}
          scrollEventThrottle={16}
          snapToAlignment={'start'}
          showsHorizontalScrollIndicator={false}
        >
          {restaurant.menu.map((menu: RestaurantMenuT) => (
            <RestaurantMenu
              key={menu.menuId}
              photo={menu.photo} 
              description={menu.description} 
              name={menu.name} 
              menuId={menu.menuId} 
            />
          ))}
        </Animated.ScrollView>
      </StyledFoodInfoWrapper>
    </Layout>
  )
}

export default Restaurant