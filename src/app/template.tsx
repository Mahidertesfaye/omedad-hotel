"use client";

import { PageTransition } from "@/components/layout/PageTransition";

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PageTransition>{children}</PageTransition>;
}
