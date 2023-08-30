import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

   :root{
      --backgroud: #E6E8E6;
      --shape: #fff;
      --shape-text: #58396C;
   }

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
      background: var(--backgroud);
      -webkit-font-smooth: antialiased;
      font-family: 'Montserrat', sans-serif;
   }

   button{
      cursor: pointer;
   }
   
   .modal-overlay{
      background: linear-gradient(41deg, rgba(96,21,120,.9) 0%, rgba(120,34,110,.6) 34%, rgba(143,47,99,.3) 100%);
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      display: flex;
      align-items: center;
      justify-content: center;
      transition:  all 0.4s ease-in-out;
   }
   .modal-content{
      width: 100%;
      max-width: 36rem;
      background: var(--backgroud);
      padding: 3rem;
      position: relative;
      border-radius: 0.25rem;
   }

`