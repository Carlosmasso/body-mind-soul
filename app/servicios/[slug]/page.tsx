import { notFound } from "next/navigation"
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/services-data"
import { ServiceDetailContent } from "@/components/service-detail-content"

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  
  if (!service) {
    return {
      title: "Servicio no encontrado | Gaian",
    }
  }

  return {
    title: `${service.title} | Gaian`,
    description: service.description,
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  const {icon, ...rest} = service || {}

  if (!service) {
    notFound()
  }

  return <ServiceDetailContent service={rest} />
}
