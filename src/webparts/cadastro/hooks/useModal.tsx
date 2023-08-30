import React, { ReactNode, createContext, useContext, useState } from "react";

type ModalProviderType = {
    children: ReactNode
}

type ModalContextData = {
    newModalOpen: boolean,
    openNewModal: () => void,
    closeNewModal: () => void
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData)

export const ModalProvider = ({ children }: ModalProviderType) => {
    const [newModalOpen, setNewModalOpen] = useState<boolean>(false)

    const openNewModal = () => {
        setNewModalOpen(true)
    }
    const closeNewModal = () => {
        setNewModalOpen(false)
    }

    return (
        <ModalContext.Provider value={{ newModalOpen, openNewModal, closeNewModal}}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => {
    const context = useContext(ModalContext)

    return context

}