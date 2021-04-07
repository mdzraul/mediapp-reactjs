import * as React from "react"
import Svg, { Path, G } from "react-native-svg"
import Color from "../src/utils/colors"

interface Props {
    height: number
    width: number
    planetColor?: string
}

function SvgComponent(props:Props) {
  return (
    <Svg viewBox="0 0 8.752 15.559" width={props.width} height={props.height}>
      <Path id="Trazado_1978" data-name="Trazado 1978" d="M7.779,0l.972.972L1.945,7.779l6.807,6.807-.972.972L0,7.779Z" fill={props.planetColor ?? '#000000'} />
  </Svg>
  )
}

export default SvgComponent