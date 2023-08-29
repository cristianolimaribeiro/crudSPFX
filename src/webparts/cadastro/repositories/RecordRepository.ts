import { IRecords } from "../interfaces/IRecords"
import { IRecordRaw } from "../interfaces/raw/IRecordRaw"

export const extracMapItems = (getRecords: IRecordRaw[]) => {
    const mappedRecordItems: IRecords[] = []

    getRecords.forEach(getRecord => {
        mappedRecordItems.push({
            id: getRecord.Id,
            title: getRecord.Title,
            created: getRecord.Created,
            firstName: getRecord.firstName,
            lastName: getRecord.lastName,
            email: getRecord.email,
            phone: getRecord.phone
        })
    })

    return mappedRecordItems
}