import React from 'react';
import {
    Container,
    NavItem,
} from './styles'
import { FiHome } from 'react-icons/fi';

export const NavHeader = () => {
    return (
        <Container>
            <ul>
                <NavItem>
                    <FiHome />
                    Página Inicial
                </NavItem>
            </ul>
        </Container>
    )
}