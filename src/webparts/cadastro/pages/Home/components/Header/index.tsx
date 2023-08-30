import React from "react"
import { FcViewDetails } from 'react-icons/fc';
import {
    Container,
    Content,
    ContentTop,
    Title

} from './styles'
import { useModal } from "../../../../hooks/useModal";

export const Header = () => {

    const {openNewModal} = useModal()

    return (
        <Container>
            <Content>
                <ContentTop>
                    <FcViewDetails size={30} />
                    <button
                        onClick={openNewModal}
                    >
                        Novo Cadastro
                    </button>
                </ContentTop>
                <Title>
                    Cadastro de Pessoal
                </Title>
            </Content>
        </Container>
    )
}