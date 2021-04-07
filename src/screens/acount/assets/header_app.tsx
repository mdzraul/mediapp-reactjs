import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 21 21"
      xmlSpace="preserve"
      enableBackground="new 0 0 21 21"
      {...props}
    >
      <Path
        d="M21 .8V.6c0-.1-.1-.1-.1-.2s-.1-.1-.2-.2c-.1 0-.1-.1-.2-.1H14c-.5 0-.9.4-.9.9s.4.9.9.9h4L12.8 7C9.4 4.3 4.4 4.8 1.7 8.2S-.5 16.6 3 19.3s8.4 2.2 11.1-1.2c2.3-2.9 2.3-7 0-9.9L19.3 3v4c0 .5.4.9.9.9s.9-.4.9-.9V.9s0-.1-.1-.1c.1 0 0 0 0 0zM7.9 19.3c-3.4 0-6.1-2.8-6.2-6.1C1.7 9.8 4.5 7 7.9 7c3.4 0 6.1 2.8 6.2 6.1-.1 3.4-2.8 6.2-6.2 6.2z"
        fill="red"
      />
    </Svg>
  )
}

export default SvgComponent
