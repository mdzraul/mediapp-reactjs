import React from 'react'
import {createStackNavigatior} from "@react-navigation/stack"

///// IMPORTANDO OPCION DE COLORES
import Color from "./../utils/colors"

//// IMPORTANDO PANTALLAS DE SCREEN ACOUNT MENSAJES DE CONFIRMACION POR TELEFONO
import SendConfirmationPhone from "./../screens/acount/SendconfirmationPhone"
import ConfirmationPhone from "./../screens/acount/ConfirmPhone"




const stack = createStackNavigatior()


export default function ConfirmAcountStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          component={SendConfirmationPhone}
          name={'Envio de confirmacion de telefono'}
          options={{
              title:"",
              headerStyle:{ backgroundColor:Color.PRIMARY_COLOR },
              headerTintColor:Color.WHITE_COLOR
            }}
        />

        <Stack.Screen
          component={ConfirmationPhone}
          name={'Confirmar telefono'}
          options={{
              title:"",
              headerStyle:{ backgroundColor:Color.PRIMARY_COLOR },
              headerTintColor:Color.WHITE_COLOR
            }}
        />

     
      </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})
