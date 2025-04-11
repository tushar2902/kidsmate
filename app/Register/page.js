"use client";

import { useState } from "react";
import RegistrationForm from "../components/RegisterForm";
import RegistrationSuccess from "../components/ResgistrationSuccess";

const RegistrationPage = () => {
  const [registrationComplete, setRegistrationComplete] = useState(false);

  const handleRegistrationSuccess = () => {
    setRegistrationComplete(true);
  };

  const handleBackToForm = () => {
    setRegistrationComplete(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {registrationComplete ? (
        <RegistrationSuccess onBack={handleBackToForm} />
      ) : (
        <RegistrationForm onSuccess={handleRegistrationSuccess} />
      )}
    </div>
  );
};

export default RegistrationPage;