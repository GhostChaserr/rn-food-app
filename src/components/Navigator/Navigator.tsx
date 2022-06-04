import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import BottomNavigator from './BottomNavigator'
import Restaurant from 'src/screens/Restaurant'

export const APP_SCREENS = {
  RESTAURANT: 'RESTAURANT',
  HOME: 'HOME'
}

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
          name={APP_SCREENS.HOME}
          component={BottomNavigator} 
        />
        <Stack.Screen 
          options={{ headerShown: false }}
          name={APP_SCREENS.RESTAURANT} 
          component={Restaurant} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigators