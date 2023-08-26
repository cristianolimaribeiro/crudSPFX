/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { FiEdit, FiTrash } from 'react-icons/fi';

export const RecordTable = () => {
    // const [records, setRecords] = useState([
    //     {
    //         id: 1,
    //         firstName: 'Cristiano',
    //         lastName: 'Ribeiro',
    //         email: 'cristiano.lima.ribeiro@gmail.com',
    //         phone: '24 981481103'
    //     },
    //     {
    //         id: 1,
    //         firstName: 'Vanessa',
    //         lastName: 'Ribeiro',
    //         email: 'vanessatavaresguedes@gmail.com',
    //         phone: '24 981481103'
    //     },
    //     {
    //         id: 1,
    //         firstName: 'Arthur',
    //         lastName: 'Ribeiro',
    //         email: 'arthur.ribeiro@gmail.com',
    //         phone: '24 981481103'
    //     },
    // ])
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Sobrenome</th>
                    <th>Email</th>
                    <th>Telefone</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Cristiano</td>
                    <td>Lima</td>
                    <td>cristiano.lima.ribeiro@gmail.com</td>
                    <td>24 981481103</td>
                    <td><FiEdit size={20} /></td>
                    <td><FiTrash size={20} /></td>
                </tr>
            </tbody>
        </table>
    )
}