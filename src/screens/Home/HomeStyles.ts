import styled from 'styled-components/native'

export const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
`
export const StyledContentWrapper = styled.View`
  flex: 1;
  padding: 20px;
`

export const StyledHeaderWrapper = styled.View`
  justify-content: space-between;
  flex-direction: row;
`

export const StyledTouchableIcon = styled.TouchableOpacity``

export const StyledHeaderIcon = styled.Image`
  width: 20px;
  height: 20px;
  position: relative;
  top: 5px;
`

export const StyledHeaderLocation = styled.View`
  justify-content: center;
  background-color: rgba(0,0,0, 0.1);
  padding: 10px 60px;
  border-radius: 10px;
`

export const StyledHeaderLocationText = styled.Text``

export const StyledHeadingsWrapper = styled.View`
  margin-top: 20px;
  flex-direction: column;
  align-items: flex-start;
`

export const StyledHeadingsHeader = styled.Text`
  font-weight: bold;
  font-size: 36px;
`

export const StyledCategoriesContainer= styled.View`
  margin-top: 10px;
`

export const StyledCategoryButton = styled.TouchableOpacity<{ isSelected: boolean }>`
  padding: 10px;
  padding-bottom: 20px;
  background-color: ${({ isSelected }) => isSelected ? '#FC6D3F;': 'white;' } 
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`

export const StyledCategoryWrapper = styled.View`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 30px;
`

export const StyledCategoryIcon = styled.Image`
  resize-mode: contain;
  width: 35px;
  height: 35px;
`

export const StyledCategoryTextWrapper = styled.View`
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`

export const StyledFlatList = styled.FlatList`
 
`

export const StyledCategoryText = styled.Text<{ isSelected: boolean }>`
  font-size: 11px;
  color: ${({ isSelected }) => isSelected ? 'white;': 'black;' } 
  font-weight: bold;
`

export const StyledRestaurantsFeedWrapper = styled.View`
  margin-top: 10px;
`

