"use client";

import { useRouter } from "next/navigation";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useState } from "react";
import RegistrationForm from "../components/RegisterForm";
import RegistrationSuccess from "../components/ResgistrationSuccess";
import { courses } from "../Landing/LandingPage";

function Fallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="text-center py-8">
      <p>Something went wrong:</p>
      <pre className="text-red-500">{error.message}</pre>
      <button
        onClick={resetErrorBoundary}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Try again
      </button>
    </div>
  );
}

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
      <ErrorBoundary FallbackComponent={Fallback}>
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500">
                Loading registration form...
              </div>
            </div>
          }
        >
          {registrationComplete ? (
            <RegistrationSuccess onBack={handleBackToForm} />
          ) : (
            <RegistrationForm
              onSuccess={handleRegistrationSuccess}
              coursesByAge={courses}
            />
          )}
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default RegistrationPage;
