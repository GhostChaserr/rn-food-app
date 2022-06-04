import React, { FC } from 'react'
import { ImageSourcePropType } from 'react-native'
import { icons } from 'src/constants'
import { RestaurantMenuT } from 'src/types'
import { APP_SCREENS } from '../Navigator/Navigator'

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
} from './styles'

export type RestaurantProps ={
  data: {
    photo: ImageSourcePropType
    name: string
    rating: number 
    id: number
    menu: RestaurantMenuT[]
    duration: string
  }
  navigation?: any
}

const RestaurantPreview: FC<RestaurantProps> = (props) => {
  const handleRestaurantOpen = () => props.navigation.navigate(APP_SCREENS.RESTAURANT, { restaurantId: props.data.id })
  return (
    <StyledTouchableView onPress={handleRestaurantOpen}>
      <React.Fragment>
        <StyledRestaurantImgWrapper>
          <StyledRestaurantImg source={props.data.photo} />
          <StyledDeliveryTimeWrapper>
            <StyledDeliveryTimeText> {props.data.duration} min </StyledDeliveryTimeText>
          </StyledDeliveryTimeWrapper>
        </StyledRestaurantImgWrapper>
        <StyledRestaurantMetaWrapper>
          <StyledRestaurantMetaHeader>{props.data.name}</StyledRestaurantMetaHeader>
          <StyledRestaurantMetaInfoWrapper>
            <StyledRestaurantMetaInfoContainer>
              <StyledStarIcon source={icons.star} />
              <StyledRestaurantMetaInfoText>
                {props.data.rating}
              </StyledRestaurantMetaInfoText>
            </StyledRestaurantMetaInfoContainer>
            {props.data.menu.slice(0, 2).map(item => (
              <StyledRestaurantMetaInfoContainer key={item.menuId} style={{ marginLeft: 0 }}>
                <StyledRestaurantMetaInfoText>
                  {item.name}
                </StyledRestaurantMetaInfoText>
              </StyledRestaurantMetaInfoContainer>
            ))}
            <StyledRestaurantMetaInfoContainer>
              <StyledRestaurantMetaInfoText>$200</StyledRestaurantMetaInfoText>
            </StyledRestaurantMetaInfoContainer>
          </StyledRestaurantMetaInfoWrapper>
        </StyledRestaurantMetaWrapper>
      </React.Fragment>
    </StyledTouchableView>
  )
}

export default RestaurantPreview;
