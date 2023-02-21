import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const BookingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h2>Select a date for your booking:</h2>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
      />
    </div>
  );
};

export default BookingCalendar;