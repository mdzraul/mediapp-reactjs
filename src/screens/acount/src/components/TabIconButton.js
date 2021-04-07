import React from 'react'
import { StyleSheet, Text, View , TouchableHighlight} from 'react-native'
import {useNavigation} from "@react-navigation/native"
import {Icon} from "react-native-elements"
//// IMPORT IMAGE FOR BUTTON
import ImgHome from "../../assets/home"


export default function TabIconButton() {
    const navigation =useNavigation();

    return (
        <TouchableHighlight>
            <ImgHome  width={30} height={30} />
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({})
