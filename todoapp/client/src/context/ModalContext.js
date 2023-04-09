import { createContext, useState } from "react";

export const ModalContext = createContext();

export const CustomProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [editEl, setEditEl] = useState(null);

  const obj = {
    modalOpen,
    setModalOpen,
    editEl,
    setEditEl,
  };

  return <ModalContext.Provider value={obj}>{children}</ModalContext.Provider>;
};
