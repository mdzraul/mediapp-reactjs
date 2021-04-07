import * as React from "react"
import Svg, { Path, G } from "react-native-svg"
import Color from "../src/utils/colors"

interface PlanetProps {
    height: number
    width: number
    planetColor?: string
    ringColor?: string
    craterColor?: string
    hasRing?: boolean
}

function SvgComponent(props: PlanetProps) {
  return (
    <Svg viewBox="0 0 16.495 9.853" width={props.width} height={props.height}>
       <G id="Grupo_3670" data-name="Grupo 3670" transform="translate(-1741.413 745.524) rotate(-93)">
       <Path id="Trazado_1978" data-name="Trazado 1978" d="M651.522,1794.045l1-1-7.02-7.02,7.02-7.02-1-1-8.023,8.023Z" transform="translate(0)" fill={Color.PRIMARY_COLOR}/>
     </G>
  </Svg>
  )
}

export default SvgComponent