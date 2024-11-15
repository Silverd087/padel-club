"use client";
// app/dashboard/components/events/EventsSection.tsx
import EventsTable from "./EventsTable";

export default function EventsSection() {
  return (
    <section id="events">
      <h2 className="text-2xl font-semibold mb-4">Events and Announcements</h2>
      <EventsTable />
    </section>
  );
}
