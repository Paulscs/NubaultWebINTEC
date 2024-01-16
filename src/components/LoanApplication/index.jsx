import React, { useState } from 'react';

const LoanApplication = () => {
  // State to manage form fields
  const [formData, setFormData] = useState({
    userId: '', // You may need to get the user ID dynamically
    loanAmount: '',
    loanDurationMonths: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the loan application submission
    console.log('Form submitted:', formData);
    // You can send the form data to your backend API here
  };

  return (
    <div>
      <h2>Loan Application</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Loan Amount:
          <input
            type="number"
            name="loanAmount"
            value={formData.loanAmount}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Loan Duration (months):
          <input
            type="number"
            name="loanDurationMonths"
            value={formData.loanDurationMonths}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default LoanApplication;
