import styled from  'styled-components';

export const Container = styled.div`

    height: 100%;

`
export const Content = styled.div`
    max-width: 65.25rem;
    margin: 0 auto;
    padding: 2rem 1 rem 9rem;
    
    display: flex;
    flex-direction: column;
    gap: 2rem;
    

`
export const ContentTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;

    button{
        font-size: 1rem;
        color: var(--shape-text);
        background-color: var(--shape);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        box-shadow: -2px 3px 38px -10px var(--shape-text);
        transition: all .3s ease-in-out;

        &:hover{
            color: var(--shape);
            background-color: var(--shape-text);
            box-shadow: -2px 3px 38px -10px #000;
        }
    }
`
export const Title = styled.h2`
    color: var(--shape-text);
`