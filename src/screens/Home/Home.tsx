import React from 'react'
import { View, Text, Button } from 'react-native'

const Home = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>App Screen!</Text>
      <View>
        <Button
          title="Go to Sign Up"
          onPress={() => navigation.navigate('SignUp')}
        />
        <Button
          title="Go to Sign In"
          onPress={() => navigation.navigate('SignIn')}
        />
      </View>
    </View>
  )
}

export default Home
