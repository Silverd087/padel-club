"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Calendar as CalendarIcon,
  Users,
  LayoutDashboard,
  BookOpen,
  Mail,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
  icon: React.ElementType;
  href: string;
  children: React.ReactNode;
}

function NavItem({
  icon: Icon,
  href,
  children,
  className,
  ...props
}: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 rounded-lg px-3 py-2 text-white/70 transition-colors hover:bg-primary-light hover:text-white group",
        className
      )}
      {...props}
    >
      <Icon className="size-4" />
      <span className="text-sm">{children}</span>
      <ChevronRight className="ml-auto size-4 opacity-50 group-hover:text-secondary" />
    </Link>
  );
}

export default function Sidebar() {
  return (
    <div className="w-64 bg-black shadow-lg">
      <div className="flex justify-center h-screen w-64 flex-col bg-black border-r border-black">
        <div className="flex h-14 items-center border-b border-white/10 px-4">
          <div className="flex items-center gap-2">
            <div className="rounded-md bg-secondary p-2">
              <div className="size-4 rounded-sm bg-white/20" />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-sm font-semibold text-white">Padel Club</h2>
              <p className="text-xs text-white">Admin Dashboard</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="ml-auto hover:text-secondary-light"
          >
            <ChevronRight className="size-4 text-zinc-400" />
          </Button>
        </div>
        <ScrollArea className="flex-1 px-2">
          <nav className="flex flex-col gap-1 p-2">
            <NavItem icon={LayoutDashboard} href="#analytics">
              Analytics
            </NavItem>
            <NavItem icon={CalendarIcon} href="#reservations">
              Reservations
            </NavItem>
            <NavItem icon={Mail} href="#messages">
              Messages
            </NavItem>
            <NavItem icon={Users} href="#membership">
              Membership
            </NavItem>
            <NavItem icon={BookOpen} href="#events">
              Events
            </NavItem>
          </nav>
        </ScrollArea>
        <div className="mt-auto border-t border-zinc-800 p-4">
          <div className="flex items-center gap-2">
            <Avatar className="size-8 ring-2 ring-secondary/20">
              <AvatarImage
                src="/placeholder.svg?height=32&width=32"
                alt="Admin"
              />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <p className="text-sm font-medium text-white">Admin User</p>
              <p className="text-xs text-white">admin@padelclub.com</p>
            </div>
            <Button variant="ghost" size="icon" className="ml-auto">
              <ChevronRight className="size-4 text-zinc-400" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
