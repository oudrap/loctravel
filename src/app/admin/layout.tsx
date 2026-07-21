import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LocTravel CMS Admin Panel",
  description: "Secure Content Management System for LocTravel destination guides and articles.",
  robots: "noindex, nofollow"
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="dark bg-slate-950 min-h-screen text-slate-100 flex flex-col">{children}</div>;
}
