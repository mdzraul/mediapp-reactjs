import React ,{useRef,useState,useEffect,Component} from 'react'
import {StyleSheet, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { Modal,HelperText, TextInput} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as axios from 'react-native-axios';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Dropdown } from 'react-native-material-dropdown-v2-fixed';
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'



import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../../utils/colors';

import CustomButton from '../../components/CustomButton';

/// IMPORT HELPER
import helper from '../../utils/HelperMethods'
import getParams from '../../utils/ServiceParams'
import services from '../../utils/ServiceURL';
import AES from '../../utils/AES'
import Color from '../../utils/colors';

///// IMPORT ASSETS
import Woman  from '../../../assets/woman'
import MediappIcon  from '../../../assets/mediapp_icon'
import Icon_men from '../../../assets/men'




import DateTimePickerModal from "react-native-modal-datetime-picker";
import { color } from 'react-native-reanimated';


export default function Register() {

  const firstRender = useRef()

  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [uservalidEmail, setuservalidEmail] = useState(false)
  const [pwd, setpwd] = useState('');
  const [confirmPwd, setconfirmpwd] = useState('');
  const [fecNac, setfecNac] = useState('');
  const [date, setDate] = useState('')
  const [gender, setgender] = useState(0)
  const [padecimiento, setpadecimiento] = useState([]);
  const [alergia, setalergia] = useState('');
  const [listTypeblood, setlistTypevlood] = useState([
    {id : 0 ,item:'O negativo'},
    {id : 1 ,item:'O positivo'},
    {id : 2 ,item:'A negativo'},
    {id : 3 ,item:'A positivo'},
    {id : 4 ,item:'B negativo'},
    {id : 5 ,item:'B positivo'},
    {id : 6 ,item:'AB negativo'},
    {id : 7 ,item:'AB positivo'}
  ]);
  const [Typeblood, setTypeblood] = useState('');
  const [selectedItemsConditionalMedical, setselectedItemsConditionalMedical] = useState([])


   ////// COMPLEMENTOS
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [IsFocused, setIsFocused] = useState(true);
  const [spinner, setspinner] = useState(false)
  const [visible, setVisible] = useState(false);
  const [secureEntry, setsecureEntry] = useState(true)
  const [secureEntryConfirm, setsecureEntryConfirm] = useState(false)


  const [selectedTeam, setSelectedTeam] = useState([])
  const [selectedTeams, setSelectedTeams] = useState([])

  useEffect(() => {

    if (firstRender){
       
      getALLERGIES()

      getMEDICALCONDITIONS()

    }
  

  }, []);


  ///////// VISTA DE CONTRASEÑA
  const onPressPassword = () => {
    setsecureEntry(!secureEntry);
  };
  const onPressPasswordConfirm = () => {
    setsecureEntryConfirm(!secureEntryConfirm);
  };

  ////// TIPO DE SANGRE
  function onChangeTypeBlood() {
    return (val) => setTypeblood(val);
  }

  //// FOCUS FECHA DE NACIMIENTO
  const showDatePicker = () => {
    setIsFocused(!IsFocused);
    if (IsFocused) {
      setDatePickerVisibility(true);
    }
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const onPressGenderWoman = () => {
    setgender(2);
  };

  const onPressGenderMen = () => {
    setgender(1);
  };
  ///// CONFIRMACION DE FECHA DE NACIMIENTO
  const handleConfirm = (date) => {
    // var numero = '3';
    // console.log(numero.padStart(7, "0"))
    let formattedDate = new Date(date);
    let day =String(formattedDate.getDate())
    let mount =String( formattedDate.getMonth()+1)
    let newDate =  formattedDate.getFullYear() + "-" +mount.padStart(2, "0")+ "-" + day.padStart(2, "0")   ;
    setDate(String(newDate)); //// BUSCAR FORMATO PARA FECHA
    hideDatePicker();
  };

  

 const onPressChangedConditionalMedical= selectedItems => {
  setselectedItemsConditionalMedical(selectedItems)
}

 ///// REGISTRO
 const onPressRegister =() => {
   if (name.trim() == '' || name.trim().length == 0) {
     console.log("Error de nombre de usuario")
   } else if (email.trim() == '' || email.trim().length == 0) {
     console.log("Error email")
   } else if (email.trim() == '' || email.trim().length == 0) {// Validation email
    console.log("Error validacion de email") 
   } else if (pwd.trim() == '' || pwd.trim().length == 0) {
    console.log("Error de contraseña")
   } else if (confirmPwd.trim() == '' || confirmPwd.trim().length == 0) {
    console.log("Error de texto en confirmacion de password") 
  } else if (pwd.trim() !== confirmPwd.trim()) {
    console.log("Error de contraseñas no coinciden")
   } else if (gender !== 0) {
   // console.log(gender)
   // console.log("Error de genero")
   }else{
     //// ENVIAR AL SERVICIO
     console.log("Envio de datos")
     AES.encrypt(getParams.param_register())
     .then((encryptParams) => {
       //setparams(encryptParams);
       callwspostrecovery(encryptParams)
     })
     .catch((err) => console.log('error:' + err));

   }

}


 ////// PETICIONES DE SERVICIO
  const getALLERGIES = () => {
    callwspost(services.ALLERGIES,'')
  }

  const getMEDICALCONDITIONS = () => {
    callwspost(services.MEDICALCONDITIONS,'')
  }

  const callwspost= (service,params) => {
    setspinner(true)
    axios.post(
        service,
        params,
    )
    .then(function (response) {
      setspinner(false)
         if(service === services.MEDICALCONDITIONS){
          const temp = JSON.parse(AES.decrypt(response.data))
          let JSONMEDICALCONDITIONS =[]
          temp.catalogo.forEach(_e => {
            JSONMEDICALCONDITIONS.push({id:_e.id,item:_e.description})
          });
          //console.log(JSONMEDICALCONDITIONS)
          setpadecimiento(JSONMEDICALCONDITIONS)
         }
         if(service === services.ALLERGIES){
          const tempAlergies = JSON.parse(AES.decrypt(response.data))
          let JSONALERGIES =[]
          tempAlergies.catalogo.forEach(_e => {
               JSONALERGIES.push({id:_e.id,item:_e.description})
           });
          //console.log(JSONALERGIES)
          setalergia(tempAlergies)
         }
    })
    .catch(function (error) {
      console.log(error);
    });
  };


const showModal = () => setVisible(true);
const hideModal = () => setVisible(false);




function onMultiChange() {
  return (item) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
}

function onChange() {
  return (val) => setSelectedTeam(val)
}

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{x: 0, y: 0}}
      contentContainerStyle={styles.container}
      scrollEnabled>
      <View style={styles.container}>
        <TextInput
          style={styles.TextInput}
          label="Nombre"
          left={
            <TextInput.Icon
              name={() => (
                <Icon name={'user-o'} size={20} color={Color.SECONDARY_COLOR} />
              )}
            />
          }
          onChangeText={(text) => {
            setname(text);
          }}
        />
        {name.length > 3 ? (
          <HelperText type="error" style={styles.TextInput}>
            Ingresa tu nombre
          </HelperText>
        ) : null}

        <TextInput
          style={styles.TextInput}
          label="Correo"
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
          onChangeText={(text) => {
            setemail(text);
            if (helper.validateEmail(text)) {
              setuservalidEmail(true);
            } else {
              setuservalidEmail(false);
            }
          }}
        />
        {!uservalidEmail && email.length > 3 ? (
          <HelperText type="error" style={styles.TextInput}>
            Email invalido , verifica tu email
          </HelperText>
        ) : null}

        <TextInput
          style={styles.TextInput}
          label="Contraseña"
          secureTextEntry={secureEntry}
          left={
            <TextInput.Icon
              name={() => (
                <Icon name={'lock'} size={20} color={Color.SECONDARY_COLOR} />
              )}
            />
          }
          right={
            <TextInput.Icon
              name={() => (
                <Icon
                  name={secureEntry ? 'eye-slash' : 'eye'}
                  size={20}
                  color={Color.SECONDARY_COLOR}
                />
              )}
              onPress={onPressPassword}
            />
          }
          onChangeText={(text) => {
            setpwd(text);
          }}
        />

        <TextInput
          style={styles.TextInput}
          label="Confirmar contraseña"
          secureTextEntry={secureEntryConfirm}
          left={
            <TextInput.Icon
              name={() => (
                <Icon name={'lock'} size={20} color={Color.SECONDARY_COLOR} />
              )}
            />
          }
          right={
            <TextInput.Icon
              name={() => (
                <Icon
                  name={secureEntryConfirm ? 'eye-slash' : 'eye'}
                  size={20}
                  color={Color.SECONDARY_COLOR}
                />
              )}
              onPress={onPressPasswordConfirm}
            />
          }
          onChangeText={(text) => {
            setconfirmpwd(text);
          }}
        />

        <TextInput
          style={styles.TextInput}
          label="Fecha de nacimiento"
          onFocus={showDatePicker}
          value={date}
          right={
            <TextInput.Icon
              name={() => (
                <Icon
                  name={'calendar'}
                  size={20}
                  color={Color.SECONDARY_COLOR}
                />
              )}
            />
          }
        />

       <View style={styles.container_btn_gender}>
        <TouchableOpacity style={styles.containericon} onPress={() => setgender(1)}>
            <Icon_men width={35} height={35} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.containericon} onPress={() => setgender(2)}>
             <Woman width={35} height={35} />
          </TouchableOpacity>
        </View>

        <View style={styles.TextInputSearchBox}>
          <SelectBox
            label="Padecimientos  opcional"
            options={padecimiento}
            selectedValues={selectedTeams}
            onMultiSelect={onMultiChange()}
            onTapClose={onMultiChange()}
            isMulti
          />
        </View>

         {/* <View style={styles.TextInputSearchBox}>
          <SelectBox
            label="Alergias  opcional"
            options={K_OPTIONS}
            hideInputFilter={true}
            selectedValues={selectedTeams}
            onMultiSelect={onMultiChange()}
            onTapClose={onMultiChange()}
            isMulti
            custom={true}
          />
        </View>  */}


        <View style={styles.TextInputSearchBox}>
          <SelectBox
            label="Tipo de sangre  opcional"
            options={listTypeblood}
            value={Typeblood}
            onChange={onChangeTypeBlood()}
            hideInputFilter={true}
            custom
          />
        </View>


        {/* <Dropdown
          style={styles.TextInput}
          icon="chevron-down"
          iconColor={Color.WHITE_COLOR}
          label="Tipo de sangre"
          data={listTypeblood}
          pickerStyle={{borderBottomColor: 'transparent', borderWidth: 0}}
          onChangeText={(text) => {
            console.log('SANGRE', text);
            setTypevlood(text);
          }}
        /> */}


        <CustomButton
          text="Registrarse"
          onPress={onPressRegister}></CustomButton>

        <DateTimePickerModal
          headerTextIOS=""
          locale="es_En" // Use "en_GB" here
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          confirmTextIOS="Confirmar"
          cancelTextIOS="Cancelar"
        />
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE_COLOR,
  },
  TextInput: {
    marginLeft: wp('8%'),
    marginRight: wp('8%'),
    borderColor: 'white',
    backgroundColor: 'white',
  },
  TextInputSearchBox: {
    marginLeft: wp('8%'),
    marginRight: wp('8%'),
    marginTop:wp('4%'),
    marginBottom:wp('3%'),
    borderColor: 'white',
    backgroundColor: 'white',
  },
  container_btn_gender:{
    flexDirection:"row",
    justifyContent:"space-around",
    marginLeft:15,
    marginRight:15,
    width:"90%",
    marginTop:10,
    marginBottom:10
  },
  containericon:{
    paddingVertical:10,
  },
});
