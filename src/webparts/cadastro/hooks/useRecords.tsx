import React, { ReactNode, createContext, useContext, useState } from "react";
import { IRecords } from "../interfaces/IRecords";
import { addRecord, editRecord, getAll } from "../services/RecordService";
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
    updateRecord:(id: number, recordInput: IRecordInput) => void,
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
    const updateRecord = async (id: number, recordInput: IRecordInput) => {
        await editRecord(id, recordInput);
    
        const newRecords = records.map(record => {
          if(record.id === id) {
            const rec: IRecords = {
                id: id,
                firstName: record.firstName,
                lastName: record.lastName,
                email: record.email,
                phone: record.phone
            }
            return rec;
          }
    
          return record;
        })
    
        setRecords(newRecords);
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
        <RecordsContext.Provider value={{ records, getAllRecords,updateRecord, createRecord, success, error }}>
            {children}
        </RecordsContext.Provider>
    )
}

export const useRecords = () => {
    const context = useContext(RecordsContext)

    return context

}