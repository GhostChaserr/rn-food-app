import React, { memo, useState } from 'react'


import { MenuProps } from './MenuTypes'

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
  StyledMenuDescription,
} from './MenuStyles'


const Menu = ({ photo, name, description, menuId }: MenuProps) => {
  const [quantity, setQuantity] = useState<number>(0)

  const handleQuantityIncrement = () => setQuantity(quantity + 1)
  const handleQuantityDecrement = () => setQuantity(quantity - 1)
  return (
    <RestaurantMenuWrapper>
      <StyledMenuImageWrapper>
        <StyledMenuImage resizeMode='cover' source={photo} />
      </StyledMenuImageWrapper>
      <StyledMenuContentWrapper>
        <StyledMenuNameContainer>
          <StyledMenuName>
            {name}
          </StyledMenuName>
        </StyledMenuNameContainer>
        <StyledMenuDescriptionContainer>
          <StyledMenuDescription>
            {description}
          </StyledMenuDescription>
        </StyledMenuDescriptionContainer>
      </StyledMenuContentWrapper>
      <StyledQuantityBtnsContainer>
        <StyledQuantityBtn onPress={handleQuantityDecrement} position='left'>
          <StyledQuantityBtnText> - </StyledQuantityBtnText>
        </StyledQuantityBtn>
        <StyledQuantityBtn disabled={true} position='center'>
          <StyledQuantityBtnText> {quantity} </StyledQuantityBtnText>
        </StyledQuantityBtn>
        <StyledQuantityBtn onPress={handleQuantityIncrement} position='right'>
          <StyledQuantityBtnText> + </StyledQuantityBtnText>
        </StyledQuantityBtn>
      </StyledQuantityBtnsContainer>
    </RestaurantMenuWrapper>
  )
}

export default memo(Menu)