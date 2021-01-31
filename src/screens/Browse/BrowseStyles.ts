import styled from 'styled-components/native'


export const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
`

export const StyledKeywordAvoidView = styled.KeyboardAvoidingView`
  flex: 1;
`


export const StyledWrapper = styled.View`
  flex: 1;
  margin-top: 30px;
  padding: 20px;
`
export const StyledTopHeaderWrapper = styled.View`
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
`

export const StyledTopHeader = styled.View`
  
`

export const StyledTopHeaderText = styled.Text`
  font-weight: bold;
  font-size: 18px;
`

export const StyledAvatarWrapper = styled.View`

`
export const StyledAvatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 30px;
  position: relative;
  top: -10px;
`


export const StyledTabWrapper = styled.View`
  flex-direction: row;
`

export const StyledTabButton = styled.TouchableOpacity<{ tab: string, isActive: boolean }>`
  padding: 15px 25px;
  padding-left: ${({ tab }) => tab === 'Products' ? '0px;': '15px;'}
  border-bottom-color: ${({ isActive }) => !isActive ? 'gray;': 'green;'}
  border-bottom-width: ${({ isActive }) => !isActive ? '0px;': '5px'}
`


export const StyledTabButnText = styled.Text<{ isActive: boolean }>`
  font-size: 14px;
  color: ${({ isActive }) => !isActive ? 'gray;': 'green;'}
  opacity: 0.8px;
`

export const StyledTabContentWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
`
export const StyledScrollView = styled.ScrollView`
  flex: 1;
`

export const StyledTabCard = styled.View`
  height: 150px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  elevation: 1;
`

export const StyledTabCardImage = styled.Image`
  width: 40px;
  height: 40px;
  resize-mode: contain;
`

export const StyledTabCardHeader = styled.Text`
  margin-top: 5px;
  font-size: 16px;
`

export const StyledTabCardSubHeader = styled.Text`
  font-size: 10px;
  opacity: 0.7;
`

export const StyledTabCardButton = styled.TouchableOpacity`
  width: 50%;
`

export const CardShadowStyles = {
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.5,
  shadowRadius: 2,
  elevation: 2,
}




