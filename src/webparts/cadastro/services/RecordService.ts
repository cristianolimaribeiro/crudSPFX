import { sp } from '@pnp/sp/presets/all';
import { IRecordRaw } from '../interfaces/raw/IRecordRaw';
import { extracMapItems } from '../repositories/RecordRepository';

const _list = 'Cadastros'

export const getAll = async (isAscending = false) => {
    const result = await sp.web.lists.getByTitle(_list).items
        .select("ID, firstName, lastName, email, phone, Created")
        .orderBy("Created", isAscending)
        .get<IRecordRaw[]>()
    console.log(extracMapItems(result));

    return extracMapItems(result)

}

export const searchItems = async (searchQuery: string) => {

    const result = await sp.web.lists.getByTitle(_list)
        .items.select("ID","firstName", "lastName", "email", "phone", "Created")
        .filter(`substringof('${searchQuery}',firstName) or substringof('${searchQuery}',lastName)`)
        .get<IRecordRaw[]>();
    console.log(extracMapItems(result));
    return extracMapItems(result)
};

