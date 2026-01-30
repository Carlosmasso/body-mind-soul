"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Video autoplay may be blocked by browser
      });
    }
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Fallback background image */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${videoLoaded ? "opacity-0" : "opacity-100"}`}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? "opacity-100" : "opacity-0"}`}
        >
          <source
            src="https://cdn.pixabay.com/video/2020/07/30/45870-446300699_large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-background/50" />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline */}
          <div
            className={`inline-block mb-6 px-5 py-2 bg-accent/30 rounded-full text-sm font-medium text-foreground transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Bienestar integral para tu vida
          </div>

          {/* Main Heading */}
          <h1
            className={`font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-tight text-foreground mb-6 text-balance transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Cuida tu <span className="text-primary">Cuerpo</span>,{" "}
            <span className="highlight-text">Mente</span> y{" "}
            <span className="fancy-underline text-accent">Alma</span>
          </h1>

          {/* Description */}
          <p
            className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Descubre un espacio de paz y transformación donde te acompañamos en
            tu camino hacia el equilibrio interior con terapia psicológica y
            productos naturales.
          </p>

          {/* <div
            className={`transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          > */}
            <button
              onClick={() => {
                const serviciosSection = document.querySelector('#servicios');
                serviciosSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="flex cursor-pointer flex-col mx-auto items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <span className="text-xs font-medium tracking-widest uppercase">
                Descubrir más
              </span>
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </button>
          {/* </div> */}
          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 mt-10 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Conoce Nuestros Servicios
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-6 text-base font-medium border-2 border-foreground/20 hover:border-foreground/40 hover:bg-transparent transition-all duration-300 bg-transparent"
            >
              Explorar Productos
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        {/* <div
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="#servicios"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <span className="text-xs font-medium tracking-widest uppercase">
              Descubrir más
            </span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div> */}
      </div>
    </section>
  );
}
