"use client";
// app/dashboard/components/messages/MessageList.tsx
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { messages } from "@/lib/mockData";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function MessageList() {
  const [selectedMessage, setSelectedMessage] = useState<
    (typeof messages)[0] | null
  >(null);
  const [reply, setReply] = useState("");

  const handleMessageClick = (message: (typeof messages)[0]) => {
    if (selectedMessage?.id === message.id) {
      setSelectedMessage(null);
      setReply("");
    } else {
      setSelectedMessage(message);
      message.read = true;
    }
  };

  const handleSendReply = async () => {
    if (!selectedMessage || !reply) return;

    try {
      // Here you would typically make an API call to send the email
      await sendEmail(selectedMessage.from, reply);
      setReply("");
      setSelectedMessage(null);
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };

  return (
    <Card className="border-2 border-[#4169E1]/10">
      <CardHeader>
        <CardTitle className="text-[#4169E1]">Inbox</CardTitle>
        <CardDescription className="text-gray-600">
          Messages from the contact form
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px]">
          {messages.map((message) => (
            <div
              key={message.id}
              className="flex items-center space-x-4 p-4 hover:bg-[#4169E1]/5 transition-colors cursor-pointer"
              onClick={() => handleMessageClick(message)}
            >
              <Avatar className="border-2 border-[#4169E1]/20">
                <AvatarFallback className="bg-[#4169E1]/5 text-[#4169E1]">
                  {message.from[0].toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {message.from}
                </p>
                <p className="text-sm text-muted-foreground">
                  {message.subject}
                </p>
              </div>
              <p className="text-sm text-muted-foreground">{message.date}</p>
              {!message.read && (
                <div className="h-2 w-2 rounded-full bg-[#E17041]"></div>
              )}
            </div>
          ))}
        </ScrollArea>

        {selectedMessage && (
          <div className="mt-4 space-y-4 border-t pt-4">
            {/* Original message */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>From: {selectedMessage.from}</span>
                  <span>{selectedMessage.date}</span>
                </div>
                <div className="text-sm text-gray-600">
                  Subject: {selectedMessage.subject}
                </div>
                <p className="text-sm mt-2">{selectedMessage.body}</p>
              </div>
            </div>

            {/* Reply section */}
            <div className="space-y-2">
              <div className="text-sm text-gray-600">
                Reply to: {selectedMessage.from}
              </div>
              <Textarea
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                placeholder="Type your reply..."
                className="w-full"
              />
              <Button
                onClick={handleSendReply}
                className="bg-[#4169E1] text-white"
              >
                Send Reply
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// Helper function for sending emails (implement according to your backend)
const sendEmail = async (to: string, body: string) => {
  // Implement your email sending logic here
  // This could be an API call to your backend
};
