// app/dashboard/data/mockData.ts

export const analyticsData = {
  totalSubscriptions: 1250,
  activeSubscriptions: 1100,
  totalReservations: 3500,
  lifetimeIncome: 75000,
};

export const monthlyData = [
  { name: "Jan", subscriptions: 100, reservations: 300, income: 5000 },
  { name: "Feb", subscriptions: 120, reservations: 350, income: 5500 },
  { name: "Mar", subscriptions: 140, reservations: 400, income: 6000 },
  { name: "Apr", subscriptions: 160, reservations: 450, income: 6500 },
  { name: "May", subscriptions: 180, reservations: 500, income: 7000 },
  { name: "Jun", subscriptions: 200, reservations: 550, income: 7500 },
];

export const reservations = [
  {
    id: 1,
    date: "2024-06-01",
    time: "10:00 AM",
    court: "Court 1",
    user: "John Doe",
  },
  {
    id: 2,
    date: "2024-06-01",
    time: "11:00 AM",
    court: "Court 2",
    user: "Jane Smith",
  },
  {
    id: 3,
    date: "2024-06-02",
    time: "2:00 PM",
    court: "Court 1",
    user: "Alice Johnson",
  },
];

export const messages = [
  {
    id: 1,
    from: "user@example.com",
    subject: "Membership Question",
    date: "2024-05-30",
    read: false,
  },
  {
    id: 2,
    from: "another@example.com",
    subject: "Court Availability",
    date: "2024-05-29",
    read: true,
  },
  {
    id: 3,
    from: "newmember@example.com",
    subject: "Sign Up Process",
    date: "2024-05-28",
    read: false,
  },
];

export const membershipPlans = [
  { id: 1, name: "Basic", price: 29.99 },
  { id: 2, name: "Pro", price: 49.99 },
  { id: 3, name: "Elite", price: 79.99 },
];

export const events = [
  { id: 1, title: "Summer Tournament", date: "2024-07-15" },
  { id: 2, title: "Beginner's Workshop", date: "2024-06-20" },
];
