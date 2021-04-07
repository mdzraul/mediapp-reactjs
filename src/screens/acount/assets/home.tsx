import * as React from "react"
import Svg, { Circle, Path, G ,Rect,Defs,Ellipse,Text,TSpan,ClipPath,Stop,LinearGradient } from "react-native-svg"

interface HomeProps {
    height: number
    width: number
    planetColor?: string
}

function SvgComponent(props: HomeProps) {
  return (
<Svg  viewBox="0 0 32 32" width={props.width} height={props.height}>
<Defs>
    <LinearGradient id="linear-gradient" x1="-0.049" y1="0.5" x2="0.652" y2="0.5" gradientUnits="objectBoundingBox">
      <Stop offset="0" stop-color="#006897"/>
      <Stop offset="1" stop-color="#009fb4"/>
    </LinearGradient>
  </Defs>
  <Path id="Intersección_406" data-name="Intersección 406" d="M25.18,29.27a.712.712,0,0,1-.712-.711V22.847a1.193,1.193,0,0,0-1.192-1.192H20.992A1.194,1.194,0,0,0,19.8,22.847v5.712a.711.711,0,0,1-.711.711H15.214A2.617,2.617,0,0,1,12.6,26.655V19.37h-.4c-.023,0-.046,0-.068,0a2.233,2.233,0,0,1-1.487-3.806l.01-.011,9.895-9.895a2.235,2.235,0,0,1,3.16,0l9.9,9.9,0,0a2.235,2.235,0,0,1-1.581,3.813h-.365v7.285a2.618,2.618,0,0,1-2.615,2.615Zm-1.9-9.038a2.617,2.617,0,0,1,2.615,2.615v5h3.163a1.2,1.2,0,0,0,1.193-1.193v-8a.71.71,0,0,1,.711-.711h1.076a.8.8,0,0,0,.574-.238.814.814,0,0,0,0-1.148l0,0-9.9-9.9a.813.813,0,0,0-1.148,0l-9.9,9.9h0a.811.811,0,0,0,.56,1.385l.033,0H13.31a.711.711,0,0,1,.711.711v8a1.194,1.194,0,0,0,1.193,1.193h3.163v-5a2.617,2.617,0,0,1,2.615-2.615Z" transform="translate(-10 -5)" fill="url(#linear-gradient)"/>
</Svg>
  )
}
export default SvgComponent