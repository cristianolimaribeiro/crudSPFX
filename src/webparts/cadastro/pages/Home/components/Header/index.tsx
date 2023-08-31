import React, { useEffect, useState } from "react"
import { FcViewDetails } from 'react-icons/fc';
import magnifier from '../../../../assets/icon.svg'
import {
    Container,
    Content,
    ContentTop,
    Title

} from './styles'
import { useModal } from "../../../../hooks/useModal";
import { useRecords } from "../../../../hooks/useRecords";

export const Header = () => {

    const { openNewModal } = useModal()
    const { searchRecords, getAllRecords } = useRecords()

    const [search, setSearch] = useState<string>('')

    
    useEffect(() => {
        const fetchData = () => {
            searchRecords(search)
        }
        const fetchRecord = () => {
            getAllRecords()
        }

        if(search !== ''){
            fetchData() 
        }
        fetchRecord()
        
    },[search])

    return (
        <Container>
            <Content>
                <ContentTop>
                    <FcViewDetails size={30} />
                    <div className="search-container">
                        <input
                            type="text"
                            className="input-search"
                            placeholder="Busque um Cadastro ..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <div className="icon-search">
                            <img src={magnifier} alt="lupa de busca" />
                        </div>
                    </div>
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