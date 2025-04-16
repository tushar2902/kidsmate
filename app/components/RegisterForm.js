"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

// Create axios instance with base configuration
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1",
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

const RegistrationForm = ({ onSuccess, coursesByAge }) => {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [loadingCourses, setLoadingCourses] = useState(false);

  const urlAgeGroup = searchParams?.get("ageGroup") || '';
  const urlCourseName = searchParams?.get("courseName") || '';

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .required("Full name is required")
      .min(3, "Must be at least 3 characters"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]{10}$/, "Phone must be 10 digits"),
    ageGroup: Yup.string().required("Age group is required"),
    courseName: Yup.string().required("Course is required"),
    paymentScreenshot: Yup.mixed()
      .required("Payment receipt is required")
      .test(
        "fileSize",
        "File too large (max 5MB)",
        (value) => !value || (value && value.size <= 5 * 1024 * 1024)
      )
      .test(
        "fileType",
        "Only JPEG, PNG, or WEBP images",
        (value) =>
          !value ||
          (value &&
            ["image/jpeg", "image/png", "image/webp"].includes(value.type))
      ),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      ageGroup: urlAgeGroup,
      courseName: urlCourseName,
      paymentScreenshot: null,
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      setServerError("");

      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        if (value !== null) formData.append(key, value);
      });

      try {
        const response = await api.post("/register", formData);

        if (response.data.success) {
          onSuccess(response.data);
        } else {
          setServerError(response.data.message || "Registration failed");
        }
      } catch (error) {
        // Handle different types of errors
        if (error.response) {
          // Server responded with error status
          setServerError(error.response.data?.message || "Registration failed");
        } else if (error.request) {
          // Request was made but no response received
          setServerError("Network error. Please check your connection.");
        } else {
          // Other errors
          setServerError("An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    },
  });

  useEffect(() => {
    if (formik.values.ageGroup) {
      setLoadingCourses(true);
      // Simulate API call or filter local data
      setTimeout(() => {
        setFilteredCourses(coursesByAge[formik.values.ageGroup] || []);
        setLoadingCourses(false);
      }, 300);
    } else {
      setFilteredCourses([]);
    }
  }, [formik.values.ageGroup]);

  // Lock the ageGroup field if it came from URL
  const isAgeGroupLocked = !!urlAgeGroup;

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Kidsmate Course Registration
      </h2>

      {serverError && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
          {serverError}
        </div>
      )}

      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            className={`w-full px-3 py-2 border rounded-md ${
              formik.touched.fullName && formik.errors.fullName
                ? "border-red-500"
                : "border-gray-300"
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.fullName}
            </div>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={`w-full px-3 py-2 border rounded-md ${
              formik.touched.email && formik.errors.email
                ? "border-red-500"
                : "border-gray-300"
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.email}
            </div>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={`w-full px-3 py-2 border rounded-md ${
              formik.touched.phone && formik.errors.phone
                ? "border-red-500"
                : "border-gray-300"
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone && (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.phone}
            </div>
          )}
        </div>

        <div>
          <label
            htmlFor="ageGroup"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Age Group
          </label>
          {isAgeGroupLocked ? (
            <div className="p-2 border border-gray-300 rounded-md bg-gray-50">
              {formik.values.ageGroup} years
              <input
                type="hidden"
                id="ageGroup"
                name="ageGroup"
                value={formik.values.ageGroup}
              />
            </div>
          ) : (
            <select
              id="ageGroup"
              name="ageGroup"
              className={`w-full px-3 py-2 border rounded-md ${
                formik.touched.ageGroup && formik.errors.ageGroup
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              onChange={(e) => {
                formik.handleChange(e);
                // Reset courseName when age group changes
                formik.setFieldValue("courseName", "");
              }}
              onBlur={formik.handleBlur}
              value={formik.values.ageGroup}
            >
              <option value="">Select Age Group</option>
              <option value="5-7">5-7 Years</option>
              <option value="8-10">8-10 Years</option>
              <option value="11-13">11-13 Years</option>
              <option value="14-16">14-16 Years</option>
            </select>
          )}
          {formik.touched.ageGroup && formik.errors.ageGroup && (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.ageGroup}
            </div>
          )}
        </div>

        <div>
          <label
            htmlFor="courseName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Course
          </label>
          <select
            id="courseName"
            name="courseName"
            className={`w-full px-3 py-2 border rounded-md ${
              formik.touched.courseName && formik.errors.courseName
                ? "border-red-500"
                : "border-gray-300"
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.courseName}
            disabled={loadingCourses}
          >
            <option value="">Select Course</option>
            {loadingCourses ? (
              <option value="" disabled>
                Loading courses...
              </option>
            ) : (
              filteredCourses.map((course) => (
                <option key={course.title} value={course.title}>
                  {course.title}
                </option>
              ))
            )}
          </select>
          {formik.touched.courseName && formik.errors.courseName && (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.courseName}
            </div>
          )}
        </div>

        {/* ✅ QR Code Display */}
        <div className="my-4 text-center">
          <p className="text-sm text-gray-700 mb-2 font-medium">
            Scan the QR Code below to make the payment:
          </p>
          <img
            src="/qr-code.png"
            alt="UPI Payment QR Code"
            className="mx-auto w-48 h-48 rounded-md border"
          />
        </div>

        <div>
          <label
            htmlFor="paymentScreenshot"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Payment Receipt (Screenshot)
          </label>
          <input
            id="paymentScreenshot"
            name="paymentScreenshot"
            type="file"
            accept="image/jpeg, image/png, image/webp"
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
            onChange={(event) => {
              formik.setFieldValue(
                "paymentScreenshot",
                event.currentTarget.files[0]
              );
            }}
            onBlur={formik.handleBlur}
          />
          {formik.touched.paymentScreenshot &&
            formik.errors.paymentScreenshot && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.paymentScreenshot}
              </div>
            )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </span>
          ) : (
            "Register Now"
          )}
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
