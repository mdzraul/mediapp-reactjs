import React, { useState, useEffect } from 'react';
import {Platform,StyleSheet,View,Animated,SafeAreaView,StatusBar,ImageBackground,Image,Dimensions,KeyboardAvoidingView,NativeModules,Alert,Button} from 'react-native'
import { HelperText, TextInput ,Modal,Text} from 'react-native-paper';
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

import AES from '../../utils/AES'

import Spinner from 'react-native-loading-spinner-overlay';

import DemoImg from '../../../assets/arrow_down'
//import DemoImg from '../../../assets/demo'


//import Circle from './Circle';
//import Diamond from '../../components/loadingDaimon';
//import Quadrilateral from './Quadrilateral';
//import Square from './Square';

export default function LoginForm (props){

const [userlogin, setuserlogin] = useState(false)
const [userRegister, setuserRegister] = useState(false)
const [uservalidEmail, setuservalidEmail] = useState(false)
const [user, setuser] = useState("")
const [password, setpassword] = useState("")
const [params, setparams] = useState(null)
const [responselogin, setresponselogin] = useState('')

const [spinner, setspinner] = useState(false)
const [visible, setVisible] = React.useState(false);

const showModal = () => setVisible(true);
const hideModal = () => setVisible(false);
const containerStyle = {backgroundColor: 'white', padding: 20};

const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0


useEffect(() => {
  //callwspostlogin('navecho2001@gmail.com', '12345');
  if (uservalidEmail && password.length > 4) {
    AES.encrypt(getParams.param_login(user, password))
      .then((encryptParams) => {
        setparams(encryptParams);
      })
      .catch((err) => console.log('error:' + err));
  }

}, [user,password,uservalidEmail]);

const onPress = () => {
  setspinner(true)
  callwspostlogin(params)
}

const callwspostlogin = (params) => {
  axios.post(
    service.LOGIN,
    params,
  )
  .then(function (response) {
    setspinner(false)
    if (Platform.OS === 'ios') {
        NativeModules.RNEncryptAES.decryptAES(response.data,Environment.KEY_SECRET,(responseNative) => {
          console.log('Decrypt',responseNative);
          setresponselogin(responseNative)
          showModal()
        });
    }else{
      NativeModules.ToastExample.DecryptAES(response.data,Environment.KEY_SECRET,
      (err)=>{console.log(err)},
      decryptNative=>{
       console.log('Decrypt',decryptNative);
       setresponselogin(decryptNative)
       showModal()
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

        <Spinner
          visible={spinner}
          textContent={''}
          textStyle={styles.spinnerTextStyle}
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
            
            
              
          <View style={styles.containerbutton}>
             <CustomButton text="Ingresar" bordered size="small" onPress={onPress} /> 
            </View>  
             

          {/* <View style={{flex: 5, flexDirection: 'row',justifyContent: 'space-between'}}>
          <View style={{width: '50%', height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: '50%', height: 50, backgroundColor: 'skyblue'}} />
          </View> */}

        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
        <Text>{responselogin}</Text>
        </Modal>
        
        </View>

   </KeyboardAvoidingView>

    </>
  );
}

const styles =StyleSheet.create({
  container:{
    flex: 1,
    marginLeft:wp('8%'),
    marginRight:wp('8%'),
  },
  spinnerTextStyle: {
    color: '#FFF'
  },
  TextInput:{
    margin:8,
    borderColor: 'white', 
    backgroundColor:'white', 
  },
  containerbutton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
}) 