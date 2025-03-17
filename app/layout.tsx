import { LoginProvider } from "@/auth/presentation/providers/LoginProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LoginProvider>{children}</LoginProvider>
      </body>
    </html>
  );
}
