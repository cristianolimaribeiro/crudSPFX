import React, { ReactNode, createContext, useContext, useState } from "react";
import { IRecords } from "../interfaces/IRecords";
import { getAll } from "../services/RecordService";

type RecordsProviderType = {
    children: ReactNode
}

type RecordsContextData = {
    records: IRecords[],
    getAllRecords: (isAscending?: boolean) => void
}

const RecordsContext = createContext<RecordsContextData>({} as RecordsContextData)

export const RecordsProvider = ({ children }: RecordsProviderType) => {
    const [records, setRecords] = useState<IRecords[]>([])

    const getAllRecords = async (isAscending?: boolean) => {
        const result = await getAll(isAscending)
        setRecords(result)
    }

    return (
        <RecordsContext.Provider value={{ records, getAllRecords }}>
            {children}
        </RecordsContext.Provider>
    )
}

export const useRecords = () => {
    const context = useContext(RecordsContext)

    return context

}