import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Image } from 'react-native'

import Home from 'src/screens/Home'
import SignUp from 'src/screens/SignUp'
import SignIn from 'src/screens/SignIn'
import Welcome from 'src/screens/Welcome'

const HeaderImage = () => {
  return <Image source={require('src/assets/icons/back.png')} />
}

const Stack = createStackNavigator()

function Navigators() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: true,
          headerBackImage: HeaderImage,
          headerStyle: {
            height: 80,
            elevation: 0,
            borderBottomColor: 'transparent'
          },
          headerBackTitleVisible: false,
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