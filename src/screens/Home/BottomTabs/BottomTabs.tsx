import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { theme, icons } from 'src/constants'

import Home from 'src/screens/Home'

const Tab = createBottomTabNavigator()
const { COLORS } = theme

const BottomTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          left: 0,
          bottom: 0,
          right: 0,
          borderTopWidth: 0,
          backgroundColor: 'transparent',
          elevation: 0
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.cutlery}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary
              }}
            />
          )
        }}
      />

      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.search}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Like"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.like}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="User"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.user}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabs
