"use client";
// app/dashboard/components/reservations/ReservationTable.tsx
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { reservations } from "@/lib/mockData";

interface ReservationTableProps {
  selectedDate: Date | undefined;
}

export default function ReservationTable({
  selectedDate,
}: ReservationTableProps) {
  // Filter reservations based on selected date
  const filteredReservations = reservations.filter((reservation) => {
    if (!selectedDate) return true;

    const reservationDate = new Date(reservation.date);
    return (
      reservationDate.getDate() === selectedDate.getDate() &&
      reservationDate.getMonth() === selectedDate.getMonth() &&
      reservationDate.getFullYear() === selectedDate.getFullYear()
    );
  });

  return (
    <Card className="border-2 border-[#4169E1]/10">
      <CardHeader>
        <CardTitle className="text-[#4169E1]">
          {selectedDate
            ? `Reservations for ${selectedDate.toLocaleDateString()}`
            : "All Reservations"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableCaption>
            {filteredReservations.length
              ? `Showing ${filteredReservations.length} reservation(s)`
              : "No reservations found for this date"}
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Time</TableHead>
              <TableHead>Court</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredReservations.length > 0 &&
              filteredReservations.map((reservation) => (
                <TableRow key={reservation.id}>
                  <TableCell>{reservation.time}</TableCell>
                  <TableCell>{reservation.court}</TableCell>
                  <TableCell>{reservation.user}</TableCell>
                  <TableCell>
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-[#4169E1]/10 text-[#4169E1]">
                      Confirmed
                    </span>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
