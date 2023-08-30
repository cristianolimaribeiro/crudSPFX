import { IRecordRaw } from "./raw/IRecordRaw";

export type IRecordInput = Pick<IRecordRaw, 'firstName' | 'lastName' | 'email' | 'phone' >