import React from "react";

//Importamos los componentes del package
// import Svg, {G, Path} from "react-native-svg";
import {SvgCss} from 'react-native-svg';


// export const LogoRiver = (props) =>
//     <Svg width="450" height="450" viewBox="0 0 192.756 192.756">
//         <G fill-rule="evenodd" clip-rule="evenodd">
//             <Path fill="#fff" d="M0 0h192.756v192.756H0V0z"/>
//             <Path d="M140.582 8.504c-17.225 8.001-32.656 9.039-44.204 9.039-11.547 0-26.979-1.038-44.205-9.039L22.142 36.752c1.414 3.587 9.319 24.023 10.719 35.829l.995 9.364c1.314 12.95 3.115 30.684 6.137 39.297l.568 1.641c3.979 11.564 13.283 38.596 55.817 61.369 42.536-22.773 51.839-49.805 55.817-61.369l.57-1.645c3.02-8.609 4.82-26.343 6.135-39.297 0 0 .996-9.36.996-9.37 1.4-11.796 9.305-32.231 10.717-35.818L140.582 8.504z"/>
//             <Path d="M140.258 10.466c-17.129 7.72-32.418 8.73-43.88 8.73-11.462 0-26.75-1.01-43.879-8.73L24.088 37.19c2.199 5.67 9.094 24.072 10.417 35.216l.995 9.372c1.307 12.866 3.096 30.489 6.055 38.922l.569 1.643c3.886 11.295 12.958 37.648 54.255 60.027 41.298-22.379 50.37-48.732 54.257-60.029l.57-1.65c2.955-8.424 4.744-26.048 6.053-38.924l.998-9.391c1.318-11.117 8.213-29.516 10.412-35.186l-28.411-26.724z" fill="#fff"/>
//             <Path d="M136.619 69.122l21.486-34.245-19.104-17.899c-14.283 5.831-27.193 7.348-37.691 7.664l-9.217 14.737c12.167-1.225 35.596 4.342 44.526 29.743zM54.864 98.867l-9.548 15.488c2.662 10.816 9.708 32.303 32.152 49.469l23.603-37.695c-22.27 2.957-39.706-10.744-46.207-27.262z" fill="#cc2131"/>
//             <Path d="M81.575 166.465c4.296 3.178 9.142 6.34 14.616 9.438 40.602-22.98 46.286-48.842 49.04-55.457 3.393-8.148 5.797-32.685 6.273-39.372 1.383-19.404 7.908-37.259 10.213-42.859L137.918 76.23c3.885 23.739-11.953 42.424-29.969 48.1l-26.374 42.135zM52.911 92.833a43.434 43.434 0 0 1-1.144-9.916c0-20.64 14.425-37.901 33.741-42.279l10-15.949c-11.184-.039-25.725-1.067-42.058-7.735L30.443 38.617s7.813 19.371 9.43 32.998l1.006 9.458c.772 7.606 1.794 17.669 3.144 25.981l8.888-14.221z"/>
//             <Path d="M50.746 92.661a45.473 45.473 0 0 1-1.061-9.745c0-21.454 14.873-39.424 34.866-44.193l7.612-12.354c-10.438-.241-23.604-1.596-38.272-7.4L32.574 39.037s7.468 18.635 9.094 32.337l1.008 9.479c.619 6.105 1.403 13.815 2.382 20.893l5.688-9.085zM84.091 166.037a141.242 141.242 0 0 0 12.151 7.803c39.796-22.773 45.839-50.354 47.306-54.041 2.93-7.357 5.191-26.784 6.26-38.945.307-3.484 1.512-18.401 5.6-29.362L140.1 76.458c3.307 25.05-12.475 43.689-31.016 49.708l-24.993 39.871z" fill="#fff"/>
//             <Path d="M133.428 76.639C133.066 62.134 115.74 50.1 115.74 50.1v65.621c2.859-1.549 6.504-5.033 6.504-5.033v-10.594c12.371-8.698 11.184-23.455 11.184-23.455zm-11.184 12.498V67.238c4.525 3.716 4.576 12.064 4.576 12.064-.394 7.008-4.576 9.835-4.576 9.835zM88.054 113.018c-13.505-3.283-23.536-15.449-23.536-29.965s10.03-26.684 23.536-29.966V45.3c-17.645 3.412-30.972 19.11-30.972 37.752 0 18.641 13.327 34.163 30.972 37.575v-7.609z"/>
//             <Path d="M68.163 83.052c0 8.558 3.955 16.188 10.135 21.172v-9.448c-2.632-2.788-3.651-5.519-4.075-9.369h7.638V106.658a27.095 27.095 0 0 0 6.193 2.592V56.853c-11.471 3.194-19.891 13.71-19.891 26.199z"/>
//             <Path d="M81.861 79.058V66.616a21.253 21.253 0 0 0-7.39 12.442h7.39z" fill="#fff"/>
//             <Path d="M104.418 91.369s4.879-2.021 5.785-8.713c.906-6.691.906-14.569.906-14.778 0-.208-.326-11.06-.326-11.06s.418-11.006-8.643-11.981c-7.636-.822-9.899-.209-9.899-.209v76.785s4.4.309 6.561-.109V96.977s4.195 9.963 6.17 23.389c0 0 5.498-1.463 7.277-2.748.001-.001-1.743-13.747-7.831-26.249z"/>
//             <Path d="M104.07 76.359c0 1.396.004 3.928-1.111 4.903-1.115.976-1.734 1.836-3.895 1.279V53.66s2.85.068 3.965 1.114.977 2.301 1.045 3.276c.071.974-.004 16.606-.004 18.309z" fill="#fff"/>
//         </G>
//     </Svg>


