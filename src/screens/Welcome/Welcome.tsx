import React from 'react'
import { View, Text, FlatList, Image, Dimensions } from 'react-native'

const Welcome = ({ navigation }: any) => {
  const handleSignIn = () => navigation.navigate('SignIn')
  const handleSignUp = () => navigation.navigate('Browse')
  return (
    <View>
      <Text>
        Welcome!
      </Text>
    </View>
  )
}

export default Welcome
