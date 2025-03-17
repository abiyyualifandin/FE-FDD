"use client";
import { useState } from "react";
import { useAuth } from "@/auth/presentation/providers/LoginProvider";
import { LoginUseCase } from "./login";
import { AuthRepository } from "@/auth/data/repositories/authRepository";

export function useLogin() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const loginUseCase = new LoginUseCase(new AuthRepository());

  const handleLogin = async () => {
    try {
      const token = await loginUseCase.execute(email, password);
      login(token);
    } catch (err) {
      setError("Login failed");
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleLogin,
  };
}
