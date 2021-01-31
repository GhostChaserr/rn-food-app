import styled from 'styled-components/native'


export const StyledTouchableView = styled.TouchableOpacity`
  margin: 5px 0;
`

export const StyledRestaurantImgWrapper = styled.View`
  margin-top: 5px; 
  position: relative;
  border-radius: 30px;
`

export const StyledRestaurantImg = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 30px;
`

export const StyledDeliveryTimeWrapper = styled.View`
  position: absolute;
  padding: 10px 40px;
  background-color: white;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  bottom: 0;
`

export const StyledDeliveryTimeText = styled.Text`
  font-size: 12px;
`

export const StyledRestaurantMetaWrapper = styled.View`
  margin-top: 10px;
`
export const StyledRestaurantMetaHeader = styled.Text`
  font-size: 24px;
`
export const StyledRestaurantMetaInfoWrapper = styled.View`
  margin-top: 5px;
  flex-direction: row;
`

export const StyledRestaurantMetaInfoContainer  = styled.View`
  margin-right: 5px;
  flex-direction: row;
`

export const StyledRestaurantMetaInfoText = styled.Text`
  font-size: 14px;
`

export const StyledStarIcon = styled.Image`
  width: 15px;
  height: 15px;
  margin-right: 5px;
  position: relative;
  top: 2px;
`