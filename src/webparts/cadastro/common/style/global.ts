import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

   *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   } 

   html {
      @media(max-width: 1080px){
         font-size: 93.75%;
      }
      @media(max-width: 720px){
         font-size: 87.5%;
      }

   }

   body{
      background: #E6E8E6;
      -webkit-font-smooth: antialiased;
      font-family: 'Montserrat', sans-serif;
   }
   

`