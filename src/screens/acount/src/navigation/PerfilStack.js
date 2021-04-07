import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"

///// IMPORTANDO OPCION DE COLORES
import Color from "./../utils/colors"

//// IMPORTANDO PANTALLAS DE SCREEN CONSULTORIO
import Perfil from "./../screens/profile/profileUser"


const Stack = createStackNavigator()


export default function PerfilStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          component={Perfil}
          name={'Perfil'}
          options={{
              title:"Perfil",
              headerStyle:{ backgroundColor:Color.PRIMARY_COLOR },
              headerTintColor:Color.WHITE_COLOR
            }}
        />

     
      </Stack.Navigator>
    );
}
