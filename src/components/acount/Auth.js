import React, { useState, useEffect } from 'react';
import {StyleSheet,View,Animated, Text,SafeAreaView,StatusBar,ImageBackground,Image,Dimensions} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { HelperText, TextInput } from 'react-native-paper';

// RESOURCES
import colors from '../../utils/colors'
import HeaderMediapp from '../../../assets/mediapp'
import LoginForm from './LoginForm'


export default function Auth(props) {

const [userlogin, setuserlogin] = useState(false)
const [userRegister, setuserRegister] = useState(false)


  return (
    <>
        <View style={styles.container}>
          <View style={styles.headerlogo}>
           <HeaderMediapp  width={wp('100%')} height={340} />

           {userlogin ? <Text>...</Text>:<LoginForm/>}

          </View>
        </View>
    </>
  );
}

const styles =StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    backgroundColor:colors.WHITE_COLOR,
  },
  headerlogo:{
    height: hp('30%'), // 30% of height device screen
    width: wp('100%'),   // 80% of width device screen
  },
 
}) 
