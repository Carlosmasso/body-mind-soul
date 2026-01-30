import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Products } from "@/components/products"
import { Testimonials } from "@/components/testimonials"
import { About } from "@/components/about"
import { BlogPreview } from "@/components/blog-preview"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScrollProgress } from "@/components/scroll-progress"
import { BackToTop } from "@/components/back-to-top"

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Header />
      <Hero />
      <Services />
      <Products />
      <Testimonials />
      <About />
      <BlogPreview />
      <FAQ />
      <Contact />
      <Footer />
      <CookieBanner />
      <WhatsAppButton />
      <BackToTop />
    </main>
  )
}
