import React from 'react'
import { View, Text } from 'react-native'
import GlobalStyles from 'src/global.styles'
import { StyledSafeAreaView } from './HomeStyles'

const Home = () => {
  return (
    <StyledSafeAreaView style={GlobalStyles.adroidSafeArea}>
      <View>
        <Text>
          Home screen!
        </Text>
      </View>
    </StyledSafeAreaView>
  )
}

export default Home