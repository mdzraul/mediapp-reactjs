 import React, { useState, useEffect } from 'react';
 import {StyleSheet,StatusBar,SafeAreaView, View} from 'react-native'
 import colors from './src/utils/colors'
 import {DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
// /// COMPONENTS
 import Auth from './src/screens/acount/Auth'

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
    
      <PaperProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.PRIMARY_COLOR}
        />
        <View style={styles.container}>
          {user ? <Text> Estas logueado</Text> : <Auth />}
        </View>
      </PaperProvider>
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
