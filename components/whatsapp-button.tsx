"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"

export function WhatsAppButton() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)
  const [hasClosedTooltip, setHasClosedTooltip] = useState(false)

  const phoneNumber = "34600000000" // Cambiar por el número real
  const message = "Hola, me gustaría obtener más información sobre sus servicios."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3">
      {/* Tooltip */}
      {isTooltipVisible && !hasClosedTooltip && (
        <div className="bg-card border border-border rounded-2xl p-4 shadow-lg max-w-[200px] animate-in slide-in-from-right-4 fade-in duration-300">
          <button
            onClick={() => setHasClosedTooltip(true)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-3 h-3" />
          </button>
          <p className="text-sm text-foreground">
            ¿Necesitas ayuda?{" "}
            <span className="text-primary font-medium">Escríbenos</span>
          </p>
        </div>
      )}

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  )
}
