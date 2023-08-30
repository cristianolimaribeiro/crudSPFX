import React, { ReactNode, createContext, useContext, useState } from "react";
import { IRecords } from "../interfaces/IRecords";
import { addRecord, getAll } from "../services/RecordService";
import { IRecordInput } from "../interfaces/IRecordInput";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

type RecordsProviderType = {
    children: ReactNode
}

type RecordsContextData = {
    records: IRecords[],
    getAllRecords: (isAscending?: boolean) => void,
    createRecord: (recordInput: IRecordInput) => void,
    success: () => void,
    error: () => void,
}

const RecordsContext = createContext<RecordsContextData>({} as RecordsContextData)

export const RecordsProvider = ({ children }: RecordsProviderType) => {
    const [records, setRecords] = useState<IRecords[]>([])

    const getAllRecords = async (isAscending?: boolean) => {
        const result = await getAll(isAscending)
        setRecords(result)
    }

    const createRecord = async (recordInput: IRecordInput) => {
        const response = await addRecord(recordInput)
        const record: IRecords = {
            id: response.ID,
            firstName: response.firstName,
            lastName: response.lastName,
            email: response.email,
            phone: response.phone
        }
        setRecords([record, ...records])
    }

    const success = () => {
        toast.success('Cadastro realizado com sucesso', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
    const error = () => {
        toast.error('Falha ao gravar o registro', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }

    return (
        <RecordsContext.Provider value={{ records, getAllRecords, createRecord, success, error }}>
            {children}
        </RecordsContext.Provider>
    )
}

export const useRecords = () => {
    const context = useContext(RecordsContext)

    return context

}