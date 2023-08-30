import styled from 'styled-components';

export const Container = styled.form`
    width: 100%;
    h2{
        color: var(--shape-text);
    }
    button{
        font-size: 1rem;
        color: var(--shape-text);
        background-color: var(--shape);
        border: 0;
        padding: 0 1rem;
        position: relative;
        left: 40%;
        margin-top: 1rem;
        border-radius: 0.25rem;
        height: 2rem;
        box-shadow: -2px 3px 38px -10px var(--shape-text);
        transition: all .3s ease-in-out;

        &:hover{
            color: var(--shape);
            background-color: var(--shape-text);
            box-shadow: -2px 3px 38px -10px #000;
        }        
    }
`

export const InputContainer = styled.div`
   
  position: relative;
  padding: 20px 0 0;
  width: 100%;
  max-width: 32.5rem;
  margin-bottom: 1rem;

`



