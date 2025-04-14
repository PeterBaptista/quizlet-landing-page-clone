"use client";
import { NavigationMenuDemo } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/ui/logo";
import { Plus } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Header */}
      <header className="px-6 py-4 flex items-center gap-3">
        <Logo className="h-8 fill-primary" />
        <NavigationMenuDemo />
        <div className="flex items-center justify-center gap-3 w-full">
          <Input placeholder="Pesquisar" className="max-w-[600px]" />
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost">
            <Plus /> Criar
          </Button>
          <Button>Entrar</Button>
        </div>
      </header>
      {/* Hero */}
      {/* Features */}
      {/* Pricing */}
      {/* CTA */}
      {/* Footer */}
    </main>
  );
}
