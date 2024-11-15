"use client";
// app/dashboard/components/reservations/ReservationCalendar.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { useState, useMemo, useEffect } from "react";
import { hasBookingsOnDate } from "@/lib/bookings";

interface ReservationCalendarProps {
  selectedDate: Date | undefined;
  onDateSelect: (date: Date | undefined) => void;
}

export default function ReservationCalendar({
  selectedDate,
  onDateSelect,
}: ReservationCalendarProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const calendarStyles = useMemo(
    () => ({
      month: { width: "100%" },
      table: { width: "100%" },
      head_cell: { width: "100%" },
      cell: { width: "100%" },
      day: { width: "100%" },
    }),
    []
  );

  const modifierStyles = useMemo(
    () => ({
      booked: { backgroundColor: "rgba(220, 38, 38, 0.1)" },
      available: { backgroundColor: "rgba(34, 197, 94, 0.1)" },
      selected: {
        backgroundColor: "#4169E1",
        color: "white",
        fontWeight: "bold",
      },
    }),
    []
  );

  const renderCalendarContent = () => {
    if (!isClient) {
      return <div className="h-[400px]" />;
    }

    return (
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={onDateSelect}
        className="w-full"
        modifiers={{
          booked: hasBookingsOnDate,
          available: (day) => !hasBookingsOnDate(day),
          selected: (day) =>
            selectedDate?.toDateString() === day.toDateString(),
        }}
        modifiersStyles={modifierStyles}
        styles={calendarStyles}
      />
    );
  };

  return (
    <Card className="w-full border-2 border-[#4169E1]/10">
      <CardHeader>
        <CardTitle className="text-[#4169E1]">Reservation Calendar</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {renderCalendarContent()}
        <div className="mt-4 flex items-center justify-between text-sm">
          <div className="flex items-center">
            <div className="h-4 w-4 rounded-full bg-red-100 mr-2"></div>
            <span className="text-gray-600">Partially or fully booked</span>
          </div>
          <div className="flex items-center">
            <div className="h-4 w-4 rounded-full bg-green-100 mr-2"></div>
            <span className="text-gray-600">Available</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
