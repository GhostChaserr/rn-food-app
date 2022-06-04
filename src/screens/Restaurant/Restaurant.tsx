import React  from 'react'
import { icons } from 'src/constants'
import Animated from 'react-native-reanimated'


import Header from 'src/components/Header'
import Layout from 'src/components/Layout'
import Menu  from  'src/components/Menu'

import { restaurantData } from '../Home/mocks'
import { RestaurantMenu } from './RestaurantTypes'
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
          {restaurant.menu.map((menu: RestaurantMenu) => (
            <Menu 
              key={menu.menuId}
              restaurantId={route.params.restaurantId}
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