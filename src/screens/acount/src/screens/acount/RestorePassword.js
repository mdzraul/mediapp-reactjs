import React ,{useRef,useState,useEffect} from 'react'
import { StyleSheet, View, Text ,Keyboard} from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import * as axios from 'react-native-axios';


//import {Modal,TextInput} from 'react-native-paper';
import { Modal,HelperText, TextInput} from 'react-native-paper';

import Spinner from 'react-native-loading-spinner-overlay';
import Icon from 'react-native-vector-icons/FontAwesome';


/// IMPORT HELPER
import helper from '../../utils/HelperMethods'
import getParams from '../../utils/ServiceParams'
import service from '../../utils/ServiceURL'
import Color from '../../utils/colors'
import AES from '../../utils/AES'


///// IMPORT ASSETS
import HeaderMediapp from '../../../assets/mediapp'


/// IMPORT CUSTOM COMPONENT
import CustomButton from '../../components/CustomButton';

const containerStyle = {backgroundColor: 'white', padding: 20, margin:20};
export default function RestorePassword({ route, navigation }) {

const { otherParam } = route.params;

const [user, setuser] = useState("")
const [uservalidEmail, setuservalidEmail] = useState(false)
const [response, setresponse] = useState('')

const [spinner, setspinner] = useState(false)
const [visible, setVisible] = useState(false);

const onPressRecovery = () => {
    Keyboard.dismiss()
    if(uservalidEmail){
        AES.encrypt(getParams.param_recovery_pass(user))
        .then((encryptParams) => {
          //setparams(encryptParams);
          callwspostrecovery(encryptParams)
        })
        .catch((err) => console.log('error:' + err));
        
      }
  }


  const callwspostrecovery= (params) => {
    setspinner(true)
    axios.post(
      service.RECOVERY_PASSWORD,
      params,
    )
    .then(function (response) {
      setspinner(false)
        console.log('API Decrypt response',response.data);
         setresponse(AES.decrypt(response.data))
         showModal()
    })
    .catch(function (error) {
      console.log(error);
    });
  };


const showModal = () => setVisible(true);
const hideModal = () => setVisible(false);

console.log("PARAMETROS DESDE LOGIN",otherParam)
    return (
      <View style={styles.container}>
        <Spinner
          visible={spinner}
          textContent={''}
          textStyle={styles.spinnerTextStyle}
        />
        <HeaderMediapp width={wp('100%')} height={320} />
        {/* <LoginForm toastRef={toastRef} callws={callwspostpassword} register={register} /> */}
        <TextInput
          style={styles.TextInput}
          label="Usuario"
          left={
            <TextInput.Icon
              name={() => (
                <Icon
                  name={'envelope-o'}
                  size={20}
                  color={Color.SECONDARY_COLOR}
                />
              )}
            />
          }
          onSubmitEditing={onPressRecovery}
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
          <HelperText type="error" style={styles.TextInput}>
            Email invalido , verifica tu email
          </HelperText>
        ) : null}
        <View style={styles.containerbutton}>
          <CustomButton
            text="Recuperar contraseña"
            bordered
            size="small"
            onPress={onPressRecovery}
          />
        </View>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}>
          <Text>{response}</Text> 
        </Modal>
      </View>
    );
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Color.WHITE_COLOR,
    },
    TextInput:{
        marginLeft:wp('8%'),
        marginRight:wp('8%'),
        borderColor: 'white', 
        backgroundColor:'white', 
      }

})