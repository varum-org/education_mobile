import { StyleSheet } from 'react-native'
import { colors, fonts, fontsFamily, spacings } from './theme'

const AppStyles = StyleSheet.create({
  baseContainer: {
    flex: 1,
    backgroundColor: colors.aquaHaze
  },
  baseButton: {
    height: 50,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonDisable: {
    backgroundColor: colors.white
  },
  button: {
    backgroundColor: colors.downy
  },
  headerTitleStyle: {
    color: colors.downy,
    fontFamily: fontsFamily.Regular,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: fonts.header6,
    lineHeight: 25
  },
  headerRightButtonStyle: {
    paddingHorizontal: spacings.normal,
    paddingVertical: spacings.xsmall
  },
  headerLeftButtonStyle: {
    paddingHorizontal: spacings.normal,
    paddingVertical: spacings.xsmall
  }
})

export default AppStyles
