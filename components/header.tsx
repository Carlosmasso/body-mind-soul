"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    // Solo hacer smooth scroll si estamos en la página principal
    if (!isHomePage) return;

    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-2xl md:text-3xl font-medium text-foreground tracking-wide hover:text-primary transition-colors duration-300"
          >
            Alma & Ser
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              onClick={(e) => handleSmoothScroll(e, "#inicio")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Inicio
            </Link>
            <Link
              href="/#servicios"
              onClick={(e) => handleSmoothScroll(e, "#servicios")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Servicios
            </Link>
            <Link
              href="/#productos"
              onClick={(e) => handleSmoothScroll(e, "#productos")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Productos
            </Link>
            <Link
              href="/#nosotros"
              onClick={(e) => handleSmoothScroll(e, "#nosotros")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Nosotros
            </Link>
            <Link
              href={isHomePage ? "#contacto" : "/#contacto"}
              onClick={(e) => handleSmoothScroll(e, "#contacto")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Contacto
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
              Reservar Cita
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
                onClick={(e) => handleSmoothScroll(e, "#inicio")}
              >
                Inicio
              </Link>
              <Link
                href="/#servicios"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
                onClick={(e) => handleSmoothScroll(e, "#servicios")}
              >
                Servicios
              </Link>
              <Link
                href="/#productos"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
                onClick={(e) => handleSmoothScroll(e, "#productos")}
              >
                Productos
              </Link>
              <Link
                href="/#nosotros"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
                onClick={(e) => handleSmoothScroll(e, "#nosotros")}
              >
                Nosotros
              </Link>
              <Link
                href="/#contacto"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
                onClick={(e) => handleSmoothScroll(e, "#contacto")}
              >
                Contacto
              </Link>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full w-full mt-2">
                Reservar Cita
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
