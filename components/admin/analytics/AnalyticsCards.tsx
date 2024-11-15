"use client";
// app/dashboard/components/analytics/AnalyticsCards.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, DollarSign, UserCheck } from "lucide-react";
import { analyticsData } from "@/lib/mockData";

const cardConfig = [
  {
    title: "Total Subscriptions",
    value: analyticsData.totalSubscriptions,
    icon: Users,
  },
  {
    title: "Active Subscriptions",
    value: analyticsData.activeSubscriptions,
    icon: UserCheck,
  },
  {
    title: "Total Reservations",
    value: analyticsData.totalReservations,
    icon: Calendar,
  },
  {
    title: "Lifetime Income",
    value: `TND ${analyticsData.lifetimeIncome.toLocaleString()}`,
    icon: DollarSign,
  },
];

export default function AnalyticsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {cardConfig.map((card, index) => (
        <Card
          key={index}
          className="border-2 border-[#4169E1]/10 hover:border-[#E17041]/30 transition-colors"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#4169E1]">
              {card.title}
            </CardTitle>
            <card.icon className="h-4 w-4 text-[#E17041]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#4169E1]">
              {card.value}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
