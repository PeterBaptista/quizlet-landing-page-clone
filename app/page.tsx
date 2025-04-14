"use client";
import { NavigationMenuDemo } from "@/components/navigation";
import { Logo } from "@/components/ui/logo";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Header */}
      <header className="px-3 flex items-center">
        <Logo className="h-8" />
        <NavigationMenuDemo />
      </header>
      {/* Hero */}
      {/* Features */}
      {/* Pricing */}
      {/* CTA */}
      {/* Footer */}
    </main>
  );
}
