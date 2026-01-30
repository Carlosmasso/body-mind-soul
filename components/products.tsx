"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ShoppingBag, Star, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    id: 1,
    name: "Kit de Aromaterapia Esencial",
    description: "5 aceites esenciales puros para relajación y bienestar",
    price: 45,
    originalPrice: 55,
    rating: 4.9,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&h=600&fit=crop",
    badge: "Más vendido",
    tags: ["100% Natural", "Vegano"],
  },
  {
    id: 2,
    name: "Diario de Gratitud",
    description: "90 días de reflexión guiada para cultivar la paz interior",
    price: 28,
    originalPrice: null,
    rating: 4.8,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600&h=600&fit=crop",
    badge: null,
    tags: ["Papel reciclado", "Hecho a mano"],
  },
  {
    id: 3,
    name: "Set de Meditación Zen",
    description: "Cojín de meditación, vela de soja y cuenco tibetano",
    price: 89,
    originalPrice: 110,
    rating: 5.0,
    reviews: 56,
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&h=600&fit=crop",
    badge: "Nuevo",
    tags: ["Artesanal", "Eco-friendly"],
  },
  {
    id: 4,
    name: "Infusiones Calma Interior",
    description: "Blend de hierbas orgánicas: lavanda, manzanilla y valeriana",
    price: 18,
    originalPrice: null,
    rating: 4.7,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600&h=600&fit=crop",
    badge: null,
    tags: ["Orgánico", "Sin cafeína"],
  },
]

export function Products() {
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
      id="productos" 
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
            Nuestra Tienda
          </span>
          <h2 
            className={`font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6 text-balance transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Productos para{" "}
            <span className="fancy-underline">nutrir</span>{" "}
            <span className="text-accent">tu ser</span>
          </h2>
          <p 
            className={`text-lg text-muted-foreground leading-relaxed text-pretty transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Selección cuidada de productos naturales y sostenibles para acompañar tu práctica de bienestar diaria.
          </p>
        </div>

        {/* Natural Badge */}
        <div 
          className={`flex justify-center mb-12 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
            <Leaf className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Todos nuestros productos son naturales y eco-friendly</span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className={`group transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              {/* Product Image */}
              <div className="relative aspect-square mb-4 rounded-2xl overflow-hidden bg-secondary">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <Badge className={`absolute top-3 left-3 border-0 text-xs font-semibold px-3 py-1.5 ${
                    product.badge === "Nuevo" 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-accent text-accent-foreground"
                  }`}>
                    {product.badge}
                  </Badge>
                )}
                <button 
                  className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-card shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                  aria-label="Añadir al carrito"
                >
                  <ShoppingBag className="w-5 h-5" />
                </button>
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-accent text-accent" />
                  <span className="text-sm font-medium text-foreground">{product.rating}</span>
                  <span className="text-sm text-muted-foreground">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-xl font-semibold text-foreground">{product.price}€</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">{product.originalPrice}€</span>
                  )}
                </div>
              </div>
            </div>
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
            variant="outline"
            className="rounded-full px-8 py-6 text-base font-medium border-2 border-foreground/20 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
          >
            Ver todos los productos
          </Button>
        </div>
      </div>
    </section>
  )
}
