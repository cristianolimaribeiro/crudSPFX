import React, { FormEvent, useState } from "react";
import Modal from 'react-modal'
import { useModal } from "../../../../../hooks/useModal";
import { FiX } from "react-icons/fi";
import { Container, InputContainer } from "./styles";
import { useRecords } from "../../../../../hooks/useRecords";

export const NewRecordModal = () => {
    const { createRecord, success, error } = useRecords()
    const { newModalOpen, closeNewModal } = useModal()
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [phone, setPhone] = useState<string>('')

    const phoneMask = (value: string) => {
        if (!value) return ""
        value = value.replace(/\D/g,'')
        value = value.replace(/(\d{2})(\d)/,"($1) $2")
        value = value.replace(/(\d)(\d{4})$/,"$1-$2")
        return value
      }

    const handlePhone = (event : React.KeyboardEvent<HTMLInputElement>) => {
        const input = event.target as HTMLInputElement
        input.value = phoneMask(input.value) 
      }
      
      const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        try {
            createRecord({
                firstName,
                lastName,
                email,
                phone
            })

            setFirstName('')
            setLastName('')
            setEmail('')
            setPhone('')

            closeNewModal()
            success()
        } catch {
            error()
        }
      }


    return (
        <Modal
            isOpen={newModalOpen}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
            overlayClassName="modal-overlay"
            className="modal-content"
            ariaHideApp={false}
        >
            <button
                onClick={closeNewModal}
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
                        required
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
                        required
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
                        required
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
                        required
                    />
                    <label className="form__label">Telefone</label>
                </InputContainer>

                <button type="submit">Salvar</button>
            </Container>
        </Modal>
    )
}