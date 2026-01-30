"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, Check, Calendar, Clock, MapPin, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { LucideIcon } from "lucide-react"

interface ServicePageProps {
  title: string
  subtitle: string
  description: string
  icon: LucideIcon
  heroImage: string
  benefits: string[]
  process: {
    step: number
    title: string
    description: string
  }[]
  pricing: {
    name: string
    price: string
    duration: string
    features: string[]
    popular?: boolean
  }[]
  faqs: {
    question: string
    answer: string
  }[]
}

export function ServicePageLayout({
  title,
  subtitle,
  description,
  icon: Icon,
  heroImage,
  benefits,
  process,
  pricing,
  faqs,
}: ServicePageProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <Link 
            href="/#servicios"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a servicios
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Icon className="w-8 h-8 text-primary" />
                holaaa
              </div>
              <span className="text-xs font-bold text-primary tracking-widest uppercase mb-4 block">
                {subtitle}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6 text-balance">
                {title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
                {description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Reservar cita
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 bg-transparent"
                >
                  Contactar
                </Button>
              </div>
            </div>
            
            <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3" />
                <img 
                  src={heroImage || "/placeholder.svg"} 
                  alt={title}
                  className="relative rounded-3xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
              Beneficios de este{" "}
              <span className="fancy-underline">servicio</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 rounded-2xl bg-card border border-border/50"
              >
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-primary tracking-widest uppercase mb-4 block">
              El proceso
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
              Cómo{" "}
              <span className="highlight-text">trabajamos</span>
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <div 
                key={index}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif text-xl font-medium">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="w-px h-full bg-border mt-4" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-primary tracking-widest uppercase mb-4 block">
              Tarifas
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
              Planes y{" "}
              <span className="bg-accent/30 px-3 py-1 rounded-xl">precios</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((plan, index) => (
              <Card 
                key={index}
                className={`relative bg-card border-border/50 ${plan.popular ? "border-primary shadow-lg" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      Más popular
                    </span>
                  </div>
                )}
                <CardContent className="p-6 pt-8">
                  <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="font-serif text-4xl font-medium text-foreground">
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {plan.duration}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full rounded-full ${plan.popular ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-transparent"}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Reservar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Modalities */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm">Presencial en consulta</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Video className="w-5 h-5 text-primary" />
              <span className="text-sm">Online por videollamada</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
              Preguntas frecuentes
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details 
                key={index}
                className="group bg-card rounded-2xl border border-border/50 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-medium text-foreground pr-4">{faq.question}</span>
                  <span className="text-primary text-xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center bg-primary/5 rounded-3xl p-12 border border-primary/20">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
              Da el primer paso hacia tu bienestar
            </h2>
            <p className="text-muted-foreground mb-8">
              Reserva tu primera consulta gratuita y descubre cómo podemos ayudarte.
            </p>
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Agendar consulta gratuita
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
