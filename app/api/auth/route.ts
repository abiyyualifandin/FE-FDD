import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, password } = await request.json();
  if (email === "admin" && password === "admin") {
    return NextResponse.json({ token: "fake-jwt-token" });
  }
  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}
