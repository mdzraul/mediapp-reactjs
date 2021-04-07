import React from 'react'
import {createStackNavigatior} from "@react-navigation/stack"

///// IMPORTANDO OPCION DE COLORES
import Color from "./../utils/colors"

//// IMPORTANDO PANTALLAS DE SCREEN ACOUNT
import LogIn from "./../screens/acount/Login"


const stack = createStackNavigatior()


export default function AcountStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          component={LogIn}
          name={'LogIn'}
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
