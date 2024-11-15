"use client";
// app/dashboard/components/messages/MessagesSection.tsx
import MessageList from "./MessageList";

export default function MessagesSection() {
  return (
    <section id="messages" className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Messages</h2>
      <MessageList />
    </section>
  );
}
