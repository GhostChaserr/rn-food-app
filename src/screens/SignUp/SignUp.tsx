import React from 'react'
import { Button, Text, View } from 'react-native'

const SignUp = ({ navigation }: any) => {
  return (
    <View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>App Screen!</Text>
        <View>
          <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </View>
    </View>
  )
}

export default SignUp
