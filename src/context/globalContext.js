"use client";
//NOTE: just replace 'Global' with your contextGlobal, wrap MasterContextProvider with GlobalContextProvider & started to develop
import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within an GlobalContextProvider');
  }
  return context;
}
export const GlobalContextProvider = ({ children }) => {
  const [openScheduleDemo, setOpenDemo] = useState(false);
  const [openScheduleForm, setOpenForm] = useState(false);
  const setOpenScheduleDemo = (bool) => {
    setOpenForm(false);
    setOpenDemo(bool);
  }
  const setOpenScheduleForm = (bool) => {
    setOpenDemo(false);
    setOpenForm(bool);
  }
  const ContextValue = {
    openScheduleDemo,
    setOpenScheduleDemo,

    openScheduleForm,
    setOpenScheduleForm,
  }
  return (
    <GlobalContext.Provider value={ContextValue}>
      {children}
    </GlobalContext.Provider>
  )
}