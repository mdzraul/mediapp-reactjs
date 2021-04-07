import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Color from '../utils/colors'

export default function HeaderNavigation({props,titleNavigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{titleNavigation}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
        backgroundColor:Color.WHITE_COLOR,
        alignItems:"center"
    },
    text:{
        margin:10,
        fontWeight:"bold",
        fontSize:20
    }
})
