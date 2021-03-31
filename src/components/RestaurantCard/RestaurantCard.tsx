import React, { memo } from 'react'
import { icons } from 'src/constants'

import { RestaurantCardProps } from './RestaurantCardTypes'
import {
  StyledTouchableView,
  StyledRestaurantImgWrapper,
  StyledRestaurantImg,
  StyledDeliveryTimeWrapper,
  StyledDeliveryTimeText,
  StyledRestaurantMetaWrapper,
  StyledRestaurantMetaHeader,
  StyledRestaurantMetaInfoWrapper,
  StyledRestaurantMetaInfoContainer,
  StyledRestaurantMetaInfoText,
  StyledStarIcon
} from './RestaurantCardStyles'

const RestaurantCard = ({ photo, name, rating, id, navigation }: RestaurantCardProps) => {
  const handleRestaurantOpen = () => navigation.navigate('Restaurant', { restaurantId: id })
  return (
    <StyledTouchableView onPress={handleRestaurantOpen}>
      <React.Fragment>
        <StyledRestaurantImgWrapper>
          <StyledRestaurantImg source={photo} />
          <StyledDeliveryTimeWrapper>
            <StyledDeliveryTimeText> 25min </StyledDeliveryTimeText>
          </StyledDeliveryTimeWrapper>
        </StyledRestaurantImgWrapper>
        <StyledRestaurantMetaWrapper>
          <StyledRestaurantMetaHeader>{name}</StyledRestaurantMetaHeader>
          <StyledRestaurantMetaInfoWrapper>
            <StyledRestaurantMetaInfoContainer>
              <StyledStarIcon source={icons.star} />
              <StyledRestaurantMetaInfoText>
                {rating}
              </StyledRestaurantMetaInfoText>
            </StyledRestaurantMetaInfoContainer>
            <StyledRestaurantMetaInfoContainer style={{ marginLeft: 0 }}>
              <StyledRestaurantMetaInfoText>
                burgers
              </StyledRestaurantMetaInfoText>
            </StyledRestaurantMetaInfoContainer>
            <StyledRestaurantMetaInfoContainer>
              <StyledRestaurantMetaInfoText>
                snacks
              </StyledRestaurantMetaInfoText>
            </StyledRestaurantMetaInfoContainer>
            <StyledRestaurantMetaInfoContainer>
              <StyledRestaurantMetaInfoText>$200</StyledRestaurantMetaInfoText>
            </StyledRestaurantMetaInfoContainer>
          </StyledRestaurantMetaInfoWrapper>
        </StyledRestaurantMetaWrapper>
      </React.Fragment>
    </StyledTouchableView>
  )
}

export default memo(RestaurantCard)
