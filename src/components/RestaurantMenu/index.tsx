import React, { useState, FC } from 'react'
import { ImageSourcePropType } from 'react-native'

import {
  RestaurantMenuWrapper,
  StyledMenuImage,
  StyledQuantityBtnsContainer,
  StyledQuantityBtn,
  StyledQuantityBtnText,
  StyledMenuImageWrapper,
  StyledMenuContentWrapper,
  StyledMenuNameContainer,
  StyledMenuName,
  StyledMenuDescriptionContainer,
  StyledMenuDescription
} from './styles'

type RestaurantMenuProps = {
  photo: ImageSourcePropType
  name: string
  description: string
  menuId: number
}

const RestaurantMenu: FC<RestaurantMenuProps> = (props) => {
  const [quantity, setQuantity] = useState<number>(0)

  const handleQuantityIncrement = () => setQuantity(quantity + 1)
  const handleQuantityDecrement = () => setQuantity(quantity - 1)
  return (
    <RestaurantMenuWrapper>
      <StyledMenuImageWrapper>
        <StyledMenuImage resizeMode="cover" source={props.photo} />
      </StyledMenuImageWrapper>
      <StyledMenuContentWrapper>
        <StyledMenuNameContainer>
          <StyledMenuName>{props.name}</StyledMenuName>
        </StyledMenuNameContainer>
        <StyledMenuDescriptionContainer>
          <StyledMenuDescription>{props.description}</StyledMenuDescription>
        </StyledMenuDescriptionContainer>
      </StyledMenuContentWrapper>
      <StyledQuantityBtnsContainer>
        <StyledQuantityBtn onPress={handleQuantityDecrement} position="left">
          <StyledQuantityBtnText> - </StyledQuantityBtnText>
        </StyledQuantityBtn>
        <StyledQuantityBtn disabled={true} position="center">
          <StyledQuantityBtnText> {quantity} </StyledQuantityBtnText>
        </StyledQuantityBtn>
        <StyledQuantityBtn onPress={handleQuantityIncrement} position="right">
          <StyledQuantityBtnText> + </StyledQuantityBtnText>
        </StyledQuantityBtn>
      </StyledQuantityBtnsContainer>
    </RestaurantMenuWrapper>
  )
}

export default RestaurantMenu
