import React, { useState } from 'react'
import { SafeAreaView, KeyboardAvoidingView } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { SignInFormData } from './SignInTypes'
import { Input, Text } from 'react-native-elements'

import {
  StyledFormGroup,
  StyledFormWrapper,
  StyledSubmitButton,
  SignInStyles,
  StyledErrorMessage
} from './SignInStyles'

const SignIn = () => {
  const { control, handleSubmit, errors, setError, } = useForm<SignInFormData>()
  const [fieldErrors, setFieldErrors] = useState({ emailValid: true, passwordValid: true })

  const clearErrors = () => setTimeout(() => setFieldErrors({ emailValid: true, passwordValid: true }), 2000)
  const onSubmit = ({ email, password }: SignInFormData) => {
    console.log({ email, password })

    // Dynamic validation
    setError('email',{ message: 'imail not valid'})
    setFieldErrors({ ...fieldErrors, emailValid: false})
    clearErrors()
  }

  return (
    <SafeAreaView style={SignInStyles.signIn}>
      <KeyboardAvoidingView style={SignInStyles.signIn}>
        <StyledFormWrapper>
          <StyledFormGroup>
            <Controller
              control={control}
              render={({ onBlur, onChange, value }) => (
                <Input
                  label='Email'
                  onChangeText={(text: string) => onChange(text)}
                  value={value}
                  onBlur={onBlur}
                  placeholder='Enter email'
                />
              )}
              name="email"
              rules={{ required: { value: true, message: 'Email is required' }}}
              defaultValue=''
            />
             {errors.email && <StyledErrorMessage>{errors.email.message}</StyledErrorMessage>}
          </StyledFormGroup>

          <StyledFormGroup>
            <Controller
              control={control}
              render={({ onBlur, onChange, value }) => (
                <Input
                  label='Password'
                  onChangeText={(text: string) => onChange(text)}
                  value={value}
                  onBlur={onBlur}
                  placeholder='Enter password'
                  secureTextEntry={true}
                />
              )}
              name="password"
              defaultValue=''
              rules={{ required: { value: true, message: 'Password is required' }}}
            />
            {errors.password && <StyledErrorMessage>{errors.password.message}</StyledErrorMessage>}
          </StyledFormGroup>

          <StyledFormGroup>
            <StyledSubmitButton title="Login" onPress={handleSubmit(onSubmit)} />
          </StyledFormGroup>
        </StyledFormWrapper>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default SignIn
