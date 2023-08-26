import React from "react"
import { FcViewDetails } from 'react-icons/fc';
import {
    Container,
    Content,
    ContentTop,
    Title

} from './styles'

export const Header = () => {
    return (
        <Container>
            <Content>
                <ContentTop>
                    <FcViewDetails size={30} />
                    <button>Novo Cadastro</button>
                </ContentTop>
                <Title>
                    Cadastro de Pessoal
                </Title>
            </Content>
        </Container>
    )
}