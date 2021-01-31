import styled from 'styled-components/native'
import { TouchableHighlight } from 'react-native'




export const StyledWrapper = styled.View`
  background-color: papayawhip;
`

export const StyledContainer = styled.Text`
  color: palevioletred;
  flex: 1;
`

export const StyledFormGroup = styled.View`
  margin: 10px;
`

export const StyledFormWrapper = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 10px;
  border-color: red;
  border-width: 1px;
`

export const StyledFormContainer = styled.View`
  flex: 1;
`

export const StyledSubmitButton = styled.Button`
  border-color: red;
  border-width: 2px;
`

export const StyledErrorMessage = styled.Text`
  padding: 5px 0;
`

export const StyledTextInput = styled.TextInput`
  border-radius: 0;
  border-bottom-width: 1px;
  border-bottom-color: gray;
  padding: 20px 0;
`
export const StyledLabel = styled.Text`
  font-weight: bold;
  opacity: 0.9;
  font-size: 12px;
`

export const StyledInputWrapper = styled.View`
  flex-direction: column;
`

export const StyledHeaderWrapper = styled.View`
  margin-top: 30px;
  align-items: flex-start;
  flex: 1;
`

export const StyledHeader = styled.Text`
  font-size: 24px;
`


export const StyledForgotPasswordWrapper = styled.View`
  align-items: center;
`

export const StyledForgotPassword = styled.Text`
  font-size: 13px;
  text-decoration-line: underline;
`

export const StyledTouchableOpacity = styled.TouchableOpacity`
  align-items: center;
`

export const StyledTouchableButton = styled.TouchableOpacity`
  background-color: green;
  align-items: center;
  padding: 15px;
  border-radius: 5px;
`

export const StyledButtonText = styled.Text`
  font-weight: bold;
  color: white;

`

export const SignInStyles = {
  signIn: {
    flex: 1
  }
}