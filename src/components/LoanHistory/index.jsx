// src/components/LoanHistory/index.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LoanHistory = ({ userId }) => {
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserLoans = async () => {
      try {
        const response = await axios.get(`/api/Loan/User/${userId}`);
        setLoans(response.data.data);
      } catch (error) {
        console.error('Error fetching user loans:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserLoans();
  }, [userId]);

  return (
    <div className="bg-gray-100 p-6">
      <h2>Loan History</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {loans.map((loan) => (
            <li key={loan.id}>
              {/* Display loan details here, adjust based on your LoanResponseDto */}
              {loan.amount} - {loan.durationMonths} months
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LoanHistory;
