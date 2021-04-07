import React ,{useState,useEffect,useRef }from 'react'
import { StyleSheet, Text, View ,Button, Alert ,Keyboard } from 'react-native'
import { HelperText, TextInput} from 'react-native-paper';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol,
  } from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/FontAwesome';
import Arrow from "../../../assets/arrow_left"


/// IMPORT CUSTOM COMPONENT
import CustomButton from '../../components/CustomButton';

/// IMPORT HELPER
import helper from '../../utils/HelperMethods'
import getParams from '../../utils/ServiceParams'
import Color from '../../utils/colors'
import AES from '../../utils/AES'
import { colors, Divider } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';



export default function LoginAutForm(props) {

    const [user, setuser] = useState("")
    const [uservalidEmail, setuservalidEmail] = useState(false)
    const [password, setpassword] = useState("")
    const [params, setparams] = useState(null)

    const [onFocusPassword, setonFocusPassword] = useState(false)

    const [secureEntry, setsecureEntry] = useState(true)


    useEffect(() => {
      //callwspostlogin('navecho2001@gmail.com', '12345');
      if (uservalidEmail && password.length > 4) {
        AES.encrypt(getParams.param_login(user, password))
          .then((encryptParams) => {
            setparams(encryptParams);
          })
          .catch((err) => console.log('error:' + err));
      }
    }, [user, password, uservalidEmail]);

    const onPress = () => {
      Keyboard.dismiss()
      if(uservalidEmail && password.length){
            props.callws(params)
        }
    }

    const onPressPassword = () => {
       setsecureEntry(!secureEntry)
    }

    const handleKeyPress = () => {
      setonFocusPassword(true)
   }
    return (
      <View style={styles.container}>
        {/* <TextInput
          style={styles.TextInput}
          label="Correo"
          left={
            <TextInput.Icon
              name="info"  // where <Icon /> is any component from vector-icons or anything else
              onPress={() => {}}
            />


          onSubmitEditing={handleKeyPress}

          } */}
        <TextInput
          style={styles.TextInput}
          label="Usuario"
          left={
            <TextInput.Icon name={() => <Icon name={'envelope-o'} size={20} color={Color.SECONDARY_COLOR} />} />
          }
          onSubmitEditing={() => { secondTextInput.focus(); }}
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
            Email invalido , verifica tu email
          </HelperText>
        ) : null}
        <TextInput
          ref={(input) => { secondTextInput = input; }}
          style={styles.TextInput}
          label="Contraseña"
          autoFocus={true}
          secureTextEntry={secureEntry}
          left={
            <TextInput.Icon name={() => <Icon name={'lock'} size={20} color={Color.SECONDARY_COLOR} />} />
          }
          right={
            <TextInput.Icon
              name={() => <Icon name={secureEntry ? "eye-slash":"eye" } size={20} color={Color.SECONDARY_COLOR} />}
              onPress={onPressPassword}
            />
          }
          onChangeText={(text) => {
            setpassword(text);
          }}
          onSubmitEditing={onPress}
        />
        {password.length > 1 && password.length < 4 ? (
          <HelperText type="error">
            Contraseña tiene que tener 5 caracteres
          </HelperText>
        ) : null}

        <View style={styles.containerbutton}>
          <CustomButton
            text="Ingresar"
            bordered
            size="small"
            onPress={onPress}
          />
        </View>
        <View style={styles.container_register}>
          <Button
            title="¿Aun no tiene cuenta?"kh
            style={styles.item}
            color={Color.BLACK_COLOR}
            textStyle={{color: '#FFFFFF', fontSize: 10}}
          />
          <Button
            title="Registrarme"
            style={styles.item}
            color={Color.PRIMARY_COLOR}
            textStyle={{fontFamily: 'Poppins-Bold'}}
            onPress={() => props.register()}
          />
        </View>
        {/* <View  style={styles.container_btn_social}>
        <Divider  style={styles.divider} />
        <Divider  style={styles.divider} />
        </View> */}
        
        <View style={styles.container_btn_social}>
        <TouchableOpacity style={styles.btn_social_facebook}>
            <Icon  size={24} type="material-community" name="facebook" color={Color.WHITE_COLOR} backgroundColor="transparent"/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn_social_google}>
            <Icon  size={24} type="material-community" name="google" color={Color.WHITE_COLOR} backgroundColor="transparent"/>
          </TouchableOpacity>
        </View>

        <View style={styles.container_register}>
          <Button
            title="¿Olvidaste tu contraseña?"
            style={styles.item}
            color={Color.BLACK_COLOR}
          />
          <Button
            title="Click Aqui"
            style={styles.item}
            color={Color.PRIMARY_COLOR}
            onPress={() => props.recoveryPassword()}
          />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    marginLeft:wp('5%'),
    marginRight:wp('5%'),
  },
  item :{
    width: '50%',
    fontFamily:"Poppins-Bold",
    fontSize:10
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
  container_register: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start' 
  },
  divider:{
    backgroundColor:Color.SECONDARY_COLOR,
    width:"40%"
  },
  container_btn_social:{
    flexDirection:"row",
    justifyContent:"space-around",
    width:"100%",
    marginTop:50,
    marginBottom:30
  },
  btn_social_facebook:{
    backgroundColor:Color.PRIMARY_DARK,
    paddingHorizontal:60,
    paddingVertical:10,
    borderRadius:25
  },
  btn_social_google:{
    backgroundColor:"red",
    paddingHorizontal:60,
    paddingVertical:10,
    borderRadius:25
  }
}); 
