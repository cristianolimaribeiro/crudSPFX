import { sp } from '@pnp/sp/presets/all';
import { IRecordRaw } from '../interfaces/raw/IRecordRaw';
import { extracMapItems } from '../repositories/RecordRepository';
import { IRecordInput } from '../interfaces/IRecordInput';

const _list = 'Cadastros'

// método de busca de todos os itens da lista
export const getAll = async (isAscending = false) => {
    const result = await sp.web.lists.getByTitle(_list).items
        .select("ID, firstName, lastName, email, phone, Created")
        .orderBy("Created", isAscending)
        .get<IRecordRaw[]>()

    return extracMapItems(result)

}
//método de busca de itens da lista
export const searchItems = async (searchQuery: string) => {

    const result = await sp.web.lists.getByTitle(_list)
        .items.select("ID", "firstName", "lastName", "email", "phone", "Created")
        .filter(`substringof('${searchQuery}',firstName) or substringof('${searchQuery}',lastName)`)
        .get<IRecordRaw[]>();
    return extracMapItems(result)
};

// método de gravação de itens na lista
export const addRecord = async (recordInput: IRecordInput) => {
    const { data } = await sp.web.lists.getByTitle(_list).items.add(recordInput)

    return data as IRecordRaw
}

// método de atualização de um registro
export const editRecord = async (id: number, recordInput: IRecordInput) => {
    await sp.web.lists.getByTitle(_list).items.getById(id).update(recordInput);
  }

// método de exclusão de um registro 
export const deleteRecord = async (id: number) => {
    await sp.web.lists.getByTitle(_list).items.getById(id).delete()
}