
import React, { useState, useEffect } from 'react';
import {StyleSheet,Text,View,Keyboard,Box,Container,Dimensions} from 'react-native';
import colors from '../utils/colors';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomButton from '../components/ButtonPrimaryColor';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default function Especialidad (){

return (
     <>

<KeyboardAwareScrollView
    resetScrollToCoords={{ x: 0, y: 0 }}
    contentContainerStyle={styles.container}
    scrollEnabled
  >
        <Text style={styles.title}>¿Qué especialidad te interesa?</Text>
       
        <View style={styles.container}>
        
         { <FontAwesome 
           style={{color:'#4682B4', position:'absolute', top: 0,right: 180}}
          name="user-o"
          color={colors.text}
          size={100}
         />
         }
        <Text style={{position: 'absolute',top:110,right:170}}>Medicina General</Text>
         { <FontAwesome 
           style={{color:'#4682B4',position:'absolute', right: 0}}
          name="user-o"
          color={colors.text}
          size={100}
         />
         }
         <Text style={{position: 'absolute',top:110,right:0}}>CardiologÍa</Text>
         
         { <FontAwesome 
           style={{color:'#4682B4', position:'absolute', top: 200,right: 180}}
          name="user-o"
          color={colors.text}
          size={100}
         />
         }
       <Text style={{position: 'absolute',top:310,right:190}}>Pediatría</Text>

         { <FontAwesome 
           style={{color:'#4682B4', position:'absolute', top: 200,right: 0}}
          name="user-o"
          color={colors.text}
          size={100}
         />
         } 
         <Text style={{position: 'absolute',top:310,right:0}}>Laboratorio</Text>
         { <FontAwesome 
           style={{color:'#4682B4', position:'absolute', top: 400,right: 180}}
          name="user-o"
          color={colors.text}
          size={100}
         />
         }
          <Text style={{position: 'absolute',top:510,right:190}}>Oncología</Text>
          { <FontAwesome 
           style={{color:'#4682B4', position:'absolute', top: 400,right: 0}}
          name="user-o"
          color={colors.text}
          size={100}
         />
         } 
          <Text style={{position: 'absolute',top:510,right:0}}>Neurología</Text>
           <View style={styles.containerbutton}>
             <CustomButton text="Guardar" bordered size="small"/> 
           </View>
          
        </View>



        </KeyboardAwareScrollView>
        
        </>
  );
}

const styles =StyleSheet.create({
    container:{
        marginLeft:wp('8%'),
        marginRight:wp('8%'),
        flex:1,
    },
    
    title:{
        fontWeight: 'bold',
        fontSize: 20,
        textAlign:'center',
        padding:30,
    },

    containerbutton: {
        alignItems: 'center',
        justifyContent: 'center',
        flex:1,
        paddingTop:500,
      },
   
  }) 

