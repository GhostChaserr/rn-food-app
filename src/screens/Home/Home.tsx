import React, { useState } from 'react'
import GlobalStyles from 'src/global.styles'
import { icons } from 'src/constants'

import { RestaurantPreviewT } from 'src/types'
import { RestaurantCategory, RestaurantPreview } from 'src/components'
import { RestaurantCategoryT } from 'src/components/RestaurantCategory'
import { categoryData, restaurantData } from './mocks'

import {
  StyledSafeAreaView,
  StyledHeaderWrapper,
  StyledTouchableIcon,
  StyledHeaderIcon,
  StyledHeaderLocation,
  StyledHeaderLocationText,
  StyledContentWrapper,
  StyledHeadingsWrapper,
  StyledHeadingsHeader,
  StyledCategoriesContainer,
  StyledFlatList,
  StyledRestaurantsFeedWrapper
} from './HomeStyles'

const Home = ({ navigation }: any) => {
  const [categories] = useState(categoryData)
  const [selectedCategory, setSelectedCategory] = React.useState<any>(null)

  const onCategorySelect = (category: RestaurantCategoryT) =>
    setSelectedCategory(category)

  const renderCategory = ({ item }: { item: any }) => {
    const restaurantCategory: RestaurantCategoryT = item
    return (
      <RestaurantCategory
        selected={selectedCategory?.id == restaurantCategory.id}
        icon={restaurantCategory.icon}
        onCategorySelect={onCategorySelect}
        id={restaurantCategory.id}
        name={restaurantCategory.name}
      />
    )
  }

  const renderRestaurantPreview = ({ item }: { item: any }) => {
    const restaurant: RestaurantPreviewT = item
    return (
      <RestaurantPreview
        navigation={navigation}
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
  }

  return (
    <StyledSafeAreaView style={GlobalStyles.adroidSafeArea}>
      <StyledContentWrapper>
        <StyledHeaderWrapper>
          <StyledTouchableIcon>
            <StyledHeaderIcon source={icons.nearby} />
          </StyledTouchableIcon>
          <StyledHeaderLocation>
            <StyledHeaderLocationText>
              {' '}
              45 Lincoln street{' '}
            </StyledHeaderLocationText>
          </StyledHeaderLocation>
          <StyledTouchableIcon>
            <StyledHeaderIcon source={icons.basket} />
          </StyledTouchableIcon>
        </StyledHeaderWrapper>

        <StyledHeadingsWrapper>
          <StyledHeadingsHeader>Main</StyledHeadingsHeader>
          <StyledHeadingsHeader>Categoris</StyledHeadingsHeader>
        </StyledHeadingsWrapper>

        <StyledCategoriesContainer>
          <StyledFlatList
            data={categories}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item: RestaurantCategoryT | any) => `${item.id}`}
            renderItem={renderCategory}
          />
        </StyledCategoriesContainer>
        <StyledRestaurantsFeedWrapper>
          <StyledFlatList
            data={restaurantData}
            keyExtractor={(item: RestaurantPreviewT | any) => `${item.id}`}
            renderItem={renderRestaurantPreview}
          />
        </StyledRestaurantsFeedWrapper>
      </StyledContentWrapper>
    </StyledSafeAreaView>
  )
}

export default Home