const xml = (obj) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="71.333" height="79.254" viewBox="0 0 71.333 79.254">
  <g id="nightmare" transform="translate(-0.012 -0.001)">
    <path id="Trazado_3712" data-name="Trazado 3712" d="M77.226,69.289a23.41,23.41,0,0,1-5.561,7.146c-6.591,5.812-16.643,8.7-28.12,8.7-.331,0-.661,0-.991-.027-12.482-.2-23.326-4.61-29.243-11.1a19.562,19.562,0,0,1-3.237-4.728c-.079-.158-.145-.317-.211-.476a15.09,15.09,0,0,1-1.321-6.129v-25.8C8.542,21.633,20.6,8.768,35.858,8.53a27.073,27.073,0,0,1,6.577.687A27.745,27.745,0,0,1,64.018,36.268V57.8a14.636,14.636,0,0,0,1.862,7.344c1.744,3,5.455,5.508,11.346,4.148Zm0,0" transform="translate(-7.21 -7.205)" fill="#d4e1f4"/>
    <path id="Trazado_3713" data-name="Trazado 3713" d="M77.836,83.514c-6.63,5.719-16.616,8.664-28.068,8.836-12.482-.2-23.326-4.61-29.243-11.1a19.562,19.562,0,0,1-3.237-4.728c-.079-.158-.145-.317-.211-.476V41.722A24.7,24.7,0,0,1,41.83,17.089a23.888,23.888,0,0,1,4.993.515A24.613,24.613,0,0,1,66.583,41.722v30.1s0,8.374,11.253,11.689Zm0,0" transform="translate(-14.424 -14.443)" fill="#e3e7f2"/>
    <path id="Trazado_3714" data-name="Trazado 3714" d="M67.671,134.628c0-3.647-1.774-6.6-3.963-6.6s-3.962,2.957-3.962,6.6,1.774,6.6,3.962,6.6S67.671,138.275,67.671,134.628Zm0,0" transform="translate(-50.488 -108.207)" fill="#7facfa"/>
    <path id="Trazado_3715" data-name="Trazado 3715" d="M70.919,147.731c0-1.459-.591-2.642-1.321-2.642s-1.321,1.183-1.321,2.642.591,2.642,1.321,2.642,1.321-1.183,1.321-2.642Zm0,0" transform="translate(-57.699 -122.631)" fill="#fff"/>
    <path id="Trazado_3716" data-name="Trazado 3716" d="M229.8,134.628c0-3.647-1.774-6.6-3.963-6.6s-3.962,2.957-3.962,6.6,1.774,6.6,3.962,6.6S229.8,138.275,229.8,134.628Zm0,0" transform="translate(-187.525 -108.207)" fill="#7facfa"/>
    <path id="Trazado_3717" data-name="Trazado 3717" d="M139.9,219.971a1.321,1.321,0,0,1-1.238-.859,5.217,5.217,0,0,0-.981-1.651,4.436,4.436,0,0,0-1.4-1.074,3.832,3.832,0,0,0-3.322,0,4.429,4.429,0,0,0-1.4,1.074,5.205,5.205,0,0,0-.981,1.65,1.321,1.321,0,0,1-2.475-.925,7.87,7.87,0,0,1,1.478-2.475A7.04,7.04,0,0,1,131.816,214a6.493,6.493,0,0,1,5.6,0,7.062,7.062,0,0,1,2.245,1.707,7.858,7.858,0,0,1,1.478,2.475,1.321,1.321,0,0,1-.774,1.7A1.342,1.342,0,0,1,139.9,219.971Zm0,0" transform="translate(-108.185 -180.341)" fill="#d4e1f4"/>
    <path id="Trazado_3718" data-name="Trazado 3718" d="M233.052,147.731c0-1.459-.591-2.642-1.32-2.642s-1.321,1.183-1.321,2.642.591,2.642,1.321,2.642S233.052,149.19,233.052,147.731Zm0,0" transform="translate(-194.736 -122.631)" fill="#fff"/>
    <path id="Trazado_3719" data-name="Trazado 3719" d="M61.778,315.754v6.6a5.283,5.283,0,0,1-10.567,0v-6.6" transform="translate(-43.275 -266.879)" fill="#d4e1f4"/>
    <path id="Trazado_3720" data-name="Trazado 3720" d="M61.778,291.477v5.283a5.283,5.283,0,1,1-10.567,0v-5.283a1.321,1.321,0,0,1,1.321-1.321h7.925A1.321,1.321,0,0,1,61.778,291.477Zm0,0" transform="translate(-43.275 -245.244)" fill="#d4e1f4"/>
    <path id="Trazado_3721" data-name="Trazado 3721" d="M68.277,281.621h5.283v10.567a2.642,2.642,0,1,1-5.283,0Zm0,0" transform="translate(-57.699 -238.029)" fill="#e3e7f2"/>
    <path id="Trazado_3722" data-name="Trazado 3722" d="M232.446,315.754v6.6a5.283,5.283,0,0,1-10.567,0v-6.6" transform="translate(-187.526 -266.879)" fill="#d4e1f4"/>
    <path id="Trazado_3723" data-name="Trazado 3723" d="M232.446,291.477v5.283a5.283,5.283,0,1,1-10.567,0v-5.283a1.321,1.321,0,0,1,1.32-1.321h7.925A1.321,1.321,0,0,1,232.446,291.477Zm0,0" transform="translate(-187.526 -245.244)" fill="#d4e1f4"/>
    <path id="Trazado_3724" data-name="Trazado 3724" d="M238.945,281.621h5.283v10.567a2.642,2.642,0,1,1-5.283,0Zm0,0" transform="translate(-201.95 -238.029)" fill="#e3e7f2"/>
    <path id="Trazado_3725" data-name="Trazado 3725" d="M446.14,401.421c.059-.114.132-.218.187-.331q-.559.131-1.09.211C445.535,401.354,445.83,401.393,446.14,401.421Zm0,0" transform="translate(-376.311 -339.005)" fill="#fff"/>
    <path id="Trazado_3726" data-name="Trazado 3726" d="M10.075,69.3a19.562,19.562,0,0,0,3.237,4.728c5.917,6.485,16.761,10.9,29.243,11.1.33.027.66.027.991.027.811,0,1.614-.018,2.41-.047-12.244-.32-22.85-4.687-28.682-11.074A19.576,19.576,0,0,1,14.038,69.3c-.079-.158-.145-.317-.211-.476a15.07,15.07,0,0,1-1.321-6.129V36.9A28.176,28.176,0,0,1,38.471,8.629c-.863-.068-1.732-.108-2.613-.093C20.6,8.774,8.543,21.64,8.543,36.9v25.8A15.09,15.09,0,0,0,9.864,68.82c.066.158.132.317.211.476Zm0,0" transform="translate(-7.211 -7.212)" fill="#fff"/>
    <path id="Trazado_3727" data-name="Trazado 3727" d="M28.663,2.665a28.261,28.261,0,0,0-8.008,1.414,26.7,26.7,0,0,0-7.171,3.85,27.013,27.013,0,0,0-7.962,9.616A28.081,28.081,0,0,0,2.653,29.707H.012A30.716,30.716,0,0,1,3.159,16.366,29.638,29.638,0,0,1,11.9,5.822a29.3,29.3,0,0,1,7.9-4.236A30.828,30.828,0,0,1,28.623.023Zm0,0" transform="translate(0 -0.019)" fill="#fff"/>
    <g id="Grupo_3604" data-name="Grupo 3604" transform="translate(0.012 0.001)">
      <path id="Trazado_3728" data-name="Trazado 3728" d="M51.211,127.414c0,4.443,2.321,7.926,5.283,7.926s5.283-3.482,5.283-7.926-2.321-7.925-5.283-7.925S51.211,122.971,51.211,127.414Zm7.925,0c0,3.025-1.395,5.283-2.642,5.283s-2.642-2.258-2.642-5.283,1.395-5.283,2.642-5.283S59.136,124.389,59.136,127.414Zm0,0" transform="translate(-43.286 -100.994)" fill="#009fb4"/>
      <path id="Trazado_3729" data-name="Trazado 3729" d="M218.627,135.339c2.963,0,5.283-3.482,5.283-7.926s-2.321-7.925-5.283-7.925-5.283,3.482-5.283,7.925S215.665,135.339,218.627,135.339Zm0-13.209c1.247,0,2.642,2.259,2.642,5.283s-1.394,5.283-2.642,5.283-2.642-2.258-2.642-5.283S217.381,122.13,218.627,122.13Zm0,0" transform="translate(-180.323 -100.994)" fill="#009fb4"/>
      <path id="Trazado_3730" data-name="Trazado 3730" d="M110.968,16.948a1.589,1.589,0,0,0,.976-.02,1.287,1.287,0,0,0,.69-.681l.073-.241a1.137,1.137,0,0,0,.024-.264.874.874,0,0,0-.012-.251,1.975,1.975,0,0,0-.067-.256,1.319,1.319,0,0,0-.7-.734,1.407,1.407,0,0,0-.528-.093,1.321,1.321,0,0,0-1.263.845,1.373,1.373,0,0,0-.066.528,1.325,1.325,0,0,0,.128.494A1.415,1.415,0,0,0,110.968,16.948Zm0,0" transform="translate(-93.055 -12.178)" fill="#009fb4"/>
      <path id="Trazado_3731" data-name="Trazado 3731" d="M36.336,79.255c16.887,0,29.593-6.043,34.87-16.581A1.321,1.321,0,0,0,69.727,60.8c-6.254,1.453-9.006-1.981-9.906-3.523a13.273,13.273,0,0,1-1.691-6.681V29.062A29.058,29.058,0,0,0,28.625,0L25.861.192c-.915.116-1.822.3-2.734.449a1.312,1.312,0,0,0-1,1.616,1.341,1.341,0,0,0,1.555.967c.827-.132,1.648-.3,2.478-.407l2.507-.172A26.416,26.416,0,0,1,55.488,29.063v21.53a15.894,15.894,0,0,0,2.049,8,10.515,10.515,0,0,0,9.986,5.161c-5.45,8.208-16.63,12.858-31.186,12.858-14.746,0-28.019-6.208-32.278-15.1a14.005,14.005,0,0,1-1.4-6.038V29.688A28.089,28.089,0,0,1,5.526,17.527a27.024,27.024,0,0,1,7.959-9.616A8.571,8.571,0,0,1,14.5,7.174,1.319,1.319,0,0,0,13.02,4.991,9.9,9.9,0,0,0,11.9,5.8a29.634,29.634,0,0,0-8.736,10.55A30.709,30.709,0,0,0,.013,29.688V55.48a16.627,16.627,0,0,0,1.663,7.175c4.757,9.929,18.686,16.6,34.661,16.6Zm0,0" transform="translate(-0.013 -0.001)" fill="#009fb4"/>
      <path id="Trazado_3732" data-name="Trazado 3732" d="M44,315.754a1.321,1.321,0,0,0-1.321,1.321v6.6a6.6,6.6,0,0,0,13.208,0v-6.6a1.321,1.321,0,1,0-2.642,0v6.6a3.962,3.962,0,0,1-7.925,0v-6.6A1.321,1.321,0,0,0,44,315.754Zm0,0" transform="translate(-36.075 -266.88)" fill="#009fb4"/>
      <path id="Trazado_3733" data-name="Trazado 3733" d="M213.344,323.679a6.6,6.6,0,0,0,13.209,0v-6.6a1.321,1.321,0,0,0-2.642,0v6.6a3.962,3.962,0,0,1-7.925,0v-6.6a1.321,1.321,0,1,0-2.642,0Zm0,0" transform="translate(-180.323 -266.88)" fill="#009fb4"/>
      <path id="Trazado_3734" data-name="Trazado 3734" d="M128.822,219.894a1.321,1.321,0,0,0,1.7-.775,5.217,5.217,0,0,1,.981-1.651,4.429,4.429,0,0,1,1.4-1.074,3.832,3.832,0,0,1,3.322,0,4.436,4.436,0,0,1,1.4,1.074,5.2,5.2,0,0,1,.981,1.65,1.321,1.321,0,1,0,2.475-.923,7.867,7.867,0,0,0-1.478-2.475,7.057,7.057,0,0,0-2.246-1.707,6.493,6.493,0,0,0-5.6,0,7.044,7.044,0,0,0-2.245,1.707,7.855,7.855,0,0,0-1.478,2.475,1.321,1.321,0,0,0,.784,1.7Zm0,0" transform="translate(-108.152 -180.349)" fill="#009fb4"/>
    </g>
  </g>
</svg>
`
export const Iconuser = (props) =><SvgCss xml={xml( {color: 'tomato'} )}/>