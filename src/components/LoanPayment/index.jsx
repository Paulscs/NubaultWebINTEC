// src/components/LoanPayment/index.jsx

import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const LoanPayment = () => {
  const { loanId } = useParams();
  const history = useHistory();
  const [loanDetails, setLoanDetails] = useState(null);
  const [accountDetails, setAccountDetails] = useState(null);

  useEffect(() => {
    // Fetch loan details
    axios.get(`/api/Loan/${loanId}`)
      .then(response => setLoanDetails(response.data))
      .catch(error => console.error('Error fetching loan details:', error));

    // Fetch user account details
    axios.get(`/api/Account/${/* Your account ID here */}`)
      .then(response => setAccountDetails(response.data))
      .catch(error => console.error('Error fetching account details:', error));
  }, [loanId]);

  const handlePayment = async () => {
    try {
      // Get the account ID and user ID from the fetched details
      const accountId = accountDetails.id; // Update this based on your AccountResponseDto structure
      const userId = accountDetails.userId;

      // Make a payment request to the backend
      await axios.get(`/api/Product/Loan/Pay?userId=${userId}&accountId=${accountId}&loanId=${loanId}`);

      // Redirect to a success page or update the UI accordingly
      alert('Payment successful');
      history.push('/success'); // Redirect to a success page
    } catch (error) {
      // Handle errors
      console.error('Error making payment:', error);
      alert('Payment failed');
    }
  };

  if (!loanDetails || !accountDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Loan Payment</h2>
      <p>Loan Amount: {loanDetails.amount}</p>
      <p>Account Balance: {accountDetails.balance}</p>
      {/* Add your payment form here */}
      <button onClick={handlePayment}>Pay Loan</button>
    </div>
  );
};

export default LoanPayment;
