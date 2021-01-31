import React from "react"
import { BottomTabBar } from '@react-navigation/bottom-tabs'
import { isIphoneX } from "react-native-iphone-x-helper"
import { View } from 'react-native'

const ModifiedTabBar = ((props: any) => {
  if (isIphoneX()) {
    return (
      <View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 30
          }}
        ></View>
        <BottomTabBar {...props.props} />
      </View>
    )
  } else {
    return <BottomTabBar {...props.props} />
  }
})

export default ModifiedTabBar