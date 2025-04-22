import React, { useState } from 'react';
import { FaSearch, FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

interface FormData {
  supportType: string;
  schedule: string;
  location: string;
  experience: string;
}

export default function FindMatch() {
  const [formData, setFormData] = useState<FormData>({
    supportType: '',
    schedule: '',
    location: '',
    experience: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-unc-navy mb-4">Find Your Perfect Match</h1>
          <p className="text-xl text-gray-600">
            Tell us your preferences and we'll connect you with the right DSP
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
          <div className="space-y-8">
            {/* Support Type */}
            <div className="relative">
              <label className="flex items-center text-lg font-medium text-gray-700 mb-3">
                <FaSearch className="mr-2 text-unc-blue" />
                Type of Support Needed
              </label>
              <select
                name="supportType"
                value={formData.supportType}
                onChange={handleChange}
                className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-unc-blue focus:ring-unc-blue"
              >
                <option value="">Select support type</option>
                <option value="daily">Daily Living Support</option>
                <option value="medical">Medical Support</option>
                <option value="social">Social Support</option>
                <option value="educational">Educational Support</option>
              </select>
            </div>

            {/* Schedule */}
            <div className="relative">
              <label className="flex items-center text-lg font-medium text-gray-700 mb-3">
                <FaCalendarAlt className="mr-2 text-unc-blue" />
                Preferred Schedule
              </label>
              <select
                name="schedule"
                value={formData.schedule}
                onChange={handleChange}
                className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-unc-blue focus:ring-unc-blue"
              >
                <option value="">Select schedule preference</option>
                <option value="morning">Morning (8am - 12pm)</option>
                <option value="afternoon">Afternoon (12pm - 4pm)</option>
                <option value="evening">Evening (4pm - 8pm)</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>

            {/* Location */}
            <div className="relative">
              <label className="flex items-center text-lg font-medium text-gray-700 mb-3">
                <FaMapMarkerAlt className="mr-2 text-unc-blue" />
                Location
              </label>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-unc-blue focus:ring-unc-blue"
              >
                <option value="">Select location</option>
                <option value="chapel_hill">Chapel Hill</option>
                <option value="carrboro">Carrboro</option>
                <option value="durham">Durham</option>
                <option value="raleigh">Raleigh</option>
              </select>
            </div>

            {/* Experience Level */}
            <div className="relative">
              <label className="flex items-center text-lg font-medium text-gray-700 mb-3">
                <FaClock className="mr-2 text-unc-blue" />
                Experience Level Preferred
              </label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-unc-blue focus:ring-unc-blue"
              >
                <option value="">Select experience level</option>
                <option value="entry">Entry Level</option>
                <option value="intermediate">Intermediate</option>
                <option value="experienced">Experienced</option>
                <option value="any">Any Level</option>
              </select>
            </div>
          </div>

          <div className="mt-10">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-unc-blue to-unc-navy text-white py-3 px-6 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity duration-200 shadow-lg"
            >
              Find Matches
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 