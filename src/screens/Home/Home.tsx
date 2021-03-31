import React, { useState } from 'react'
import GlobalStyles from 'src/global.styles'
import { icons } from 'src/constants'

import Restaurant from 'src/components/Restaurant'
import { categoryData, restaurantData } from './mocks'


import { RestaurantCategory } from './HomeTypes'
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
  StyledCategoryButton,
  StyledCategoryWrapper,
  StyledCategoryIcon,
  StyledCategoryTextWrapper,
  StyledCategoryText,
  StyledFlatList,
  StyledRestaurantsFeedWrapper
} from './HomeStyles'

const Home = ({ navigation }: any) => {
  const [categories] = useState(categoryData)
  const [selectedCategory, setSelectedCategory] = React.useState<any>(null)

  const onCategorySelect = (category: RestaurantCategory) => setSelectedCategory(category)

  const renderCategory = ({ item }: { item: any }) => {
    const restaurantCategory: RestaurantCategory = item;
    const isSelected = selectedCategory?.id == restaurantCategory.id
    return (
      <StyledCategoryButton isSelected={isSelected} onPress={() => onCategorySelect(item)}>
        <StyledCategoryWrapper>
          <StyledCategoryIcon source={restaurantCategory.icon} />
        </StyledCategoryWrapper>
        <StyledCategoryTextWrapper>
          <StyledCategoryText isSelected={isSelected}>
            {restaurantCategory.name}
          </StyledCategoryText>
        </StyledCategoryTextWrapper>
      </StyledCategoryButton>
    )
  }

  const renderRestaurant = ({ item }: any) => <Restaurant navigation={navigation} {...item} />

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
            keyExtractor={(item: RestaurantCategory | any) => `${item.id}`}
            renderItem={renderCategory}
          />
        </StyledCategoriesContainer>
        <StyledRestaurantsFeedWrapper>
          <StyledFlatList
            data={restaurantData}
            keyExtractor={(item: RestaurantCategory | any) => `${item.id}`}
            renderItem={renderRestaurant}
          />
        </StyledRestaurantsFeedWrapper>
      </StyledContentWrapper>
    </StyledSafeAreaView>
  )
}

export default Home
