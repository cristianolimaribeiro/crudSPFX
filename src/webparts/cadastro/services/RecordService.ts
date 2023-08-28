import { sp } from '@pnp/sp/presets/all';
import { IRecords } from '../interfaces/IRecords';

const _list = 'Cadastros'

export const getAll = async (isAscending = false) => {
    const result = await sp.web.lists.getByTitle(_list).items
    .select("ID, firstName, lastName, email, phone, Created")
    .orderBy("Created", isAscending)
    .get<IRecords[]>()
    console.log(result);


    
} 