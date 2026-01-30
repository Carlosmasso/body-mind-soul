"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Quote } from "lucide-react"

const team = [
  {
    name: "Dra. María García",
    role: "Psicóloga Clínica",
    specialty: "Ansiedad y estrés",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. Carlos Ruiz",
    role: "Psicoterapeuta",
    specialty: "Terapia de pareja",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Laura Martínez",
    role: "Especialista en Mindfulness",
    specialty: "Meditación y bienestar",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
]

const values = [
  { number: "500+", label: "Pacientes atendidos" },
  { number: "8", label: "Años de experiencia" },
  { number: "98%", label: "Satisfacción" },
  { number: "24/7", label: "Soporte online" },
]

export function About() {
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
      id="nosotros" 
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
            Sobre Nosotros
          </span>
          <h2 
            className={`font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6 text-balance transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Un equipo{" "}
            <span className="highlight-text">dedicado</span>{" "}
            a tu{" "}
            <span className="bg-accent/30 px-3 py-1 rounded-xl">bienestar</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground leading-relaxed text-pretty transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Somos un grupo de profesionales apasionados por la salud mental y el bienestar integral, 
            comprometidos con acompañarte en tu viaje de autodescubrimiento.
          </p>
        </div>

        {/* Quote */}
        <div 
          className={`max-w-4xl mx-auto mb-20 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-sm border border-border/50 hover:shadow-lg transition-all duration-500">
            <Quote className="absolute top-6 left-6 w-10 h-10 text-accent/50" />
            <blockquote className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed text-center italic relative z-10">
              &ldquo;El mayor descubrimiento de cualquier generación es que un ser humano puede alterar su vida alterando su actitud mental.&rdquo;
            </blockquote>
            <p className="text-center mt-6 text-muted-foreground font-medium">— William James</p>
          </div>
        </div>

        {/* Stats */}
        <div 
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {values.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`font-serif text-4xl md:text-5xl font-medium mb-2 ${
                index % 2 === 0 ? "text-primary" : "text-accent"
              }`}>
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team */}
        <div className="max-w-4xl mx-auto">
          <h3 
            className={`font-serif text-2xl md:text-3xl font-medium text-foreground text-center mb-12 transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Conoce a nuestro equipo
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className={`group text-center transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden bg-secondary">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h4 className="font-serif text-xl font-medium text-foreground mb-1">
                  {member.name}
                </h4>
                <p className="text-sm text-primary font-medium mb-1">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
