"use client"

import { useEffect, useState, useRef } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Cómo puedo agendar una cita?",
    answer: "Puedes agendar tu cita a través de nuestro formulario de contacto, llamándonos directamente o enviándonos un mensaje de WhatsApp. Te responderemos en menos de 24 horas."
  },
  {
    question: "¿Las sesiones son presenciales u online?",
    answer: "Ofrecemos ambas modalidades. Puedes elegir sesiones presenciales en nuestro centro o sesiones online desde la comodidad de tu hogar."
  },
  {
    question: "¿Cuánto dura una sesión de terapia?",
    answer: "Las sesiones individuales duran aproximadamente 50-60 minutos. Las sesiones de pareja y familia pueden extenderse hasta 90 minutos."
  },
  {
    question: "¿Los productos tienen envío a domicilio?",
    answer: "Sí, realizamos envíos a todo el país. Los pedidos se procesan en 24-48 horas y el envío tarda entre 3-5 días hábiles."
  },
  {
    question: "¿Ofrecen talleres grupales de mindfulness?",
    answer: "Sí, organizamos talleres grupales mensuales tanto presenciales como online. Consulta nuestro calendario o suscríbete a nuestra newsletter para enterarte de las próximas fechas."
  }
]

export function FAQ() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="py-24 md:py-32"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Header */}
          <div className="lg:sticky lg:top-32">
            <span 
              className={`inline-block mb-4 text-xs font-bold text-primary tracking-widest uppercase transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Preguntas Frecuentes
            </span>
            <h2 
              className={`font-serif text-4xl md:text-5xl font-medium text-foreground mb-6 transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              ¿Tienes{" "}
              <span className="bg-accent/30 px-3 py-1 rounded-xl">dudas</span>?
            </h2>
            <p 
              className={`text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Aquí encontrarás respuestas a las preguntas más comunes. Si no encuentras lo que buscas, no dudes en contactarnos.
            </p>
          </div>

          {/* Accordion */}
          <div 
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border/50 rounded-2xl px-6 data-[state=open]:shadow-md transition-shadow duration-300"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
