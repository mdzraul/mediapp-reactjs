import React from 'react'
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
//import {createDrawerNavigator} from "@react-navigation-drawer"
import {  Icon  } from "react-native-elements"


//// IMPORTANDO STACKS
//import StackConsulting from "../navigation/ConsultingStack"
import StackPerfil from "../navigation/PerfilStack"
import StackFavorites from "../navigation/FavoritesStack"


///// IMPORTANDO COMPONENTE ICONOS DE TABBAR
import Iconhome from "../components/TabIconButton" 


///// IMPORTANDO COLOR
import Color from "../utils/colors"


const Tab = createBottomTabNavigator()
//const Drawer = createDrawerNavigator()

const TabBar = () =>{

    return (
      //   <Tab.Navigator
      //   initialRouteName="Home"
      //   activeColor="red"
      //   inactiveColor={Color.WHITE_COLOR}
      //   activeBackgroundColor={Color.WHITE_COLOR}
      //   inactiveBackgroundColor={Color.PRIMARY_COLOR}
      //   style={{ backgroundColor: Color.PRIMARY_COLOR}}
      //   tabBarOptions={{
      //     style:{
      //       backgroundColor: Color.PRIMARY_COLOR
      //     }
      //   }}
      //   >
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
            activeTintColor: Color.PRIMARY_COLOR,
            inactiveTintColor: Color.SECONDARY_COLOR,
            style: {
              backgroundColor: Color.WHITE_COLOR,
            },
          }}
        screenOptions={({route}) => ({
            tabBarIcon:({color})=> showIcon(route,color)
        })} >

        {/* <Tab.Screen
          component={StackPerfil}
          name="Home"
        /> */}

        <Tab.Screen
          component={StackPerfil}
          name="Home"
          options={{ title:"Home" ,tabBarIcon: ({ tintColor,focused }) => (
            <Iconhome
              focused={focused}
              tintColor={{ tintColor }} />
          ),} }
        />

        <Tab.Screen
          component={StackPerfil}
          name="Perfil"
          options={{title: 'Consultorio'}}
        />

        <Tab.Screen
          component={StackFavorites}
          name="Direcciones"
          options={{title: 'Direcciones'}}
        />

        <Tab.Screen
          component={StackFavorites}
          name="Favoritos"
          options={{title: 'Favoritos'}}
        />
      </Tab.Navigator>
    );

}

function showIcon (route,color) {
    let iconame ="";

    switch (route.name) {
      case 'home':
        iconName = 'firework';
        break;
      case 'Perfil':
        iconName = 'firework';
        break;
      case 'Direcciones':
        iconName = 'firework';
        break;
      case 'Favoritos':
        iconName = 'firework';
        break;
      default:
        break;
    }

    return(
        <Icon type="material-community" name={iconame} size={24} color={color}  />
    )

}


export default function RouteNoAutenticateStack() {
    return (
        <NavigationContainer>
            <TabBar/>
      </NavigationContainer>
    );
}

