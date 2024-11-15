"use client";
// app/dashboard/components/membership/MembershipTable.tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { membershipPlans } from "@/lib/mockData";

export default function MembershipTable() {
  return (
    <Card className="border-2 border-[#4169E1]/10">
      <CardHeader>
        <CardTitle className="text-[#4169E1]">
          Update Membership Prices
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Plan</TableHead>
              <TableHead>Current Price</TableHead>
              <TableHead>New Price</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {membershipPlans.map((plan) => (
              <TableRow key={plan.id}>
                <TableCell>{plan.name}</TableCell>
                <TableCell>${plan.price.toFixed(2)}</TableCell>
                <TableCell>
                  <Input
                    type="number"
                    placeholder="New price"
                    defaultValue={plan.price.toFixed(2)}
                    className="border-[#4169E1]/20 focus:border-[#E17041]/50"
                  />
                </TableCell>
                <TableCell>
                  <Button
                    size="sm"
                    className="bg-[#E17041] hover:bg-[#E17041]/90 text-white"
                  >
                    Update
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
