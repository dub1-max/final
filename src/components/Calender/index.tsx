"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const locations: Record<string, string[]> = {
  Garhoud: ["Connecting Minds", "Pro Box"],
  Deira: ["Biz Space", "Go Biz"],
  "Sheikh Zayed": ["Marina Pearl"],
};

// Generate time slots from 9:00 AM to 5:00 PM (30-minute intervals)
const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 9; hour < 17; hour++) {
    slots.push(`${hour}:00 AM`);
    slots.push(`${hour}:30 AM`);
  }
  return slots;
};

const bookedSlots: Set<string> = new Set(); // Simulating database storage

const sendEmailConfirmation = async (
  email: string,
  location: string,
  center: string,
  slot: string,
  date: string
) => {
  try {
    const response = await fetch("/api/sendemail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, location, center, slot, date }),
    });

    if (response.ok) {
      alert(`Confirmation email sent to ${email} ✅`);
    } else {
      alert("Failed to send confirmation email. Please try again.");
    }
  } catch (error) {
    console.error("Email request failed:", error);
    alert("Error sending email.");
  }
};

export default function CustomCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedCenter, setSelectedCenter] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    setSelectedCenter(null);
    setSelectedSlot(null);
  }, [selectedLocation]);

  const handleBooking = async () => {
    if (selectedLocation && selectedCenter && selectedSlot && email && selectedDate) {
      const dateString = selectedDate.toDateString();
      bookedSlots.add(`${selectedLocation}-${selectedCenter}-${dateString}-${selectedSlot}`);
      await sendEmailConfirmation(email, selectedLocation, selectedCenter, selectedSlot, dateString);
      setSelectedSlot(null);
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white shadow-xl rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-6">📅 Book A Session</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column: Date Picker */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">🗓 Select Date</h3>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            minDate={new Date()}
            className="text-black text-lg p-3 border border-gray-500 rounded-lg w-64 bg-white"
            inline
          />
        </div>

        {/* Right Column: Booking Options */}
        <div>
          {/* Location Selection */}
          <div className="flex justify-center space-x-4 mb-6">
            {Object.keys(locations).map((location) => (
              <motion.button
                key={location}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full transition-all duration-300 text-lg font-medium ${
                  selectedLocation === location ? "bg-blue-600 text-white shadow-lg" : "bg-gray-600 hover:bg-gray-500"
                }`}
                onClick={() => setSelectedLocation(location)}
              >
                {location}
              </motion.button>
            ))}
          </div>

          {/* Business Center Selection */}
          {selectedLocation && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex justify-center space-x-4 mb-6"
            >
              {locations[selectedLocation].map((center) => (
                <motion.button
                  key={center}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full transition-all duration-300 text-lg font-medium ${
                    selectedCenter === center ? "bg-green-600 text-white shadow-lg" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  onClick={() => setSelectedCenter(center)}
                >
                  {center}
                </motion.button>
              ))}
            </motion.div>
          )}

          {/* Time Slot Selection */}
          {selectedCenter && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <h3 className="text-xl font-semibold text-center mb-4">⏳ Select a Time Slot:</h3>
              <div className="grid grid-cols-3 gap-3">
                {generateTimeSlots().map((slot) => {
                  const isBooked = bookedSlots.has(
                    `${selectedLocation}-${selectedCenter}-${selectedDate?.toDateString()}-${slot}`
                  );
                  return (
                    <motion.button
                      key={slot}
                      whileHover={!isBooked ? { scale: 1.05 } : {}}
                      whileTap={!isBooked ? { scale: 0.95 } : {}}
                      disabled={isBooked}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 text-lg font-medium ${
                        selectedSlot === slot
                          ? "bg-blue-600 text-white shadow-lg"
                          : isBooked
                          ? "bg-gray-400 cursor-not-allowed opacity-50"
                          : "bg-gray-700 hover:bg-gray-600"
                      }`}
                      onClick={() => setSelectedSlot(slot)}
                    >
                      {slot}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Email Input & Confirmation */}
          {selectedSlot && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="mt-6">
              <input
                type="email"
                className="w-full p-3 border border-gray-500 bg-gray-800 rounded-lg text-white"
                placeholder="📧 Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBooking}
                disabled={!email}
                className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition-all duration-300 text-lg font-semibold disabled:opacity-50"
              >
                ✅ Confirm Booking
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
