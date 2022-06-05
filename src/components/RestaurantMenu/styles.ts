import { Dimensions } from 'react-native'
import { COLORS } from 'src/constants/theme'
import styled from 'styled-components/native'

const { width  } = Dimensions.get('window')

export const RestaurantMenuWrapper  = styled.View`
  align-items: center;
  width: ${width}px;
  flex-direction: column;
`

export const StyledMenuImageWrapper = styled.View`
  width: 100%;
`

export const StyledMenuImage = styled.Image`
  width: 100%;
  height: 350px;
`

export const StyledQuantityBtnsContainer = styled.View`
  position: absolute;
  bottom: 110px;
  width: 100%;
  height: 50px;
  flex-direction: row;
  justify-content: center;
`

export const StyledQuantityBtn = styled.TouchableOpacity<{ position: 'left' | 'right' | 'center' }>`
  width: 50px;
  background-color: ${COLORS.white};
  align-items: center;
  justify-content: center;
  position: relative;
  right: 10px;
  borderTopLeftRadius: ${({ position }) => position === 'left' ? '25px': '0'};
  borderBottomLeftRadius: ${({ position }) => position === 'left' ? '25px': '0'};
  borderTopRightRadius: ${({ position }) => position === 'right' ? '25px': '0'};
  borderBottomRightRadius: ${({ position }) => position === 'right' ? '25px': '0'};
`

export const StyledQuantityBtnText = styled.Text`

`

export const StyledMenuContentWrapper = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
`


export const StyledMenuNameContainer = styled.View`
  text-align: center;
`
export const StyledMenuName = styled.Text`
  font-weight: bold;
  text-align: center;
  font-size: 24px;
`

export const StyledMenuDescriptionContainer = styled.View`
  text-align: center;
`

export const StyledMenuDescription = styled.Text`
  text-align: center;
`

export const StyledContentHeader = styled.Text`
  font-weight: bold;
`