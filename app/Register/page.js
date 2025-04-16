"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import RegistrationForm from "../components/RegisterForm";
import RegistrationSuccess from "../components/ResgistrationSuccess";
import { courses } from "../Landing/LandingPage";

const RegistrationPage = () => {
  const router = useRouter();
  const [registrationComplete, setRegistrationComplete] = useState(false);

  const handleRegistrationSuccess = () => {
    setRegistrationComplete(true);
  };

  const handleBackToForm = () => {
    setRegistrationComplete(false);
    router.push("/#courses-display");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {registrationComplete ? (
        <RegistrationSuccess onBack={handleBackToForm} />
      ) : (
        <RegistrationForm
          onSuccess={handleRegistrationSuccess}
          coursesByAge={courses}
        />
      )}
    </div>
  );
};

export default RegistrationPage;
