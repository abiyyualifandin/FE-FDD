"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";

interface AuthContextType {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function LoginProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  const login = (newToken: string) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
    router.push("/dashboard");
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    router.push("/auth");
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth harus dipakai dalam LoginProvider");
  return context;
}
