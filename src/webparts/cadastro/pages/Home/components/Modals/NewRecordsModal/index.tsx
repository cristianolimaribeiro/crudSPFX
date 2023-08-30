import React from "react";
import Modal from 'react-modal'
import { useModal } from "../../../../../hooks/useModal";
import { FiX } from "react-icons/fi";

export const NewRecordModal = () => {
    const {newModalOpen, closeNewModal} = useModal()
    return (
        <Modal
            isOpen = {newModalOpen}
            ariaHideApp = {false}
            shouldCloseOnEsc = {true}
            shouldCloseOnOverlayClick = {true}
            overlayClassName= "modal-overlay"
            className="modal-content"
        >
            <button 
                onClick={closeNewModal}
                // className="modal-close"
            >
                <FiX />
            </button>
        </Modal>
    )
}