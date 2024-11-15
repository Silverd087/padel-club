"use client";

// components/layout/Header.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CalendarDays, LogOut, LayoutDashboard } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import { useAuth } from "@/contexts/auth";
import { useScrollToHash } from "@/hooks/useScrollToHash";
import { useRouter } from "next/navigation";

export default function Header() {
  const { isLoggedIn, user, logout, isLoading } = useAuth();
  const { handleClick } = useScrollToHash();
  const router = useRouter();

  const handleSignOut = () => {
    logout();
    router.push("/");
  };

  // Don't render auth-dependent UI while loading
  if (isLoading) {
    return (
      <header className="flex justify-center items-center w-full border-b border-[#4169E1]/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="mr-4 flex">
            <Link
              className="mr-6 flex items-center space-x-2"
              href="/"
              prefetch={true}
            >
              <CalendarDays className="h-6 w-6 text-[#E17041]" />
              <span className="hidden font-bold sm:inline-block text-[#4169E1]">
                Euphoria Club
              </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              {[
                "courts",
                "events",
                "about",
                "subscription",
                "booking",
                "contact",
              ].map((item) => (
                <Link
                  key={item}
                  className="transition-colors hover:text-[#E17041] text-gray-600"
                  href={`/#${item}`}
                  onClick={(e) => handleClick(e, `#${item}`)}
                  prefetch={true}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="flex justify-center items-center w-full border-b border-[#4169E1]/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="mr-4 flex">
          <Link
            className="mr-6 flex items-center space-x-2"
            href="/"
            prefetch={true}
          >
            <CalendarDays className="h-6 w-6 text-[#E17041]" />
            <span className="hidden font-bold sm:inline-block text-[#4169E1]">
              Euphoria Club
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {[
              "courts",
              "events",
              "about",
              "subscription",
              "booking",
              "contact",
            ].map((item) => (
              <Link
                key={item}
                className="transition-colors hover:text-[#E17041] text-gray-600"
                href={`/#${item}`}
                onClick={(e) => handleClick(e, `#${item}`)}
                prefetch={true}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </nav>
        </div>
        {isLoggedIn ? (
          <div className="ml-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full hover:bg-[#4169E1]/10"
                >
                  <Avatar className="h-8 w-8 border-2 border-[#4169E1]/20">
                    <AvatarImage src={user?.avatar} alt={user?.name} />
                    <AvatarFallback className="bg-[#4169E1]/5 text-[#4169E1]">
                      {user?.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-56 border-[#4169E1]/10"
                align="end"
                forceMount
              >
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="hover:text-[#E17041]">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile Settings</span>
                  </Link>
                </DropdownMenuItem>
                {user?.subscription ? (
                  <DropdownMenuItem disabled className="text-gray-500">
                    <CalendarDays className="mr-2 h-4 w-4 text-[#E17041]" />
                    <span>
                      {user.subscription.remainingReservations} reservations
                      left
                    </span>
                  </DropdownMenuItem>
                ) : (
                  <DropdownMenuItem asChild>
                    <Link
                      href="/subscription"
                      className="text-[#E17041] hover:text-[#E17041]/80"
                    >
                      <CalendarDays className="mr-2 h-4 w-4" />
                      <span>Get a subscription</span>
                    </Link>
                  </DropdownMenuItem>
                )}
                {user?.role === "admin" && (
                  <DropdownMenuItem asChild>
                    <Link
                      href="/admin/dashboard"
                      className="hover:text-[#E17041]"
                    >
                      <LayoutDashboard className="mr-2 h-4 w-4" />
                      <span>Admin Dashboard</span>
                    </Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem
                  onClick={handleSignOut}
                  className="text-red-500 hover:text-red-600 hover:bg-red-50"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <Link href="/login">
            <Button className="ml-auto bg-[#4169E1] text-white hover:bg-[#4169E1]/90">
              Sign In
            </Button>
          </Link>
        )}
      </div>
    </header>
  );
}
