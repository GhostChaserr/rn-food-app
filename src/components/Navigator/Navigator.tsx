import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import BottomNavigator from './BottomNavigator'
import Restaurant from 'src/screens/Restaurant'


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
          component={BottomNavigator} 
        />
        <Stack.Screen 
          options={{ headerShown: false }}
          name="Restaurant" 
          component={Restaurant} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigators