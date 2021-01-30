import styled from 'styled-components/native'
import { Text } from 'react-native-elements'


export const StyledWrapper = styled.View`
  background-color: papayawhip;
`

export const StyledContainer = styled.Text`
  color: palevioletred;
`

export const StyledFormGroup = styled.View`
  margin: 10px;
`

export const StyledFormWrapper = styled.View`
  flex: 1;
  justify-content: flex-end;
`

export const StyledSubmitButton = styled.Button`
  border-color: red;
  border-width: 2px;
`

export const StyledErrorMessage = styled(Text)`
  margin-left: 10px;
`



export const SignInStyles = {
  signIn: {
    flex: 1
  }
}