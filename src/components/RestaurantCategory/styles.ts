import styled from 'styled-components/native'

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

export const StyledCategoryText = styled.Text<{ isSelected: boolean }>`
  font-size: 11px;
  color: ${({ isSelected }) => isSelected ? 'white;': 'black;' } 
  font-weight: bold;
`