import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Image } from 'react-native'

import Home from 'src/screens/Home'
import SignUp from 'src/screens/SignUp'
import SignIn from 'src/screens/SignIn'
import Welcome from 'src/screens/Welcome'
import Browse from 'src/screens/Browse'

const HeaderImage = () => {
  return <Image source={require('src/assets/icons/back.png')} />
}

const Stack = createStackNavigator()

function Navigators() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false,
          headerBackImage: HeaderImage,
          headerStyle: {
            elevation: 0,
            borderBottomColor: 'transparent'
          },
          headerRightContainerStyle: {
            alignItems: 'center'
          },
          headerLeftContainerStyle: {
            alignItems: 'center',
            paddingLeft: 20
          },
          headerTransparent: true
        }}
        initialRouteName="Welcome">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen 
          options={{
            headerTitleContainerStyle: {
              display: 'none'
            }
          }}
          name="Browse" component={Browse} 
        />
        <Stack.Screen 
        options={{
           headerBackTitleVisible: false,
           headerTitleContainerStyle: {
             display: 'none'
           }
        }}
        name="SignIn" component={SignIn} 
        />
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