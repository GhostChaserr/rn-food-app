import React from 'react'
import { HeaderProps } from './HeaderTypes'

import {
  StyledHeaderIcon,
  StyledHeaderLocation,
  StyledHeaderLocationText,
  StyledHeaderWrapper,
  StyledTouchableIcon
} from './HeaderStyles'


const Header = ({ leftIcon, rightIcon, centerText, handleLeftIconPress, handleRightIconPress }: HeaderProps) => {
  return (
    <StyledHeaderWrapper>
      <StyledTouchableIcon onPress={handleLeftIconPress}>
        <StyledHeaderIcon source={leftIcon} />
      </StyledTouchableIcon>
      <StyledHeaderLocation>
        <StyledHeaderLocationText>
          {centerText}
        </StyledHeaderLocationText>
      </StyledHeaderLocation>
      <StyledTouchableIcon onPress={handleRightIconPress}>
        <StyledHeaderIcon source={rightIcon} />
      </StyledTouchableIcon>
    </StyledHeaderWrapper>
  )
}

export default Header