import React from 'react'
import {StyleSheet,View,Animated, Text,SafeAreaView,StatusBar,ImageBackground,Image,Dimensions} from 'react-native'
import { HelperText, TextInput } from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';

import colors from '../../utils/colors'
import Environment from '../../../src/utils/Environment'

import CryptoES from 'crypto-es';
import CryptoJS from 'crypto-js' ;



export default function LoginForm (){

// let ciphertext = 'KmMDndrOmL3pOfgN5rb0jTD7hPGKZ4WKv8puCx+isnV3zJOry78HdMMjF7hVLSOCPDgz2EgU1oGjly9zHbwXBwfrjIXjZFVnSf4ijJiEa0sl0alzODMfeIePQuUwWT+DE3uZ7l6thHIsuARMTBtvrZ7gwCZNhqjsUVWOPWih3OKPO7J0TxAkzw5Efzj8VZBcijXBMQDOP5nZQJ3f+iwHFzxYaMdlmeOg1hyvM5J/BYOCXQed/iN3DNMpdIzmMBEQylIHjA0Frbr9DvYM0iuj8CQyYBnBVqywMte0HS+dHGrUJ8xx1hC4+7yepuI2bD26ungv0NixGJ0VV3s8YxRQW/Pax58F9G7lrzzc+ogkFxKZuu2VVJZpfrSJkXX6PSkIBVBvKrkL1I7Feh5hwtGrPz0Iu9cbPNCjYrG9ea0anII='  //CryptoJS.AES.encrypt('Hola mundo rulo', Environment.KEY_SECRET).toString();

// const encrypted = CryptoES.AES.encrypt("Message", Environment.KEY_SECRET);
// //const decrypted = JSON.stringify(CryptoES.AES.decrypt(ciphertext, Environment.KEY_SECRET));
// const decrypted = CryptoES.AES.decrypt(ciphertext, Environment.KEY_SECRET);
// console.log(decrypted); // 'my message'

// // Decrypt
// var plaintext = decrypted.toString(CryptoES.enc.Utf8);
// console.log(plaintext);

//var data = "123456";
//var key  = CryptoJS.enc.Latin1.parse(Environment.KEY_SECRET);
//var iv   = CryptoJS.enc.Latin1.parse(Environment.KEY_SECRET);  
// var encrypted = CryptoJS.AES.encrypt(
//   data,
//   key,
//   {iv:iv,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.ZeroPadding
// });
// console.log('encrypted: ' + encrypted) ;
//var decrypted = CryptoJS.AES.decrypt(ciphertext,key,{iv:iv,padding:CryptoJS.pad.ZeroPadding});
//console.log('decrypted: '+decrypted.toString(CryptoJS.enc.Utf8));

  return (
    <>
          <View style={styles.container}>
            <TextInput label="Correo"  style={styles.TextInput} />
            <TextInput  label="Contraseña"  style={styles.TextInput} />
          </View>
    </>
  );
}

const styles =StyleSheet.create({
  container:{
    marginLeft:wp('8%'),
    marginRight:wp('8%')
  },
  TextInput:{
    margin:10,
    borderColor: 'white', 
    backgroundColor:'white', 
    borderWidth: 1,
  }
}) 