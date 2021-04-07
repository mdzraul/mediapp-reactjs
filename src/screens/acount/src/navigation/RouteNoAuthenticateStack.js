import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import {NavigationContainer} from "@react-navigation/native"


//// IMPORTANDO PANTALLAS DE SCREEN ACOUNT
import LogIn from "../screens/acount/Login"
import Register from "../screens/acount/Register"
import RestorePassword from "../screens/acount/RestorePassword"

///// IMPORTANDO COMPONENTES DE HEADER
import HeaderNavigation from '../components/HeaderNavigation'
import HeaderNavigationLeft from '../components/HeaderLeft'

///// IMPORTANDO COLOR
import Color from "../utils/colors"



const Stack = createStackNavigator()
export default function RouteNoAutenticateStack() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="login"
          headerMode="screen" //headerMode={false}
          screenOptions={{
            headerTintColor: Color.WHITE_COLOR,
            headerStyle: {backgroundColor: Color.PRIMARY_COLOR},
          }}>
          <Stack.Screen
            component={LogIn}
            name="login"
            options={({navigation}) => ({
              headerShown: false,
            })}
          />
          <Stack.Screen
            component={Register}
            name="register"
            options={({navigation}) => ({
              headerLeft: () => (
                <HeaderNavigationLeft
                  navigator={navigation}
                  color={Color.SECONDARY_COLOR}
                />
              ),
              headerTitle: () => (
                <HeaderNavigation
                  navigation={navigation}
                  titleNavigation="Registro"
                />
              ),
              headerStyle: {
                backgroundColor: Color.WHITE_COLOR,
              },
            })}
          />
          <Stack.Screen
            component={RestorePassword }
            name="restore_password"
            options={({navigation}) => ({
              headerLeft: () => (
                <HeaderNavigationLeft
                  navigator={navigation}
                  color={Color.WHITE_COLOR}
                />
              ),
              headerShown: true,
              headerTransparent: true,
              headerTintColor: 'transparent',
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

