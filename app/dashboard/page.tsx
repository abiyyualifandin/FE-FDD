import { useAuth } from "@/auth/presentation/providers/LoginProvider";

export default function DashboardPage() {
  const { logout } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
