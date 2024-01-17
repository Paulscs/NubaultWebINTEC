// src/contexts/LoanContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const LoanContext = createContext();

export const LoanProvider = ({ children }) => {
  const [loanHistory, setLoanHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLoanHistory = async (userId) => {
    // Your fetch logic goes here
  };

  useEffect(() => {
    // Fetch initial loan history, if needed
  }, []);

  return (
    <LoanContext.Provider value={{ loanHistory, loading, fetchLoanHistory }}>
      {children}
    </LoanContext.Provider>
  );
};

export const useLoan = () => useContext(LoanContext);
