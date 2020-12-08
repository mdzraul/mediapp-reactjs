import React, { useState, useEffect } from 'react';
import {Platform,StyleSheet,View,Animated, Text,SafeAreaView,StatusBar,ImageBackground,Image,Dimensions,KeyboardAvoidingView,NativeModules,Alert,Button} from 'react-native'
import { HelperText, TextInput } from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';
import * as axios from 'react-native-axios';
import Environment from '../../utils/Environment'
import helper from '../../utils/HelperMethods'
import service from '../../utils/ServiceURL'
import getParams from '../../utils/ServiceParams'
import CustomButton from '../../components/ButtonPrimaryColor';
import GradientButton from '../../components/GradientButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';//Images FontAwesome
import colors from '../../utils/colors';

import AES from '../../utils/AES'
//import Circle from './Circle';
//import Diamond from '../../components/loadingDaimon';
//import Quadrilateral from './Quadrilateral';
//import Square from './Square';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function LoginForm (props){

const [userlogin, setuserlogin] = useState(false)
const [userRegister, setuserRegister] = useState(false)
const [uservalidEmail, setuservalidEmail] = useState(false)
const [user, setuser] = useState("")
const [password, setpassword] = useState("")
const [params, setparams] = useState(null)

const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0


useEffect(() => {
  //callwspostlogin('navecho2001@gmail.com', '12345');
  if (uservalidEmail && password.length > 4) {
    //var paramLogin = "e_mail="+ user +"&password="+ password +"&app_id=2&pushtoken=";
    //   if (Platform.OS === 'ios') {
    //     NativeModules.RNEncryptAES.encryptAES(getParams.param_login(user,password),Environment.KEY_SECRET, (encryptNative) => {
    //       console.log('Encrypt',encryptNative);
    //       setparams(encryptNative)
    //     });
    //   }else{
    //    NativeModules.ToastExample.EncryptAES(getParams.param_login(user,password),Environment.KEY_SECRET,
    //    (err)=>{console.log(err)},
    //    encryptNative=>{
    //     console.log('Encrypt',encryptNative);
    //       setparams(encryptNative)
    //    })
    //   }
    AES.encrypt(getParams.param_login(user, password))
      .then((encryptParams) => {
        setparams(encryptParams);
      })
      .catch((err) => console.log('error:' + err));
  }

}, [user,password,uservalidEmail]);

const onPress = () => {
  Alert.alert("Hola ...")
  callwspostlogin(params)
}

const callwspostlogin = (params) => {
  axios.post(
    service.LOGIN,
    params,
  )
  .then(function (response) {

    if (Platform.OS === 'ios') {
        NativeModules.RNEncryptAES.decryptAES(response.data,Environment.KEY_SECRET,(responseNative) => {
          console.log('Decrypt',responseNative);
        });
    }else{
      NativeModules.ToastExample.DecryptAES(response.data,Environment.KEY_SECRET,
      (err)=>{console.log(err)},
      decryptNative=>{
       console.log('Decrypt',decryptNative);
      })
    }
  })
  .catch(function (error) {
    console.log(error);
  });
};

  return (
    <>
    {/* <KeyboardAvoidingView
        style={{flexstart: 1}}
        keyboardVerticalOffset={13} //Desplazamiento vertical del teclado
        behavior={'padding'}>*/ }
    <KeyboardAvoidingView
        style={{flexstart: 1}}
        behavior="position"
        keyboardVerticalOffset={50} //Modificacion KeyBoardAvoiding
     // keyboardVerticalOffset={keyboardVerticalOffset}
      >




        <View style={styles.container}>

         <FontAwesome 
           style={{
           position: 'absolute',
           top: 35,
          right: 300,
          color:'#4682B4',
         }}
          name="envelope"
          color={colors.text}
          size={15}
         />

          <TextInput style={styles.TextInput}
            label="Correo"
            onChangeText={(text) => {
              setuser(text);
              if (helper.validateEmail(text)) {
                setuservalidEmail(true);
              } else {
                setuservalidEmail(false);
              }
            }}
          />

          {!uservalidEmail && user.length > 3 ? (
            <HelperText type="error">
              {' '}
              Email invalido , verifica tu email
            </HelperText>
          ) : null}
           
           <FontAwesome 
           style={{
           position: 'absolute',
           color:'#4682B4',
           top: 120,
          right: 300,
         }}
          name="lock"
          color={colors.text}
          size={20}
         />

          <TextInput
            label="Contraseña"
            style={styles.TextInput}
            onChangeText={(text) => {
              setpassword(text);
            }}
          />
          
          {password.length > 1 && password.length < 4 ? (
            <HelperText type="error">
              {' '}
              Contraseña tiene que tener 5 caracteres
            </HelperText>
          ) : null}
            
            {
              
          <View style={styles.containerbutton}>
             <CustomButton text="Ingresar" bordered size="small" onPress={onPress} /> 
            </View>  }
             
      

          {/* <View style={{flex: 5, flexDirection: 'row',justifyContent: 'space-between'}}>
          <View style={{width: '50%', height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: '50%', height: 50, backgroundColor: 'skyblue'}} />
          </View> */}
        </View>
   </KeyboardAvoidingView>

    </>
  );
}

const styles =StyleSheet.create({
  container:{
    marginLeft:wp('8%'),
    marginRight:wp('8%'),
  },
  TextInput:{
    margin:10,
    paddingLeft: 20,
    borderColor: 'transparent', 
    backgroundColor:'transparent', 
   // borderColor: 'white', 
   // backgroundColor:'white', 
    borderWidth: 1,
  },
  containerbutton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
}) 