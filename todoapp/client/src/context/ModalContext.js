import { createContext, useState } from "react";

export const ModalContext = createContext();

export const CustomProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);

  const obj = {
    openModal,
    setOpenModal,
  };

  return <ModalContext.Provider value={obj}>{children}</ModalContext.Provider>;
};
