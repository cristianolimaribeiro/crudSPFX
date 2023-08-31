/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from "react";
import { FiEdit, FiTrash } from 'react-icons/fi';
import { Container } from './styles'
import { useRecords } from "../../../../../hooks/useRecords";
import { useModal } from "../../../../../hooks/useModal";


export const RecordTable = () => {
    const { openEditModal } = useModal()
    const { records, getAllRecords } = useRecords()



    useEffect(() => {
        const fetchRecord = () => {
            getAllRecords()
        }

        fetchRecord()
    }, [])
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Sobrenome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th colSpan={2}>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        records.map(record => {
                            return (
                                <tr key={record.id}>
                                    <td>{record.id}</td>
                                    <td>{record.firstName}</td>
                                    <td>{record.lastName}</td>
                                    <td>{record.email}</td>
                                    <td>{record.phone}</td>
                                    <td >


                                        <FiEdit onClick={() => openEditModal(record.id!)} size={20} color="orange" />

                                    </td>
                                    <td><FiTrash size={20} color="red" /></td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </Container>
    )
}