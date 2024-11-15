"use client";
import { useState } from "react";
import ReservationCalendar from "./ReservationCalendar";
import ReservationTable from "./ReservationTable";

export default function ReservationsSection() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  return (
    <section id="reservations" className="mb-12">
      <h2 className="text-2xl font-semibold mb-4 text-[#4169E1]">Reservations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ReservationCalendar 
          selectedDate={selectedDate} 
          onDateSelect={setSelectedDate} 
        />
        <ReservationTable selectedDate={selectedDate} />
      </div>
    </section>
  );
}
