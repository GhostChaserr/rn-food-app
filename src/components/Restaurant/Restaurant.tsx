import React from 'react'
import { icons } from 'src/constants'

import { RestaurantPtops } from './RestaurantTypes'
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
} from './RestaurantStyles'


const Restaurant = ({ photo, name, rating }: RestaurantPtops) => {
  return (
    <StyledTouchableView>
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

export default Restaurant
