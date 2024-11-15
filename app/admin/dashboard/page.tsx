// app/admin/dashboard/page.tsx
"use client";
import { useEffect } from "react";
import { useAuth } from "@/contexts/auth";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/admin/Sidebar";
import DashboardHeader from "@/components/admin/DashboardHeader";
import AnalyticsSection from "@/components/admin/analytics/AnalyticsSection";
import ReservationsSection from "@/components/admin/reservations/ReservationsSection";
import MessagesSection from "@/components/admin/messages/MessagesSection";
import MembershipSection from "@/components/admin/membership/MembershipSection";
import EventsSection from "@/components/admin/events/EventsSection";

export default function DashboardPage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && (!user || user.role !== "admin")) {
      router.push("/login");
    }
  }, [user, isLoading, router]);

  if (isLoading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-screen bg-[#4169E1]/5">
      <Sidebar />
      <div className="flex-1 overflow-y-auto p-8 bg-white">
        <DashboardHeader />
        <div className="space-y-8">
          <AnalyticsSection />
          <ReservationsSection />
          <MessagesSection />
          <MembershipSection />
          <EventsSection />
        </div>
      </div>
    </div>
  );
}
