// LoanApplication.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LoanApplication = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [loanDurationMonths, setLoanDurationMonths] = useState('');
  const [userId, setUserId] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [isLoanRequested, setIsLoanRequested] = useState(false);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    // Fetch the user ID from the logged-in user when the component mounts
    const fetchUserId = async () => {
      try {
        const response = await axios.get('/api/User/Logged');
        setUserId(response.data.data.id); // Adjust this line based on the actual structure of the response
      } catch (error) {
        console.error('Error fetching user ID:', error);
      }
    };

    fetchUserId();
  }, []);

  const handleButtonClick = () => {
    setShowButton(false);
    setShowForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Your API endpoint for requesting a loan
      const response = await axios.post('/api/Loan/Request', {
        userId,
        loanAmount: parseFloat(loanAmount),
        loanDurationMonths: parseInt(loanDurationMonths),
      });

      console.log('Loan application successful:', response.data);
      setIsLoanRequested(true);
      setShowForm(false);
      // Handle success, show a success message, or redirect the user
    } catch (error) {
      console.error('Error applying for a loan:', error);
      // Handle error, show an error message, or redirect the user
    }
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      {showButton && (
        <button
          onClick={handleButtonClick}
          className="bg-white border border-black text-black py-2 px-4 rounded-md"
        >
          Aplicar para un préstamo
        </button>
      )}
      {showForm && (
        <form onSubmit={handleSubmit}>
          <label className="block">
            Monto de préstamo:
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              required
              className="block w-full mt-1"
            />
          </label>
          <br />
          <label className="block">
            Duración de préstamo:
            <input
              type="number"
              value={loanDurationMonths}
              onChange={(e) => setLoanDurationMonths(e.target.value)}
              required
              className="block w-full mt-1"
            />
          </label>
          <br />
          <br />
          <button
            type="submit"
            className="bg-white border border-black text-black py-2 px-4 rounded-md"
          >
            Aplicar
          </button>
        </form>
      )}
      {isLoanRequested && (
        <p>
          Has solicitado un préstamo exitosamente.
        </p>
      )}
    </div>
  );
};

export default LoanApplication;
