import React from 'react'
import { StyleSheet, Text, View ,TouchableHighlight } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

import Arrowleft from "../../assets/arrow_left"

export default function HeaderLeft({navigator,color}) {
    const Backbutton = () => {
        navigator.goBack()
    }

    return (
        <View style={styles.header}>
          <TouchableHighlight onPress={Backbutton}>
            <Arrowleft  width={20} height={20} planetColor={color} />
          </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({

    header:{
        width:'100%',
        height:"100%",
        flexDirection:"row",
        alignItems:"center",
        margin:10
    },
    text:{
        fontWeight:'bold',
        fontSize:20
    }

})
