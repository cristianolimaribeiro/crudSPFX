import React from "react";
import { NavHeader } from "./components/NavHeader";
import { FcViewDetails } from 'react-icons/fc'
import {
    Header,
    Content,
    ContentTop,
    Title

} from './styles'

export const Home = () => {
    return (
        <>
            <NavHeader />
            <Header>
                <Content>
                    <ContentTop>
                        <FcViewDetails size={30} />
                        <button>Novo Cadastro</button>
                    </ContentTop>
                    <Title>
                        Cadastro de Pessoal
                    </Title>
                </Content>
            </Header>
        </>
    )
}