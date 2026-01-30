"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Phone, MapPin, Send, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="contacto" 
      ref={sectionRef}
      className="py-24 md:py-32"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span 
            className={`inline-block mb-4 text-xs font-bold text-accent tracking-widest uppercase transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Contacto
          </span>
          <h2 
            className={`font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6 text-balance transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Estamos{" "}
            <span className="bg-accent text-accent-foreground px-4 py-1 rounded-xl">aquí</span>{" "}
            para ti
          </h2>
          <p 
            className={`text-lg text-muted-foreground leading-relaxed text-pretty transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            ¿Tienes preguntas o quieres comenzar tu camino hacia el bienestar? 
            Escríbenos y te responderemos lo antes posible.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div 
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Nombre</Label>
                  <Input 
                    id="name" 
                    placeholder="Tu nombre" 
                    className="bg-card border-border/50 focus:border-primary rounded-xl h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="tu@email.com" 
                    className="bg-card border-border/50 focus:border-primary rounded-xl h-12"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-foreground">Asunto</Label>
                <Input 
                  id="subject" 
                  placeholder="¿En qué podemos ayudarte?" 
                  className="bg-card border-border/50 focus:border-primary rounded-xl h-12"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">Mensaje</Label>
                <Textarea 
                  id="message" 
                  placeholder="Cuéntanos más sobre lo que necesitas..." 
                  rows={5}
                  className="bg-card border-border/50 focus:border-primary rounded-xl resize-none"
                />
              </div>
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full py-6 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Enviar mensaje
                <Send className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div 
            className={`space-y-8 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div>
              <h3 className="font-serif text-2xl font-medium text-foreground mb-6">
                Información de contacto
              </h3>
              <div className="space-y-4">
                <a 
                  href="mailto:hola@almayser.com" 
                  className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-medium text-foreground">hola@almayser.com</div>
                  </div>
                </a>
                <a 
                  href="tel:+34912345678" 
                  className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Teléfono</div>
                    <div className="font-medium text-foreground">+34 912 345 678</div>
                  </div>
                </a>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Dirección</div>
                    <div className="font-medium text-foreground">Calle Serenidad 42, Madrid</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-medium text-foreground mb-4">Síguenos</h4>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20">
              <h4 className="font-serif text-lg font-medium text-foreground mb-4">
                Horario de atención
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Lunes - Viernes</span>
                  <span className="text-foreground font-medium">9:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sábados</span>
                  <span className="text-foreground font-medium">10:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Domingos</span>
                  <span className="text-foreground font-medium">Cerrado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
