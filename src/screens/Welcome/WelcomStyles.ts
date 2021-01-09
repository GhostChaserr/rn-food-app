import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row'
  },
  headerPrimaryText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold'
  },
  headerSecondaryTextWrapper: {
    marginLeft: 5
  },
  headerSecondaryText: {
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold'
  },
  headerSubHeaderWrapper: {
    alignItems: 'center',
    marginTop: 5,
    opacity: 0.8
  },
  sliderImage: {
    width: width,
    height: height / 2,
    overflow: 'visible'
  },
  buttonsWrapper: {
    flex: 0.8,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  button: {
    width: width / 1.5,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 15,
    marginBottom: 20,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3
  },
  buttonText: {
    fontWeight: 'bold',
    opacity: 0.7
  },
  loginButtonWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  termsOfServiceWrapper: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  termsButton: {
    width,
    alignItems: 'center'
  }
})

export default styles
