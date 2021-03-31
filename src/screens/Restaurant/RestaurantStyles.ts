import { Dimensions } from 'react-native'
import { COLORS, FONTS } from 'src/constants/theme'
import styled from 'styled-components/native'

const { width, height } = Dimensions.get('window')

// border-width: 2px;
// border-color: red;

export const StyledFoodInfoWrapper = styled.View`
  margin-top: 20px;
  position: relative;
`
