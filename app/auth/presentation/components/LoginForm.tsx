"use client";
import { useLogin } from "@/auth/domain/usecases/useLogin";

export default function LoginForm() {
  const { email, setEmail, password, setPassword, error, handleLogin } = useLogin();

  return (
    <div>
      <h2>Login</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
}
