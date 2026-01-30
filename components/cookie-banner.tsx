"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Cookie, X } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const hasAccepted = localStorage.getItem("cookies-accepted")
    if (!hasAccepted) {
      setTimeout(() => {
        setIsVisible(true)
        setIsAnimating(true)
      }, 2000)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookies-accepted", "true")
    setIsAnimating(false)
    setTimeout(() => setIsVisible(false), 300)
  }

  const declineCookies = () => {
    localStorage.setItem("cookies-accepted", "false")
    setIsAnimating(false)
    setTimeout(() => setIsVisible(false), 300)
  }

  if (!isVisible) return null

  return (
    <div 
      className={`fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 transition-all duration-300 ${
        isAnimating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="bg-card border border-border rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
            <Cookie className="w-5 h-5 text-accent animate-wiggle" />
          </div>
          <div className="flex-1">
            <h4 className="font-serif text-lg font-medium text-foreground mb-2">
              Usamos cookies
            </h4>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Para mejorar tu experiencia y mostrarte contenido personalizado. 
              Puedes aceptar o rechazarlas.
            </p>
            <div className="flex gap-3">
              <Button 
                onClick={acceptCookies}
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 text-sm"
              >
                Aceptar
              </Button>
              <Button 
                onClick={declineCookies}
                variant="outline"
                className="rounded-full px-4 text-sm border-border hover:bg-secondary bg-transparent"
              >
                Rechazar
              </Button>
            </div>
          </div>
          <button 
            onClick={declineCookies}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
