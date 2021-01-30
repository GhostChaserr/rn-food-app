import React, { useState } from 'react'
import { SafeAreaView, KeyboardAvoidingView } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { SignInFormData } from './SignInTypes'

import {
  StyledFormGroup,
  StyledFormWrapper,
  StyledFormContainer,
  SignInStyles,
  StyledErrorMessage,
  StyledTextInput,
  StyledLabel,
  StyledInputWrapper,
  StyledHeaderWrapper,
  StyledHeader,
  StyledForgotPassword,
  StyledTouchableOpacity,
  StyledButtonText,
  StyledTouchableButton
} from './SignInStyles'

const SignIn = () => {
  const { control, handleSubmit, errors, setError } = useForm<SignInFormData>()
  const [fieldErrors, setFieldErrors] = useState({
    emailValid: true,
    passwordValid: true
  })

  const clearErrors = () =>
    setTimeout(
      () => setFieldErrors({ emailValid: true, passwordValid: true }),
      2000
    )
  const onSubmit = ({ email, password }: SignInFormData) => {
    console.log({ email, password })

    // Dynamic validation
    setError('email', { message: 'imail not valid' })
    setFieldErrors({ ...fieldErrors, emailValid: false })
    clearErrors()
  }

  return (
    <SafeAreaView style={SignInStyles.signIn}>
      <KeyboardAvoidingView style={SignInStyles.signIn}>
        <StyledFormWrapper>
          <StyledHeaderWrapper>
            <StyledHeader> Login </StyledHeader>
          </StyledHeaderWrapper>

          <StyledFormContainer>
            <StyledFormGroup>
              <Controller
                control={control}
                render={({ onBlur, onChange, value }) => (
                  <StyledInputWrapper>
                    <StyledLabel> Email </StyledLabel>
                    <StyledTextInput
                      onChangeText={(text: string) => onChange(text)}
                      value={value}
                      onBlur={onBlur}
                      placeholder="Enter email"
                    />
                  </StyledInputWrapper>
                )}
                name="email"
                rules={{
                  required: { value: true, message: 'Email is required' }
                }}
                defaultValue=""
              />
              {errors.email && (
                <StyledErrorMessage>{errors.email.message}</StyledErrorMessage>
              )}
            </StyledFormGroup>

            <StyledFormGroup>
              <Controller
                control={control}
                render={({ onBlur, onChange, value }) => (
                  <StyledInputWrapper>
                    <StyledLabel> Password </StyledLabel>
                    <StyledTextInput
                      onChangeText={(text: string) => onChange(text)}
                      value={value}
                      onBlur={onBlur}
                      secureTextEntry={true}
                      placeholder="Enter password"
                    />
                  </StyledInputWrapper>
                )}
                defaultValue=""
                name="password"
                rules={{
                  required: { value: true, message: 'Password is required' }
                }}
              />
              {errors.password && (
                <StyledErrorMessage>
                  {errors.password.message}
                </StyledErrorMessage>
              )}
            </StyledFormGroup>

            <StyledFormGroup>
              <StyledTouchableButton onPress={handleSubmit(onSubmit)}>
                <StyledButtonText> Login </StyledButtonText>
              </StyledTouchableButton>
            </StyledFormGroup>

            <StyledFormGroup>
              <StyledTouchableOpacity>
                <StyledForgotPassword> Forgot password </StyledForgotPassword>
              </StyledTouchableOpacity>
            </StyledFormGroup>
          </StyledFormContainer>
        </StyledFormWrapper>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default SignIn
