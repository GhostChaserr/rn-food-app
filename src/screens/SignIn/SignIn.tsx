import React from 'react'
import { View, Text, Button } from 'react-native'

const SignIn = ({ navigation }: any) => {
  return (
    <View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>App Screen!</Text>
        <View>
          <Button
            title="Go to SignIn"
            onPress={() => navigation.navigate('SignIn')}
          />
        </View>
      </View>
    </View>
  )
}

export default SignIn
