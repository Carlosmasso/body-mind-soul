import Link from "next/link"
import { Instagram, Facebook, Mail } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-serif text-2xl font-medium text-foreground">
              Alma & Ser
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Tu espacio de bienestar integral donde el cuidado del cuerpo, la mente y el alma se unen en armonía.
            </p>
            <div className="flex gap-3 mt-6">
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="mailto:hola@almayser.com" 
                className="w-9 h-9 rounded-full bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Servicios</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#servicios" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                  Psicología Clínica
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                  Terapia de Pareja
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                  Terapia Familiar
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                  Mindfulness
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Información</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#nosotros" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="#productos" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                  Tienda
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Recibe consejos de bienestar y ofertas exclusivas.
            </p>
            <form className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Tu email" 
                className="bg-card border-border/50 focus:border-primary rounded-full h-10 text-sm"
              />
              <Button 
                type="submit" 
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-4"
              >
                Enviar
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 Alma & Ser. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                Política de Privacidad
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                Términos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
