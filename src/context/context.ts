import { createContext, Dispatch, SetStateAction } from "react";

const Context = createContext({} as IModal);
export default Context;

interface IModal {
    openModal: boolean,
    setOpenModal: Dispatch<SetStateAction<boolean>>
}