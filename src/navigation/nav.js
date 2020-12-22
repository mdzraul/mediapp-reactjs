//npm install @react-navigation/drawer //reciente
//npm install @react-navigation/native //reciente
//npm install @react-navigation/stack //reciente
//npm add react-native-reanimated@alpha //reciente
//npm add react-native-screens //reciente
//npm install react-native-safe-area-context //reciente
//npm i react-native-floating-action --save //reciente

import React, { Component } from 'react';
import colors from '../../src/utils/colors';
import {Platform, Image,TouchableOpacity,Alert,StyleSheet, View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import CustomButton from '../../src/components/ButtonPrimaryColor';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';//reciente
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { FloatingAction } from "react-native-floating-action";//reciente
import { Tooltip} from 'react-native-elements';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />


function HomeScreen({ navigation }) {
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.title} >¡Bienvenidos a MediApp!</Text>
      <Text style={styles.user}>Serch</Text>
          <View style={styles.containerbutton}>
             <CustomButton text="Iniciar ahora" bordered size="small" onPress={() => navigation.navigate('Configuración')}/> 
          </View>
    </View>
  );
}

function ConfiguracionScreen({ navigation }) {
 

    return (

        

      <View style={styles.container}>
        <Text style={styles.title2} >¡Necesitamos conocer algunos datos!</Text>

        
       
        {/*
        <Button
          title="Configuracion"
          onPress={() => navigation.push('Configuracion')}
        />
        <Button title="Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Back" onPress={() => navigation.goBack()} />
        <Button
          title="Volver a primera pantalla"
          onPress={() => navigation.popToTop()}
    />*/}
  
  <Card style={styles.card}>
    <Card.Content>
         <FontAwesome 
           style={{
           position: 'absolute',top: 20,right: 255,
          color:'#4682B4',  }}
          name="envelope"
          color={colors.text}
          size={50}
         />
      <Title style={{position: 'absolute',top:5,right: 130}}>Parentescos</Title>
      <Paragraph style={{left: 25,top:20,textAlign:'justify'}}>Añade el telefono de 2 parentescos en caso de alguna emergencia</Paragraph>
    </Card.Content>
  </Card>
 <Text></Text>
  <Card style={styles.card}>
    <Card.Content>
         <FontAwesome 
           style={{
           position: 'absolute',top: 20,right: 255,
          color:'#4682B4',  }}
          name="envelope"
          color={colors.text}
          size={50}
         />
      <Title style={{position: 'absolute',top:5,right: 30}}>Información Importante</Title>
      <Paragraph style={{left: 25,top:20,textAlign:'justify'}}>Flujo o informativos en caso de emergencia</Paragraph>
    </Card.Content>
  </Card>
<Text></Text>
<Card style={styles.card}>
    <Card.Content>
         <FontAwesome 
           style={{
           position: 'absolute',top: 20,right: 255,
          color:'#4682B4',  }}
          name="envelope"
          color={colors.text}
          size={50}
         />
      <Title style={{position: 'absolute',top:5,right:70}}>Respuesta en Email</Title>
      <Paragraph style={{left: 25,top:20,textAlign:'justify'}}>Te llegará un correo mencionando el detalle que hacer en caso de emergencia al familiar de contacto.</Paragraph>
    </Card.Content>
  </Card>
 <Text></Text>
  <Card style={styles.card}>
    <Card.Content>
         <FontAwesome 
           style={{
           position: 'absolute',top: 20,right: 255,
          color:'#4682B4',  }}
          name="envelope"
          color={colors.text}
          size={50}
         />
      <Title style={{position: 'absolute',top:5,right:0}}>¡No te pierdas de mensajes!</Title>
      <Paragraph style={{left: 25,top:20,textAlign:'justify'}}>Añade el telefono de 2 parentescos en caso de alguna emergencia</Paragraph>
    </Card.Content>
  </Card>  
  <Text></Text>
  <Text></Text>
  <Text></Text>
 {/*FloatingActionButton*/}
    {/*  <View style={styles.cont}>
         <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle} >
         <Image source={require('../../assets/svg/cardiologia.png')}  style={styles.FloatingButtonStyle} />
         </TouchableOpacity>
           </View>*/}
 
             <Tooltip popover={<Text>¿Tienes una emergencia?</Text>}>
                <Text >Tooltip</Text>
             </Tooltip>
      </View>

      
    );
  }

  
  
  const Stack = createStackNavigator();
  
 export default function AppNav() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }}/>
            <Stack.Screen name="Configuración" component={ConfiguracionScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }


  const styles =StyleSheet.create({
    container:{
        marginLeft:wp('5%'),
        marginRight:wp('5%'),
    },

    cont: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "#e5e5e5"
      },
    
    title:{
        fontWeight: 'bold',
        fontSize: 25,
        textAlign:'center',
        padding:30,
    },

    title2:{
        fontWeight: 'bold',
        fontSize: 25,
        textAlign:'center',
        padding:30,
    },

    user:{
        
        fontSize: 25,
        textAlign:'center',
        color:'#A6ACAF',
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
        paddingTop:350,
      },

      card: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:20,
        elevation:5,
        padding:10,
        paddingLeft:35,
        paddingRight:35,
        },

       
          TouchableOpacityStyle: {
            position: 'absolute',
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            right: 30,
            bottom: 30,
          },
          FloatingButtonStyle: {
            width: 50,
            height: 50,
          },

      
   
  }) 
