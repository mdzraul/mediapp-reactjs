import React ,{useRef,useState} from 'react'
import {NativeModules, View, Text, StyleSheet,Image,StatusBar } from 'react-native'
import {useNavigation} from "@react-navigation/native"
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import {Modal} from 'react-native-paper';

import * as axios from 'react-native-axios';

import Spinner from 'react-native-loading-spinner-overlay';


/// IMPORT HELPER
import AES from '../../utils/AES'
import service from '../../utils/ServiceURL'
import Color from '../../utils/colors'

///// IMPORT MODULES
import LoginForm from "./LoginAutForm"
 
///// IMPORT ASSETS
import HeaderMediapp from '../../../assets/mediapp'
import Agend  from '../../../assets/agend'

const containerStyle = {backgroundColor: 'white', padding: 20, margin:20};
export default function login() {

const navigation = useNavigation()
const toastRef =useRef()


const [responselogin, setresponselogin] = useState('')


const [spinner, setspinner] = useState(false)
const [visible, setVisible] = useState(false);

////// PETICION AL WS LOGIN
const callwspostlogin = (params) => {
    setspinner(true)

    axios.post(
      service.LOGIN,
      params,
    )
    .then(function (response) {
      setspinner(false)
        console.log('API Decrypt response',response.data);
         setresponselogin(AES.decrypt(response.data))
         showModal()
    //   if (Platform.OS === 'ios') {
    //       NativeModules.RNEncryptAES.decryptAES(response.data,Environment.KEY_SECRET,(responseNative) => {
    //         console.log('Decrypt',responseNative);
    //         setresponselogin(responseNative)
    //         showModal()
    //       });
    //   }else{
    //     NativeModules.ToastExample.DecryptAES(response.data,Environment.KEY_SECRET,
    //     (err)=>{console.log(err)},
    //     decryptNative=>{
    //      console.log('Decrypt',decryptNative);
    //      setresponselogin(decryptNative)
    //      showModal()
    //     })
    //   }
    })
    .catch(function (error) {
      console.log(error);
    });
  };


/////// NAVEGACION DE REGISTRO
const register = () =>{
   navigation.navigate(register)
}
const recoveryPassword = () =>{
    navigation.navigate('restore_password', {
      itemId: 86,
      otherParam: 'anything you want here',
    });
 }

const showModal = () => setVisible(true);
const hideModal = () => setVisible(false);

    return (
      <View style={styles.container}>
        <Spinner
          visible={spinner}
          textContent={''}
          textStyle={styles.spinnerTextStyle}
        />
       
        <HeaderMediapp width={wp('100%')} height={292}  />
      
        {/* <Agend width={50} height={50}  style={styles.containericon}/> */}
       
        <LoginForm callws={callwspostlogin} register={register} recoveryPassword={recoveryPassword} />

        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
        <Text>{responselogin}</Text>
        </Modal>
      </View>
    );
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Color.WHITE_COLOR,
    },
    containericon:{
      marginLeft:50,
      marginRight:50,
    }
})