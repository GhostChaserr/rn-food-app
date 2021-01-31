import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from 'src/screens/Welcome'


const Stack = createStackNavigator()

function Navigators() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Welcome">
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