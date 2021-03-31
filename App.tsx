import React from 'react'
import 'react-native-gesture-handler'
import Navigator from './src/components/Navigator'
import { enableScreens } from 'react-native-screens'
import * as Font from 'expo-font';
enableScreens()

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  }
  // Roboto-regular
  
  async loadFonts() {
    await Font.loadAsync({
      RobotoRegular: require('src/assets/fonts/Roboto-Regular.ttf'),
      RobotoCondensedRegular: require('src/assets/fonts/RobotoCondensed-Regular.ttf'),
      RobotoCondensedLightItalic: require('src/assets/fonts/RobotoCondensed-LightItalic.ttf'),
      RobotoCondensedLight: require('src/assets/fonts/RobotoCondensed-Light.ttf'),
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    // Use the font with the fontFamily property after loading
    if (this.state.fontsLoaded) {
      return (
        <Navigator/>
      );
    } else {
      return null;
    }
  }
}