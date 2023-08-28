import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 2rem;

    table{
        width: 100%;
        border-spacing: 0 .5rem;
        text-align: left;
        
        & thead > tr > th:last-child{
            text-align: center;

        }
    }
    th{
        color: var(--shape-text);
        font-weight: 600;
        font-size: 1rem;
        padding: 1rem 2rem;
        
        line-height: 1.5rem;

    }
  
    td{
        padding: 1rem 2rem;
        border: 0;
        background: var(--shape);
        color: var(--shape-text);
        border-radius: .25rem;
    }
`