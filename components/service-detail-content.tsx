"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, Clock, MapPin, Euro } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { ServiceDetail } from "@/lib/services-data"
import { servicesData } from "@/lib/services-data"

interface ServiceDetailContentProps {
  service: ServiceDetail
}

export function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  const [isVisible, setIsVisible] = useState(false)
  // const Icon = service.icon

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Get other services for recommendations
  const otherServices = servicesData.filter(s => s.slug !== service.slug).slice(0, 2)

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <Link 
            href="/#servicios" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a servicios
          </Link>
          
          <div className="max-w-4xl">
            {/* <div 
              className={`w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mb-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Icon className="w-10 h-10 text-primary" />
            </div> */}
            
            <h1 
              className={`font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-4 transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {service.title}
            </h1>
            
            <p 
              className={`text-xl md:text-2xl text-muted-foreground mb-8 transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {service.subtitle}
            </p>

            {/* Quick info */}
            <div 
              className={`flex flex-wrap gap-6 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="flex items-center gap-2 text-foreground">
                <Clock className="w-5 h-5 text-primary" />
                <span>{service.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>{service.modality}</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Euro className="w-5 h-5 text-primary" />
                <span>{service.price}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              ¿En qué consiste?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {service.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4 text-center">
            ¿Qué puedes{" "}
            <span className="fancy-underline">lograr</span>?
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Estos son algunos de los beneficios que experimentarás trabajando juntos
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {service.benefits.map((benefit, index) => (
              <Card key={index} className="bg-card border-border/50 hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4 text-center">
            ¿Cómo{" "}
            <span className="highlight-text">funciona</span>?
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Un proceso claro y estructurado para acompañarte en tu camino
          </p>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {service.process.map((step, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif text-xl font-medium">
                      {step.step}
                    </div>
                    {index < service.process.length - 1 && (
                      <div className="w-0.5 h-12 bg-primary/20 mx-auto mt-2" />
                    )}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4 text-center">
            Preguntas{" "}
            <span className="bg-accent/30 px-3 py-1 rounded-xl">frecuentes</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Resolvemos tus dudas más comunes sobre este servicio
          </p>

          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {service.faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card rounded-2xl px-6 border border-border/50"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              ¿Listo para empezar tu transformación?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Da el primer paso hacia tu bienestar. La primera consulta es gratuita y sin compromiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
              >
                Agendar consulta gratuita
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full px-8 border-foreground/20 bg-transparent"
                asChild
              >
                <Link href="/#contacto">
                  Contactar por WhatsApp
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-8 text-center">
            Otros servicios que podrían interesarte
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {otherServices.map((otherService) => {
              const OtherIcon = otherService.icon
              return (
                <Link key={otherService.slug} href={`/servicios/${otherService.slug}`}>
                  <Card className="bg-card border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                        <OtherIcon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                        {otherService.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {otherService.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                        Ver más <ArrowRight className="w-4 h-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
