"use client";
// app/dashboard/components/analytics/AnalyticsSection.tsx
import AnalyticsCards from "./AnalyticsCards";
import AnalyticsCharts from "./AnalyticsCharts";

export default function AnalyticsSection() {
  return (
    <section id="analytics" className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Analytics</h2>
      <AnalyticsCards />
      <AnalyticsCharts />
    </section>
  );
}
