import React from 'react'
import { Dimensions,StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Color from '../utils/colors'

const width = Dimensions.get('window').width

export default function CustomButton({ text, onPress, type = 'filled', bordered = false, size = 'large' }) {

  const large = width / 1.2
  const small = width / 2
  const btnSize = size === 'large' ? large : small
  const btnBgColor = type === 'filled' ? '#1E90FF' : 'transparent'
  const btnTextColor = type === 'filled' ? '#ffffff' : '#6371c2'
  const btnBorderRadius = bordered ? 30 : 5


  const containerCommonStyle = {
    alignItems: 'center',
    justifyContent: 'center',
   // backgroundColor: btnBgColor,
    flexDirection : 'row',
    paddingVertical: 8,
    marginTop: 30,
    marginBottom: 10,
  }

  const textCommonStyle = {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    //textTransform: "uppercase"
  }

  const border = type === 'outlined' && { borderColor: '#e7e7e7', borderWidth: 2 }

    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <View style={[containerCommonStyle, border]}>
          <LinearGradient
            start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}} colors={[Color.PRIMARY_COLOR, Color.SECONDARY_COLOR]} style={styles.appButtonContainer}>
            <Text style={textCommonStyle}>{text}</Text>
          </LinearGradient>
        </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25
  },
});