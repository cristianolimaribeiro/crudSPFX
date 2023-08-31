/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { ReactNode, createContext, useContext, useState } from "react";

type ModalProviderType = {
    children: ReactNode
}

type ModalContextData = {
    newModalOpen: boolean,
    editModalOpen: boolean,
    selectedRecordId: number,
    openNewModal: () => void,
    closeNewModal: () => void
    openEditModal: (id: number) => void,
    closeEditModal: () => void
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData)

export const ModalProvider = ({ children }: ModalProviderType) => {
    const [newModalOpen, setNewModalOpen] = useState<boolean>(false)
    const [editModalOpen, setEditModalOpen] = useState<boolean>(false)
    const [selectedRecordId, setSelectedRecordId] = useState<number >(0);

    const openNewModal = () => {
        setNewModalOpen(true)
    }
    const closeNewModal = () => {
        setNewModalOpen(false)
    }
    const openEditModal = (id: number) => {
        setSelectedRecordId(id)
        setEditModalOpen(true)
    }
    const closeEditModal = () => {
        setEditModalOpen(false)
    }
    
    return (
        <ModalContext.Provider value={{ newModalOpen, openNewModal, closeNewModal, editModalOpen, openEditModal, closeEditModal, selectedRecordId}}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => {
    const context = useContext(ModalContext)

    return context

}