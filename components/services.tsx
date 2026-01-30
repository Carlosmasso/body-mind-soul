"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Brain, Heart, Sparkles, Users, Clock, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    slug: "psicologia-clinica",
    icon: Brain,
    title: "Psicología Clínica",
    description: "Terapia individual para ansiedad, depresión y manejo del estrés con enfoque humanista.",
    features: ["Sesiones de 50 min", "Online o presencial", "Primera consulta gratuita"],
  },
  {
    slug: "terapia-de-pareja",
    icon: Heart,
    title: "Terapia de Pareja",
    description: "Fortalece tu relación y mejora la comunicación con tu ser querido en un espacio seguro.",
    features: ["Sesiones de 90 min", "Metodología Gottman", "Ejercicios prácticos"],
  },
  {
    slug: "terapia-familiar",
    icon: Users,
    title: "Terapia Familiar",
    description: "Sanamos vínculos y construimos dinámicas familiares más saludables y amorosas.",
    features: ["Enfoque sistémico", "Mediación familiar", "Planes personalizados"],
  },
  {
    slug: "mindfulness-meditacion",
    icon: Sparkles,
    title: "Mindfulness y Meditación",
    description: "Talleres grupales e individuales para cultivar la atención plena y reducir el estrés.",
    features: ["Grupos reducidos", "Material incluido", "Sesiones semanales"],
  },
]

const benefits = [
  { icon: Clock, text: "Horarios flexibles" },
  { icon: Shield, text: "100% confidencial" },
  { icon: Heart, text: "Atención personalizada" },
]

export function Services() {
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
      id="servicios" 
      ref={sectionRef}
      className="py-24 md:py-32 bg-secondary/30"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span 
            className={`inline-block mb-4 text-xs font-bold text-primary tracking-widest uppercase transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Nuestros Servicios
          </span>
          <h2 
            className={`font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6 text-balance transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Acompañamiento{" "}
            <span className="bg-primary text-primary-foreground px-4 rounded-xl">profesional</span>{" "}
            para tu bienestar
          </h2>
          <p 
            className={`text-lg text-muted-foreground leading-relaxed text-pretty transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Nuestro equipo de psicólogos certificados te guiará en un proceso de transformación personal con técnicas basadas en evidencia científica.
          </p>
        </div>

        {/* Benefits Bar */}
        <div 
          className={`flex flex-wrap justify-center gap-6 md:gap-12 mb-16 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 text-muted-foreground">
              <benefit.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">{benefit.text}</span>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`group bg-card border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <CardTitle className="font-serif text-2xl font-medium text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full rounded-full border-foreground/20 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
                  asChild
                >
                  <Link href={`/servicios/${service.slug}`}>
                    Más información
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div 
          className={`text-center mt-16 transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            Agenda tu primera consulta gratuita
          </Button>
        </div>
      </div>
    </section>
  )
}
