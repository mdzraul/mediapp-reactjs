import React from 'react'
import {StyleSheet,View,Animated, Text,SafeAreaView,StatusBar,ImageBackground,Image,Dimensions} from 'react-native'
import colors from './src/utils/colors'
import Environment from './src/utils/Environment'
import {HeaderMediapp} from './assets/logoMediapp'
import logoMedi from './assets/svg/background.svg'
import {Iconuser} from './assets/iconuser'
import Planet from './assets/demo'
import Media from './assets/mediapp'


import CryptoJS from "react-native-crypto-js";


import {DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { HelperText, TextInput } from 'react-native-paper';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.PRIMARY_DARK,
    accent: colors.SECONDARY_COLOR,
  },
};

let dimensions = Dimensions.get("window");
let imageHeight = Math.round((dimensions.width * 9) / 16);
let imageWidth = dimensions.width;

export default function democode (){

// Encrypt
//let ciphertext = 'KmMDndrOmL3pOfgN5rb0jTD7hPGKZ4WKv8puCx+isnV3zJOry78HdMMjF7hVLSOCPDgz2EgU1oGjly9zHbwXBwfrjIXjZFVnSf4ijJiEa0sl0alzODMfeIePQuUwWT+DE3uZ7l6thHIsuARMTBtvrZ7gwCZNhqjsUVWOPWih3OKPO7J0TxAkzw5Efzj8VZBcijXBMQDOP5nZQJ3f+iwHFzxYaMdlmeOg1hyvM5J/BYOCXQed/iN3DNMpdIzmMBEQylIHjA0Frbr9DvYM0iuj8CQyYBnBVqywMte0HS+dHGrUJ8xx1hC4+7yepuI2bD26ungv0NixGJ0VV3s8YxRQW/Pax58F9G7lrzzc+ogkFxKZuu2VVJZpfrSJkXX6PSkIBVBvKrkL1I7Feh5hwtGrPz0Iu9cbPNCjYrG9ea0anII='  //CryptoJS.AES.encrypt('Hola mundo rulo', Environment.KEY_SECRET).toString();
let ciphertext = CryptoJS.AES.encrypt('Hola mundo rulo', Environment.KEY_SECRET).toString();
 
// Decrypt
let bytes  = CryptoJS.AES.decrypt(ciphertext, Environment.KEY_SECRET);
let originalText = bytes.toString(CryptoJS.enc.Utf8);
 
console.log(originalText); // 'my message'
console.log(imageWidth); // 'my message'


//const info2 = CryptoJS.AES.decrypt('KmMDndrOmL3pOfgN5rb0jTD7hPGKZ4WKv8puCx+isnV3zJOry78HdMMjF7hVLSOCPDgz2EgU1oGjly9zHbwXBwfrjIXjZFVnSf4ijJiEa0sl0alzODMfeIePQuUwWT+DE3uZ7l6thHIsuARMTBtvrZ7gwCZNhqjsUVWOPWih3OKPO7J0TxAkzw5Efzj8VZBcijXBMQDOP5nZQJ3f+iwHFzxYaMdlmeOg1hyvM5J/BYOCXQed/iN3DNMpdIzmMBEQylIHjA0Frbr9DvYM0iuj8CQyYBnBVqywMte0HS+dHGrUJ8xx1hC4+7yepuI2bD26ungv0NixGJ0VV3s8YxRQW/Pax58F9G7lrzzc+ogkFxKZuu2VVJZpfrSJkXX6PSkIBVBvKrkL1I7Feh5hwtGrPz0Iu9cbPNCjYrG9ea0anII=', Environment.KEY_SECRET).toString(CryptoJS.enc.Utf8);
//console.log({ info2 });

//const info3 = JSON.parse(info2);
//console.log({ str: info3.str });


  return (
    <>
      <PaperProvider theme={theme}>
        <StatusBar barStyle="light-content" backgroundColor={colors.PRIMARY_COLOR}/>
        <SafeAreaView backgroundColor="blue" style={styles.safeArea} />
        <View style={styles.container}>
          <View style={styles.header}>
             {/* <ImageBackground
              source={require('./assets/backgroundIcons.png')}
              style={styles.imageBackground}>
              <View>
                <Image
                  style={styles.logo}
                  source={require('./assets/logo_mediapp.png')}
                />
              </View>
            </ImageBackground>  */}
           {/* <HeaderMediapp style={{ height: hp('30%'), width: '100%' }}/>  */}
           {/* <HeaderMediapp width={120} height={60} fill={"any color"} /> */}
           <Media  width={wp('100%')} height={450} />
           
          </View>
          <View style={styles.contentLogin}>
            <TextInput label="Correo"  style={styles.TextInput} />
            {/* <HelperText type="error">Campo vacio</HelperText>
            <HelperText type="error">Email invalido , verifica tu email</HelperText> */}

            <Iconuser width={20} height={30}></Iconuser>
            <TextInput  label="Contraseña"  style={styles.TextInput} />
            {/* <HelperText type="error">Campo vacio</HelperText> */}
           
          </View>
          <View style={styles.footer}>
          

            
          </View>
        </View>
      </PaperProvider>
    </>
  );
}

const styles =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.WHITE_COLOR,
    justifyContent:'center'
  },
  header:{
    flex:2,
    height: hp('30%'), // 30% of height device screen
    width: wp('80%')   // 80% of width device screen
  },
  contentLogin:{
    flex:1,
    padding:50
  },
  footer:{
    flex:2,
    padding:20
  },
  logo: {
    resizeMode: 'contain',
    height: 120,
    width: 120
  },
  imageBackground:{
    flex:2,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:colors.PRIMARY_COLOR,
    borderBottomLeftRadius:95,
    borderBottomRightRadius:95
  },
  safeArea:{
    backgroundColor:colors.PRIMARY_COLOR
  },
  TextInput:{
    borderColor: 'white', 
    backgroundColor:'white', 
    borderWidth: 1,
  }
}) 