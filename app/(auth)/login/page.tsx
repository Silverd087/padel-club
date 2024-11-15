"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import PageTransition from "@/components/client/layout/PageTransition";
import { useAuth } from "@/contexts/auth";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();
  const { toast } = useToast();
  const { login, user } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await login(email, password);

      if (user?.role === "admin") {
        toast({
          title: "Login Successful",
          description: "Welcome back, Admin!",
        });
        router.push("/admin/dashboard");
      } else {
        toast({
          title: "Login Successful",
          description: "Welcome back!",
        });
        router.push("/");
      }
    } catch (error) {
      console.error("Login failed:", error);
      toast({
        title: "Error",
        description: "Invalid credentials. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <PageTransition>
      <div className="container mx-auto flex items-center justify-center min-h-screen">
        <Card className="w-full max-w-md border-2 border-[#4169E1]/10">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-[#4169E1]">
              Login
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-[#4169E1]/20 focus:border-[#E17041]/50"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-[#4169E1]/20 focus:border-[#E17041]/50"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#E17041] text-white hover:bg-[#E17041]/90 transition-colors"
              >
                Login
              </Button>
            </form>
            <div className="mt-6 text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="text-[#4169E1] hover:text-[#4169E1]/80 hover:underline"
              >
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageTransition>
  );
}
