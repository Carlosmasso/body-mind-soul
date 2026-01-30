"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { ArrowRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const posts = [
  {
    title: "5 técnicas de respiración para calmar la ansiedad",
    excerpt: "Descubre ejercicios simples que puedes hacer en cualquier momento para reducir el estrés.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
    category: "Mindfulness",
    readTime: "5 min",
  },
  {
    title: "La importancia del autocuidado diario",
    excerpt: "Pequeños rituales que transformarán tu bienestar emocional.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
    category: "Bienestar",
    readTime: "4 min",
  },
  {
    title: "Comunicación asertiva en pareja",
    excerpt: "Claves para expresar tus necesidades sin generar conflicto.",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=800&auto=format&fit=crop",
    category: "Relaciones",
    readTime: "6 min",
  }
]

export function BlogPreview() {
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
      id="blog"
      className="py-24 md:py-32 bg-secondary/20"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <span 
              className={`inline-block mb-4 text-xs font-bold text-primary tracking-widest uppercase transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Blog
            </span>
            <h2 
              className={`font-serif text-4xl md:text-5xl font-medium text-foreground text-balance transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Recursos para tu{" "}
              <span className="fancy-underline">crecimiento</span>
            </h2>
          </div>
          <Button 
            variant="outline" 
            className={`rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-700 delay-200 group ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Ver todos los artículos
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article 
              key={index}
              className={`group cursor-pointer transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <div className={`relative overflow-hidden rounded-2xl mb-5 h-auto aspect-[4/3]`}>
                <Image
                  fill
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full ${
                  index === 0 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-card/90 text-foreground"
                }`}>
                  {post.category}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} lectura</span>
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
