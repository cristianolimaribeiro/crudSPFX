import React from "react";
import { NavHeader } from "./components/NavHeader";
import { Header } from "./components/Header";
import { RegistrationList } from "./components/RegistrationList";
import { NewRecordModal } from "./components/Modals/NewRecordsModal";


export const Home = () => {
    return (
        <>
            <NavHeader />
            <Header />
            <RegistrationList />
            <NewRecordModal />
        </>
    )
}