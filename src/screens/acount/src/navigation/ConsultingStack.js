import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"

///// IMPORTANDO OPCION DE COLORES
import Color from "./../utils/colors"

//// IMPORTANDO PANTALLAS DE SCREEN CONSULTORIO
import Consulting from "./../screens/consulting/consulting"
import ContactConsulting from "./../screens/consulting/contactconsulting"
import DetailConsulting from "./../screens/consulting/detailconsulting"
import MessageConsultin from "./../screens/consulting/messageconsulting"



const Stack = createStackNavigator()


export default function ConsultingStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          component={Consulting}
          name={'Consultorio'}
          options={{
              title:"Consutorio",
              headerStyle:{ backgroundColor:Color.PRIMARY_COLOR },
              headerTintColor:Color.WHITE_COLOR
            }}
        />

        <Stack.Screen
          component={ContactConsulting}
          name={'Contacto de consultorio'}
          options={{headerShown: false}}
        />

        <Stack.Screen
          component={DetailConsulting}
          name={'Detalle de Consultorio'}
          options={{headerShown: false}}
        />

        <Stack.Screen
          component={MessageConsultin}
          name={'Mensajes de Consultorio'}
          options={{headerShown: false}}
        />

      </Stack.Navigator>
    );
}
