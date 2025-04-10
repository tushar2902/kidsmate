'use client'

import { useState } from 'react'
import axios from 'axios'

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    ageGroup: '',
    courseId: '',
    upiTransactionId: ''
  })

  const [receiptFile, setReceiptFile] = useState(null)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFileChange = (e) => {
    setReceiptFile(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    const data = new FormData()
    for (let key in formData) {
      data.append(key, formData[key])
    }
    if (receiptFile) {
      data.append('receipt', receiptFile)
    }

    try {
      const res = await axios.post('http://localhost:5000/api/students/register', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      setMessage('✅ Registration successful!')
      setFormData({
        name: '',
        email: '',
        phone: '',
        ageGroup: '',
        courseId: '',
        upiTransactionId: ''
      })
      setReceiptFile(null)
    } catch (err) {
      setMessage('❌ Registration failed. Please try again.')
      console.error(err)
    }

    setLoading(false)
  }

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">KidsMate Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Child's Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-xl"
        />
        <input
          type="email"
          name="email"
          placeholder="Parent's Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-xl"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-xl"
        />
        <select
          name="ageGroup"
          value={formData.ageGroup}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-xl"
        >
          <option value="">Select Age Group</option>
          <option value="4-6">4 - 6 years</option>
          <option value="7-9">7 - 9 years</option>
          <option value="10-12">10 - 12 years</option>
          <option value="13+">13+ years</option>
        </select>
        <input
          type="text"
          name="course"
          placeholder="Course"
          value={formData.courseId}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-xl"
        />
        <input
          type="text"
          name="upiTransactionId"
          placeholder="UPI Transaction ID"
          value={formData.upiTransactionId}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-xl"
        />

        {/* UPI QR Code */}
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-2">Scan this QR code to make payment:</p>
          <img
            src="/qr-code.png" // Replace with your actual QR image path
            alt="UPI QR Code"
            className="w-48 h-48 mx-auto rounded-lg border"
          />
        </div>

        {/* Receipt Upload */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Upload Payment Receipt</label>
          <input
            type="file"
            accept="image/*,application/pdf"
            onChange={handleFileChange}
            required
            className="w-full p-2 border border-gray-300 rounded-xl"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#6C5CE7] text-white py-3 rounded-xl hover:bg-[#5b4cd8] transition"
        >
          {loading ? 'Registering...' : 'Register Now'}
        </button>

        {message && <p className="text-center mt-4 text-gray-700">{message}</p>}
      </form>
    </div>
  )
}
