import React from "react";
import { NavHeader } from "./components/NavHeader";
import { Header } from "./components/Header";
import { RegistrationList } from "./components/RegistrationList";


export const Home = () => {
    return (
        <>
            <NavHeader />
            <Header />
            <RegistrationList />
        </>
    )
}