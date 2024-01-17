// src/components/LoanDetails/index.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LoanDetails = ({ loanId }) => {
  const [loanDetails, setLoanDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLoanDetails = async () => {
      try {
        const response = await axios.get(`/api/Loan/${loanId}`);
        setLoanDetails(response.data.data);
      } catch (error) {
        console.error('Error fetching loan details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLoanDetails();
  }, [loanId]);

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      {loading ? (
        <p>Loading...</p>
      ) : loanDetails ? (
        <div>
          {/* Display loan details here, adjust based on your LoanResponseDto */}
          <p>Amount: {loanDetails.amount}</p>
          <p>Duration: {loanDetails.durationMonths} months</p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>No tienes préstamos</p>
      )}
    </div>
  );
};

export default LoanDetails;
