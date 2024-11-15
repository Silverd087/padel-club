"use client";
// app/dashboard/components/events/EventsTable.tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PlusCircle, Trash2 } from "lucide-react";
import { events } from "@/lib/mockData";

export default function EventsTable() {
  return (
    <Card className="border-2 border-[#4169E1]/10">
      <CardHeader>
        <CardTitle className="text-[#4169E1]">Manage Events</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium text-[#4169E1]">Current Events</h3>
            <Button className="bg-[#E17041] hover:bg-[#E17041]/90 text-white">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add New Event
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Event Title</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {events.map((event) => (
                <TableRow key={event.id}>
                  <TableCell>{event.title}</TableCell>
                  <TableCell>{event.date}</TableCell>
                  <TableCell>
                    <Button variant="destructive" size="sm" className="bg-red-500 hover:bg-red-600">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
