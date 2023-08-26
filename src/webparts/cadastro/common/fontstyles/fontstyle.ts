import { createGlobalStyle } from 'styled-components';

import MontserratRegular from '../../assets/fonts/Montserrat-Regular.ttf'
import MontserratSemiBold from '../../assets/fonts/Montserrat-SemiBold.ttf'
import MontserratBold from '../../assets/fonts/Montserrat-Bold.ttf'

export const FontStyles = createGlobalStyle`
   @font-face {
      font-family: 'Montserrat';
      src: url(${MontserratRegular}) format('ttf'),
           url(${MontserratSemiBold}) format('ttf'),
           url(${MontserratBold}) format('ttf');
    }

`