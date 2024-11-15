"use client";
// app/dashboard/components/membership/MembershipSection.tsx
import MembershipTable from "./MembershipTable";

export default function MembershipSection() {
  return (
    <section id="membership" className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Membership</h2>
      <MembershipTable />
    </section>
  );
}
