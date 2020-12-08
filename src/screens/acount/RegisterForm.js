
import React, { useState, useEffect } from 'react';
import {StyleSheet,Text,View,Keyboard,Box,Container,Dimensions} from 'react-native';
import {TextInput } from 'react-native-paper';
import colors from '../../utils/colors';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomButton from '../../components/ButtonPrimaryColor';
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



export default function RegisterForm (){

    const [name, setname] = useState("")
    const [email,setemail] = useState("")
    const [pwd, setpwd] = useState("")
    const [confirmPwd,setconfirmpwd] = useState("")
    const [fecNac, setfecNac] = useState("")
    const [padecimiento,setpadecimiento] = useState("")
    const [alergia, setalergia] = useState("")
    const [sangre,setsangre] = useState("")

return (
     <>

<KeyboardAwareScrollView
    resetScrollToCoords={{ x: 0, y: 0 }}
    contentContainerStyle={styles.container}
    scrollEnabled
  >
        <Text style={styles.title}>Registro</Text>
       
        <View style={styles.container}>
        

         { <FontAwesome 

           style={{
           position: 'absolute',
           top: 30,
          right: 250,
          color:'#4682B4',
         }}
          name="user-o"
          color={colors.text}
          size={15}
         />

        /* <Image
         source={require('./assets/svg/icon_user.svg')}
    style={{
      position: 'absolute',
      width: inputHeight,
      height: inputHeight,
      top: 0,
      right: 0,
    }}
  />*/
         }
         
          <TextInput style={styles.TextInput}
            placeholder="Nombre"
            onChangeText={(text) => {
                setname(text);
            }}
          />

               

         <FontAwesome 

           style={{
           position: 'absolute',
           top: 100,
          right: 250,
          color:'#4682B4',
         }}
          name="envelope"
          color={colors.text}
          size={15}
         />

          <TextInput
           placeholder="Correo"
            style={styles.TextInput}
            onChangeText={(text) => {
                setemail(text);
            }}
          />

          <FontAwesome 

           style={{
           position: 'absolute',
           top: 170,
          right: 250,
          color:'#4682B4',
         }}
          name="lock"
          color={colors.text}
          size={15}
         />

          <TextInput style={styles.TextInput}
            placeholder="Constraseña"
            onChangeText={(text) => {
                setpwd(text);
            }}
          />

          <FontAwesome 
           style={{
           position: 'absolute',
           color:'#4682B4',
           top: 240,
          right: 250,
         }}
          name="lock"
          color={colors.text}
          size={15}
         />

          <TextInput
           placeholder="Confirmar Contraseña"
            style={styles.TextInput}
            onChangeText={(text) => {
                setconfirmpwd(text);
            }}
          />
         
         <FontAwesome 

           style={{
           position: 'absolute',
           top: 315,
          right: 20,
          color:'#4682B4',
         }}
          name="calendar"
          color={colors.text}
          size={15}
         />

          <TextInput style={styles.TextInput}
            placeholder="Fecha de Nacimiento"
            onChangeText={(text) => {
                setfecNac(text);
            }}
          />

          <FontAwesome 

           style={{
           position: 'absolute',
           top: 385,
          right: 20,
          color:'#4682B4',
         }}
          name="search"
          color={colors.text}
          size={15}
         />
          <TextInput
           placeholder="Padecimiento (opcional)"
            style={styles.TextInput}
            onChangeText={(text) => {
                setpadecimiento(text);
            }}
          />

            <FontAwesome 

           style={{
           position: 'absolute',
           top: 455,
          right: 20,
          color:'#4682B4',
         }}
          name="search"
          color={colors.text}
          size={15}
         />

          <TextInput style={styles.TextInput}
            placeholder="Alérgico (opcional) "
            onChangeText={(text) => {
                setalergia(text);
            }}
          />

          <FontAwesome 

           style={{
           position: 'absolute',
           top: 525,
          right: 20,
          color:'#4682B4',
         }}
          name="chevron-down"
          color={colors.text}
          size={15}
         />

          <TextInput
           placeholder="Tipo de Sangre (opcional)"
            style={styles.TextInput}
            onChangeText={(text) => {
                setsangre(text);
            }}
          />

           <View style={styles.containerbutton}>
             <CustomButton text="Registrarse" bordered size="small"/> 
           </View>
          
        </View>

        </KeyboardAwareScrollView>

        </>
  );
}

const styles =StyleSheet.create({
    container:{
        marginLeft:wp('8%'),
        marginRight:wp('8%'),
    },
    
    title:{
        fontWeight: 'bold',
        fontSize: 20,
        textAlign:'center',
        padding:30,
    },

    TextInput:{
      
      borderColor: 'transparent', 
      backgroundColor:'transparent', 
      borderWidth: 1,
      flex: 1,
      paddingLeft: 20,
      marginTop:5,
    },
    containerbutton: {
        alignItems: 'center',
        justifyContent: 'center',
      },
   
  }) 

