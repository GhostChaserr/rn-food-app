import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from 'src/screens/Home'
import BottomTabs from 'src/screens/Home/BottomTabs'
const Stack = createStackNavigator()

function Navigators() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home">
        <Stack.Screen 
          options={{
            headerShown: false
          }}
          name="Home" 
          component={BottomTabs} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigators