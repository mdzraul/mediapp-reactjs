import React from 'react'
import {NavigationContaniner } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator ();
export default function Navigation(){
    return(
        <NavigationContaniner>
            <Tab.Navigator>
                <Tab.Screen name={"Home"} component={}/>
                <Tab.Screen name={"Citas"} component={}/>
                <Tab.Screen name={"Mapas"} component={}/>
                <Tab.Screen name={"Favoritos"} component={}/>
            </Tab.Navigator>
        </NavigationContaniner>

    )
}