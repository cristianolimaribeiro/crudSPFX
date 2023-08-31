import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

   :root{
      --backgroud: #E6E8E6;
      --shape: #fff;
      --shape-text: #58396C;
      --size-button: 40px;
      --text-input: #BEBEBE;
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
      border: 0;
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
      transition:  all 0.5s ease-in-out;
      
   }
   .modal-content{
      width: 100%;
      max-width: 36rem;
      background: var(--shape);
      padding: 3rem;
      position: relative;
      border-radius: 0.25rem;
      outline: none;
   }
   .modal-close{
      background: var(--shape);
      position: relative;
      left: 31.25rem;
      bottom: 2.375rem;
   }

   .form__field {
      font-family: inherit;
      width: 100%;
      border: none;
      border-bottom: 2px solid var(--backgroud);
      outline: 0;
      font-size: 16px;
      color: var(--text-input);
      padding: 7px 0;
      background: transparent;
      transition: border-color 0.5s ease-in-out;
}

    .form__field::placeholder {
      color: transparent;
    }

    .form__field:placeholder-shown ~ .form__label {
      font-size: 17px;
      cursor: text;
      top: 20px;

    }

    .form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: all 0.5s ease-in-out;
      font-size: 17px;
      color: var(--backgroud);
      pointer-events: none;
    }

    .form__field:focus {
      padding-bottom: 6px;
      font-weight: 700;
      border-width: 3px;
      border-image: linear-gradient(to right, rgba(96,21,120,1), rgba(143,47,99,.3));
      border-image-slice: 1;
    }

    .form__field:focus ~ .form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: all 0.5s ease-in-out;
      font-size: 16px;
      background-image: linear-gradient(to right, rgba(96,21,120,1), rgba(143,47,99,.6));
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color:#000;
      font-weight: 700;
    }
    
    
.search-container {
  position: relative;
  color: white;
}

.input-search {
  padding-left: var(--size-button);
  height: var(--size-button);
  font-size: 15px;
  border: none;
  color: var(--text-input);
  outline: none;
  width: var(--size-button);
  transition: all ease 0.3s;
  background-color: var(--shape);
  box-shadow: 1.5px 1.5px 3px var(--shape-text), -1.5px -1.5px 3px rgb(95 94 94 / 25%), inset 0px 0px 0px var(--shape-text), inset 0px -0px 0px rgba(143,47,99,.3);
  border-radius: 50px;
  cursor: pointer;
}

.input-search:focus {
  width: 200px;
  cursor: text;
  box-shadow: 0px 0px 0px var(--shape-text), 0px 0px 0px rgb(95 94 94 / 25%), inset 1.5px 1.5px 3px var(--shape-text), inset -1.5px -1.5px 3px rgba(143,47,99,.3);
}

.input-search:focus + .icon-search {
  pointer-events: all;
  cursor: pointer;
}

.search-container .icon-search {
  position: absolute;
  width: var(--size-button);
  height: var(--size-button);
  top: 0;
  left: 0;
  padding: 8px;
  pointer-events: none;
}

.search-container .icon-search img{
  width: 100%;
  height: 100%;
}
`