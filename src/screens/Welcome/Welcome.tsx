import React from 'react'
import { View, Text, FlatList, Image, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './WelcomStyles'

const {
  container,
  headerContainer,
  headerPrimaryText,
  headerSecondaryTextWrapper,
  headerSecondaryText,
  headerSubHeaderWrapper,
  button,
  loginButtonWrapper,
  termsOfServiceWrapper,
  termsButton,
  buttonText
} = styles

const illustrations = [
  { id: 1, source: require('src/assets/images/illustration_1.png') },
  { id: 2, source: require('src/assets/images/illustration_2.png') },
  { id: 3, source: require('src/assets/images/illustration_3.png') }
]

const { width, height } = Dimensions.get('window')

const Welcome = ({ navigation }: any) => {
  return (
    <SafeAreaView style={container}>
      <View style={headerContainer}>
        <Text style={headerPrimaryText}>Your home.</Text>
        <View style={headerSecondaryTextWrapper}>
          <Text style={headerSecondaryText}>Greener.</Text>
        </View>
      </View>

      <View style={headerSubHeaderWrapper}>
        <Text>Enjoy experience.</Text>
      </View>

      <View>
        <FlatList
          pagingEnabled
          horizontal
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          snapToAlignment="center"
          data={illustrations}
          keyExtractor={(item: any) => `${item.id}`}
          renderItem={({ item }) => {
            return (
              <Image
                source={item.source}
                resizeMode="contain"
                style={{ width, height: height / 1.5, overflow: 'visible' }}
              />
            )
          }}
        />
      </View>

      <View style={loginButtonWrapper}>
        <TouchableOpacity style={button}>
          <Text style={buttonText}> Signin </Text>
        </TouchableOpacity>
        <TouchableOpacity style={button}>
          <Text style={buttonText}> Signup </Text>
        </TouchableOpacity>
      </View>

      <View style={termsOfServiceWrapper}>
        <TouchableOpacity style={termsButton}>
          <Text>Terms of service</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

{
  /* <Text>Welcom screen!</Text>
<View>
  <Button
    title="Go to Details"
    onPress={() => navigation.navigate('Home')}
  />
</View> */
}

export default Welcome
