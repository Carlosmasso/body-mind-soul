"use client"

import { useEffect, useState, useRef } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "María García",
    role: "Terapia Individual",
    content: "Encontré en Gaian el espacio seguro que necesitaba para reconectar conmigo misma. Mi terapeuta me ha guiado con mucha empatía.",
    rating: 5,
    avatar: "MG"
  },
  {
    name: "Carlos Ruiz",
    role: "Terapia de Pareja",
    content: "Las sesiones de pareja nos ayudaron a comunicarnos mejor. Ahora entendemos nuestras diferencias como fortalezas.",
    rating: 5,
    avatar: "CR"
  },
  {
    name: "Ana Martínez",
    role: "Mindfulness",
    content: "Los talleres de mindfulness cambiaron mi forma de manejar el estrés. Los productos de aromaterapia son un complemento perfecto.",
    rating: 5,
    avatar: "AM"
  },
  {
    name: "Laura Sánchez",
    role: "Terapia Familiar",
    content: "Gracias a la terapia familiar, hemos mejorado mucho nuestra dinámica en casa. El ambiente es muy acogedor.",
    rating: 5,
    avatar: "LS"
  }
]

export function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section 
      ref={sectionRef}
      className="py-24 md:py-32 bg-secondary/30"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span 
            className={`inline-block mb-4 text-xs font-bold text-accent tracking-widest uppercase transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Testimonios
          </span>
          <h2 
            className={`font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6 text-balance transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Lo que dicen{" "}
            <span className="text-primary inline-block hover:scale-105 transition-transform duration-300">nuestros clientes</span>
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div 
            className={`relative transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-sm border border-border/50">
              {/* Stars */}
              <div className="flex gap-1 mb-6 justify-center">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 fill-accent text-accent" 
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-xl md:text-2xl text-foreground text-center leading-relaxed mb-8">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-medium text-primary">
                    {testimonials[currentIndex].avatar}
                  </span>
                </div>
                <div className="text-left">
                  <p className="font-medium text-foreground">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-3 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full border-border hover:bg-secondary hover:border-primary transition-all duration-300 bg-transparent"
                aria-label="Testimonio anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              
              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? "bg-primary w-6" 
                        : "bg-border hover:bg-primary/50"
                    }`}
                    aria-label={`Ir a testimonio ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full border-border hover:bg-secondary hover:border-primary transition-all duration-300 bg-transparent"
                aria-label="Siguiente testimonio"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
