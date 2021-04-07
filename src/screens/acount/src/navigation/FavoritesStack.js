import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"

///// IMPORTANDO OPCION DE COLORES
import Color from "./../utils/colors"

//// IMPORTANDO PANTALLAS DE SCREEN FAVORITOS
import Favorites from "./../screens/Favorites/Favorites"


const Stack = createStackNavigator()


export default function FavoritesStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          component={Favorites}
          name={'Favoritos'}
          options={{
              title:"Favoritos",
              headerStyle:{ backgroundColor:Color.PRIMARY_COLOR },
              headerTintColor:Color.WHITE_COLOR
            }}
        />

     
      </Stack.Navigator>
    );
}
