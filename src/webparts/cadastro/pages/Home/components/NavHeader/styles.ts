import styled from 'styled-components';

export const Container = styled.div`
 display: flex;
 align-items: center;
 padding: 0 1.25rem;
 width: 100%;
 height: 3rem;
 background: rgb(96,21,120);
 background: linear-gradient(41deg, rgba(96,21,120,1) 0%, rgba(120,34,110,1) 34%, rgba(143,47,99,1) 100%);

 ul{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1.25rem;
    font-size: 1rem;
    color: #FFF;

    list-style-type: none;
 }
 h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
 }

 button{
    cursor: pointer;
 }
`
export const NavItem = styled.li`
    display: flex;
    align-items: center;
    gap: .625rem;
    height: 100%;
`