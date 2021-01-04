 import React, { useState, useEffect } from 'react';
 import {StyleSheet,StatusBar,SafeAreaView, View,Button} from 'react-native'
 import colors from './src/utils/colors'
 import {DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
// /// COMPONENTS
 import Auth from './src/screens/acount/Auth';
import RegisterForm from './src/screens/acount/RegisterForm';//provisional
import NavigationDrawer from './src/navigation/nav';//provisional
import Especialidad from './src/screens/Especialidad';//provisional
import Slider from './src/navigation/Slider'; //provisional
import Permission from './src/navigation/Permissions';//provisional
import SlidingView from 'rn-sliding-view';
//npm install rn-sliding-view --save   //reciente 


/// THEME
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.PRIMARY_DARK,
    accent: colors.SECONDARY_COLOR,
  },
};

export default function App() {
  const [user, setuser] = useState(null);
  
  useEffect(() => {
    return () => {};
  }, []);

  /// Llamada de WS para determinar logueo
  const callWslogin = () => {
    //Result
    // setuser()
  };

  //if (user === undefined) return null



  return (
    <>
    {
      <PaperProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.PRIMARY_COLOR}
        />
   
        <View style={styles.container}>
          {/* {user ? <Text> Estas logueado</Text> : <Auth />} */}
          {/*<RegisterForm/>*/}
          {/* {<NavigationDrawer/>} */}
          {/* { <Especialidad/> } */}
          {<Slider/>}
          {/* {<Permission/>} */}
        </View>
    </PaperProvider>}
    
    </>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: colors.WHITE_COLOR,
  // },
    container: {
     backgroundColor: colors.WHITE_COLOR,
     height:'100%',
     
   },

});
