import * as React from "react"
import Svg, { Path, G,Defs,LinearGradient,Stop } from "react-native-svg"
import Color from "../src/utils/colors"

interface Props {
    height: number
    width: number
    planetColor?: string
}

function SvgComponent(props:Props) {
  return (
    <Svg viewBox="0 0 24.27 24.27" width={props.width} height={props.height}>
        {/*  <Svg viewBox="0 0 13.67 13.67" width={props.width} height={props.height}></Svg>
    <Path d="M13.67,6.83,7.44,0V4.09H6.72A6.71,6.71,0,0,0,0,10.8H0v2.86l1.2-1.3A8.6,8.6,0,0,1,7.43,9.57v4.09ZM.8,11.61V10.8A5.92,5.92,0,0,1,6.71,4.89H8.24V2.07l4.35,4.76L8.24,11.59V8.77H7.52A9.35,9.35,0,0,0,.8,11.61Z" 
      fill={Color.GREEN_COLOR}/> */}
     <Defs>
       <LinearGradient id="a" x1="-642.44" y1="381.21" x2="-641.74" y2="381.21" gradientTransform="matrix(24.27, 0, 0, -24.27, 15590.44, 9263.65)" gradientUnits="userSpaceOnUse">
         <Stop offset="0" stop-color="#006897"/>
         <Stop offset="1" stop-color="#009fb4"/>
         </LinearGradient></Defs>
         <Path d="M23.61,10.56h0L13.72.66a2.22,2.22,0,0,0-3.16,0h0L.66,10.55h0a2.24,2.24,0,0,0,0,3.16,2.31,2.31,0,0,0,1.49.65H2.6v7.28a2.62,2.62,0,0,0,2.62,2.62H9.09a.71.71,0,0,0,.71-.71h0V17.85A1.19,1.19,0,0,1,11,16.65h2.29a1.2,1.2,0,0,1,1.19,1.2v5.71a.71.71,0,0,0,.71.71h3.87a2.61,2.61,0,0,0,2.62-2.61V14.37H22a2.23,2.23,0,0,0,1.58-3.81Zm-1,2.15A.83.83,0,0,1,22,13H21a.71.71,0,0,0-.71.71h0v8a1.19,1.19,0,0,1-1.2,1.19H15.89v-5a2.61,2.61,0,0,0-2.61-2.61H11a2.61,2.61,0,0,0-2.61,2.61v5H5.21A1.19,1.19,0,0,1,4,21.66v-8A.71.71,0,0,0,3.31,13H2.22a.82.82,0,0,1-.8-.83.8.8,0,0,1,.24-.56h0l9.9-9.9a.81.81,0,0,1,1.15,0l9.9,9.9h0a.83.83,0,0,1,0,1.15Z" fill="url(#a)"/>
  </Svg>


  )
}

export default SvgComponent