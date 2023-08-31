/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { FormEvent, useEffect, useState } from "react";
import Modal from 'react-modal'
import { useModal } from "../../../../../hooks/useModal";
import { FiX } from "react-icons/fi";
import { Container, InputContainer } from "./styles";
import { useRecords } from "../../../../../hooks/useRecords";
import { IRecords } from "../../../../../interfaces/IRecords";

export const EditRecordModal = () => {
    const { records,getAllRecords, updateRecord, editSuccess, error } = useRecords()
    const { editModalOpen, closeEditModal, selectedRecordId } = useModal()

    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [id, setId] = useState<number>(0);

    const getSelectedRecord = () => {
        const selectedRecord = records.find((record: IRecords) => {
            return record.id === selectedRecordId
        })
        if (selectedRecord?.id !== undefined) {
            setId(selectedRecord?.id)
        }
        if (selectedRecord?.firstName !== undefined) {
            setFirstName(selectedRecord.firstName)
        }
        if (selectedRecord?.lastName !== undefined) {
            setLastName(selectedRecord.lastName)
        }
        if (selectedRecord?.email !== undefined) {
            setEmail(selectedRecord.email)
        }
        if (selectedRecord?.phone !== undefined) {
            setPhone(selectedRecord.phone)
        }
    }

    

    const phoneMask = (value: string) => {
        if (!value) return ""
        value = value.replace(/\D/g, '')
        value = value.replace(/(\d{2})(\d)/, "($1) $2")
        value = value.replace(/(\d)(\d{4})$/, "$1-$2")
        return value
    }

    const handlePhone = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const input = event.target as HTMLInputElement
        input.value = phoneMask(input.value)
    }

    const fetchRecord = () => {
        getAllRecords()
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        try {
            updateRecord(id, {
                firstName,
                lastName,
                email,
                phone
            })

            closeEditModal()
            editSuccess()
            setTimeout(() => {
                fetchRecord()
            }, 1000);
        } catch {
            error()
        }
    }
    useEffect(() => {
        
        if (selectedRecordId > 0) {
            getSelectedRecord()
        }
    }, [selectedRecordId])

    return (
        <Modal
            isOpen={editModalOpen}
            onRequestClose={closeEditModal}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
            overlayClassName="modal-overlay"
            className="modal-content"
            ariaHideApp={false}
        >
            <button
                onClick={closeEditModal}
                className="modal-close"
            >
                <FiX size={20} color="#58396C" />
            </button>
            <Container onSubmit={handleSubmit}>
                <h2>Cadastrar Pessoas</h2>
                <InputContainer>
                    <input
                        type="text"
                        className="form__field"
                        placeholder="Nome"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}

                    />
                    <label className="form__label">Nome</label>
                </InputContainer>
                <InputContainer>
                    <input
                        type="text"
                        className="form__field"
                        placeholder="Sobrenome"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <label className="form__label">Sobrenome</label>
                </InputContainer>
                <InputContainer>
                    <input
                        type="email"
                        className="form__field"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className="form__label">Email</label>
                </InputContainer>
                <InputContainer>
                    <input
                        type="tel"
                        maxLength={15}
                        className="form__field"
                        placeholder="Telefone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        onKeyUp={(event) => handlePhone(event)}
                    />
                    <label className="form__label">Telefone</label>
                </InputContainer>

                <button type="submit">Editar</button>
            </Container>
        </Modal>
    )
}


