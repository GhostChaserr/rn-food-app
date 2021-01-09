import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from 'src/screens/Home'
import SignUp from 'src/screens/SignUp'
import SignIn from 'src/screens/SignIn'
import Welcome from 'src/screens/Welcome'

const Stack = createStackNavigator()

function Navigators() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen 
          options={{
            headerShown: false
          }}
          name="Welcome" 
          component={Welcome} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigators