import * as React from "react"
import Svg, { Circle, Path, G ,Rect,Defs,Ellipse,Text,TSpan,ClipPath,Stop,LinearGradient } from "react-native-svg"

interface Props {
    height: number
    width: number
    planetColor?: string
}

function SvgComponent(props: Props) {
  return (
<Svg   viewBox="0 0 24.706 23.726" width={props.width} height={props.height}>
  <Path id="star" d="M23.155,11.324a1.7,1.7,0,0,0-.941-2.9L16.484,7.6a.748.748,0,0,1-.565-.411L13.358,1.993a1.7,1.7,0,0,0-3.044,0L7.749,7.186a.75.75,0,0,1-.565.411l-5.731.832a1.7,1.7,0,0,0-.941,2.9l4.147,4.043a.75.75,0,0,1,.216.663L3.9,21.737a1.662,1.662,0,0,0,.363,1.377,1.715,1.715,0,0,0,2.093.412l5.133-2.694a.767.767,0,0,1,.7,0l5.128,2.7a1.68,1.68,0,0,0,.79.2,1.7,1.7,0,0,0,1.3-.61,1.662,1.662,0,0,0,.363-1.377l-.974-5.7a.75.75,0,0,1,.216-.663Z" transform="translate(0.519 -0.548)" fill="none" stroke="#000" stroke-width="1"/>
</Svg>
  )
}
export default SvgComponent
