"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/auth/presentation/providers/LoginProvider";

export default function HomePage() {
  const { token } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (token) {
      router.replace("/dashboard"); // Jika sudah login, ke dashboard
    } else {
      router.replace("/auth"); // Jika belum login, ke halaman login
    }
  }, [token, router]);

  return <p>Redirecting...</p>;
}
