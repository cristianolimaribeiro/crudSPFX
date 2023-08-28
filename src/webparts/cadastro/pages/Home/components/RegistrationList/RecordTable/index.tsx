/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { FiEdit, FiTrash } from 'react-icons/fi';
import { Container } from './styles'
import { getAll } from "../../../../../services/RecordService";

export const RecordTable = () => {
    const [records] = useState([
        {
            id: 1,
            firstName: 'Cristiano',
            lastName: 'Ribeiro',
            email: 'cristiano.lima.ribeiro@gmail.com',
            phone: '24 981481103'
        },
        {
            id: 2,
            firstName: 'Vanessa',
            lastName: 'Ribeiro',
            email: 'vanessatavaresguedes@gmail.com',
            phone: '24 981481103'
        },
        {
            id: 3,
            firstName: 'Arthur',
            lastName: 'Ribeiro',
            email: 'arthur.ribeiro@gmail.com',
            phone: '24 981481103'
        },
    ])

    useEffect(() => {
        const fetchData = async () => {
            await getAll()
        }

        fetchData()
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
                                    <td><FiEdit size={20} color="orange"/></td>
                                    <td><FiTrash size={20} color="red"/></td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </Container>
    )
}