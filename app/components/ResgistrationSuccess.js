"use client";

const RegistrationSuccess = ({ onBack }) => {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-10 text-center">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-green-600 mb-2">
        Registration Successful!
      </h2>
      <p className="text-gray-600 mb-6">
        Thank you for registering. We&apos;ve sent a confirmation email to you. Our
        team will verify your payment and contact you shortly.
      </p>
      <button
        onClick={onBack}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Back to Courses
      </button>
    </div>
  );
};

export default RegistrationSuccess;