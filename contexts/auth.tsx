"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type UserRole = "admin" | "client";

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  subscription?: {
    id: string;
    type: string;
    remainingReservations: number;
    expiryDate: string;
  };
}

interface AuthContextType {
  isLoggedIn: boolean;
  isLoading: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUser = document.cookie
      .split("; ")
      .find((row) => row.startsWith("user="));

    if (storedUser) {
      try {
        const userData = JSON.parse(
          decodeURIComponent(storedUser.split("=")[1])
        );
        setUser(userData);
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Error parsing stored user data:", error);
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Mock credentials
      const validCredentials = {
        admin: {
          email: "admin@example.com",
          password: "admin123",
          data: {
            id: "1",
            name: "Admin User",
            email: "admin@example.com",
            role: "admin" as UserRole,
            avatar: "/placeholder.svg?height=100&width=100",
            subscription: {
              id: "sub_1",
              type: "Premium",
              remainingReservations: 999,
              expiryDate: "2024-12-31",
            },
          },
        },
        user: {
          email: "user@example.com",
          password: "user123",
          data: {
            id: "2",
            name: "Client User",
            email: "user@example.com",
            role: "client" as UserRole,
            avatar: "/placeholder.svg?height=100&width=100",
            subscription: {
              id: "sub_2",
              type: "Basic",
              remainingReservations: 5,
              expiryDate: "2024-06-30",
            },
          },
        },
      };

      let userData: User | null = null;

      // Check credentials
      if (
        email === validCredentials.admin.email &&
        password === validCredentials.admin.password
      ) {
        userData = validCredentials.admin.data;
      } else if (
        email === validCredentials.user.email &&
        password === validCredentials.user.password
      ) {
        userData = validCredentials.user.data;
      }

      if (!userData) {
        throw new Error("Invalid credentials");
      }

      // Set cookie and update state
      document.cookie = `user=${encodeURIComponent(
        JSON.stringify(userData)
      )}; path=/`;
      setUser(userData);
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    document.cookie = "user=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
