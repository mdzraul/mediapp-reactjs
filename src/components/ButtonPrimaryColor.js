import React from 'react'
import { Text, View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import colors from '../../src/utils/colors'
import LinearGradient from 'react-native-linear-gradient';

const width = Dimensions.get('window').width


const Button = ({ text, onPress, type = 'filled', bordered = false, size = 'large' }) => {
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
      paddingVertical: 8,
      width: btnSize,
      height: 30,
      borderRadius: btnBorderRadius,
      marginTop: 30,
      marginBottom: 10,
    }
  
    const textCommonStyle = {
      color: btnTextColor,
      fontSize: 18,
     // textTransform: 'uppercase',
      textAlign: 'center',
      fontWeight: 'bold'
    }
  
    const border = type === 'outlined' && { borderColor: '#e7e7e7', borderWidth: 2 }
  
    return (
     
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        
        <View style={[containerCommonStyle, border]}>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1.5, y: 0}} colors={['#4682B4', '#87CEEB']} style={styles.linearGradient}>
          <Text style={[textCommonStyle]}> {text} </Text>
         </LinearGradient>
        </View>
     
      </TouchableOpacity>
     
    )
  }
  
  // Later on in your styles..
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    padding:25,
    paddingLeft: 40,  // Relleno izquierdo  boton 
    paddingRight: 40, // Relleno derecho boton
    borderRadius: 50,
    height: 40,
    justifyContent: 'center',
    textAlignVertical:'center',
  //  transform: [{ rotate: '90deg'}] rota boton
    width: '100%', 
    height: '100%',
    opacity: 0.95, 
    alignItems: 'center' ,
  },

});
  
  export default Button