import { Brain, Heart, Sparkles, Users } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface ServiceDetail {
  slug: string
  icon: LucideIcon
  title: string
  subtitle: string
  description: string
  longDescription: string
  features: string[]
  benefits: {
    title: string
    description: string
  }[]
  process: {
    step: number
    title: string
    description: string
  }[]
  faqs: {
    question: string
    answer: string
  }[]
  price: string
  duration: string
  modality: string
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "psicologia-clinica",
    icon: Brain,
    title: "Psicología Clínica",
    subtitle: "Terapia individual para tu bienestar emocional",
    description: "Terapia individual para ansiedad, depresión y manejo del estrés con enfoque humanista.",
    longDescription: "Nuestro servicio de psicología clínica ofrece un espacio seguro y confidencial donde podrás explorar tus emociones, pensamientos y comportamientos. Trabajamos con un enfoque humanista e integrativo, combinando diferentes técnicas terapéuticas según tus necesidades específicas. Ya sea que estés atravesando un momento difícil o simplemente quieras conocerte mejor, estamos aquí para acompañarte en tu proceso de crecimiento personal.",
    features: ["Sesiones de 50 min", "Online o presencial", "Primera consulta gratuita"],
    benefits: [
      {
        title: "Manejo de la ansiedad",
        description: "Aprende técnicas efectivas para reducir la ansiedad y recuperar tu tranquilidad diaria."
      },
      {
        title: "Superación de la depresión",
        description: "Trabajamos juntos para encontrar la luz en momentos oscuros y recuperar tu bienestar."
      },
      {
        title: "Gestión del estrés",
        description: "Desarrolla herramientas prácticas para manejar el estrés laboral y personal."
      },
      {
        title: "Autoconocimiento",
        description: "Descubre tus patrones, fortalezas y áreas de crecimiento personal."
      }
    ],
    process: [
      {
        step: 1,
        title: "Primera consulta gratuita",
        description: "Nos conocemos y evaluamos juntos tus necesidades. Sin compromiso."
      },
      {
        step: 2,
        title: "Plan personalizado",
        description: "Diseñamos un plan terapéutico adaptado a tus objetivos y ritmo."
      },
      {
        step: 3,
        title: "Sesiones regulares",
        description: "Trabajamos semana a semana con técnicas basadas en evidencia científica."
      },
      {
        step: 4,
        title: "Seguimiento y cierre",
        description: "Evaluamos tu progreso y te preparamos para continuar tu camino con autonomía."
      }
    ],
    faqs: [
      {
        question: "¿Cuánto dura un proceso de terapia?",
        answer: "La duración varía según cada persona y sus objetivos. Algunos procesos son breves (8-12 sesiones) mientras otros requieren más tiempo. Lo importante es respetar tu ritmo."
      },
      {
        question: "¿Cómo sé si necesito terapia?",
        answer: "Si sientes que tus emociones te desbordan, tienes dificultades en tus relaciones o simplemente quieres conocerte mejor, la terapia puede ayudarte."
      },
      {
        question: "¿Las sesiones online son igual de efectivas?",
        answer: "Sí, múltiples estudios demuestran que la terapia online es tan efectiva como la presencial. Además, ofrece mayor flexibilidad y comodidad."
      }
    ],
    price: "Desde 60€/sesión",
    duration: "50 minutos",
    modality: "Online o presencial"
  },
  {
    slug: "terapia-de-pareja",
    icon: Heart,
    title: "Terapia de Pareja",
    subtitle: "Fortalece tu relación y mejora la comunicación",
    description: "Fortalece tu relación y mejora la comunicación con tu ser querido en un espacio seguro.",
    longDescription: "La terapia de pareja es un espacio donde ambos miembros pueden expresarse libremente y trabajar juntos para mejorar su relación. Utilizamos la metodología Gottman, reconocida internacionalmente por su efectividad. Ya sea que estéis atravesando una crisis o simplemente queráis fortalecer vuestro vínculo, os ayudamos a desarrollar herramientas de comunicación, resolver conflictos y reconectar emocionalmente.",
    features: ["Sesiones de 90 min", "Metodología Gottman", "Ejercicios prácticos"],
    benefits: [
      {
        title: "Comunicación efectiva",
        description: "Aprended a expresar vuestras necesidades y escuchar activamente al otro."
      },
      {
        title: "Resolución de conflictos",
        description: "Desarrollad estrategias sanas para manejar los desacuerdos sin dañar la relación."
      },
      {
        title: "Reconexión emocional",
        description: "Recuperad la intimidad y el vínculo afectivo que os unió."
      },
      {
        title: "Prevención de crisis",
        description: "Fortaleced vuestra relación antes de que los pequeños problemas se conviertan en grandes."
      }
    ],
    process: [
      {
        step: 1,
        title: "Evaluación inicial",
        description: "Sesión conjunta donde conocemos vuestra historia y dinámica de pareja."
      },
      {
        step: 2,
        title: "Sesiones individuales",
        description: "Una sesión con cada miembro para entender las perspectivas individuales."
      },
      {
        step: 3,
        title: "Plan de trabajo",
        description: "Definimos juntos los objetivos y el camino a seguir."
      },
      {
        step: 4,
        title: "Sesiones de pareja",
        description: "Trabajamos semanalmente con ejercicios prácticos y técnicas de comunicación."
      }
    ],
    faqs: [
      {
        question: "¿Ambos tenemos que querer ir a terapia?",
        answer: "Lo ideal es que ambos estéis comprometidos con el proceso. Sin embargo, a veces uno puede empezar y el otro unirse después al ver los beneficios."
      },
      {
        question: "¿Puede la terapia salvar nuestra relación?",
        answer: "La terapia ofrece herramientas y un espacio para trabajar, pero el resultado depende del compromiso de ambos. Muchas parejas logran reconectar y fortalecer su vínculo."
      },
      {
        question: "¿Y si decidimos separarnos?",
        answer: "También os acompañamos en un proceso de separación consciente y respetuosa, especialmente importante si hay hijos."
      }
    ],
    price: "Desde 90€/sesión",
    duration: "90 minutos",
    modality: "Online o presencial"
  },
  {
    slug: "terapia-familiar",
    icon: Users,
    title: "Terapia Familiar",
    subtitle: "Sanamos vínculos y construimos familias más saludables",
    description: "Sanamos vínculos y construimos dinámicas familiares más saludables y amorosas.",
    longDescription: "La terapia familiar sistémica considera a la familia como un sistema donde cada miembro influye y es influido por los demás. Trabajamos para mejorar la comunicación, resolver conflictos, establecer límites saludables y fortalecer los vínculos afectivos. Ya sea una familia nuclear, reconstituida o extensa, os ayudamos a crear un ambiente más armonioso y funcional para todos.",
    features: ["Enfoque sistémico", "Mediación familiar", "Planes personalizados"],
    benefits: [
      {
        title: "Comunicación familiar",
        description: "Aprended a hablar y escucharos de manera que todos se sientan valorados."
      },
      {
        title: "Gestión de conflictos",
        description: "Desarrollad estrategias para resolver disputas de forma constructiva."
      },
      {
        title: "Límites saludables",
        description: "Estableced reglas y límites claros que respeten las necesidades de cada miembro."
      },
      {
        title: "Apoyo en transiciones",
        description: "Afrontad juntos cambios como divorcios, mudanzas, nuevos miembros o pérdidas."
      }
    ],
    process: [
      {
        step: 1,
        title: "Sesión de evaluación",
        description: "Conocemos a la familia completa y entendemos la dinámica actual."
      },
      {
        step: 2,
        title: "Mapa familiar",
        description: "Creamos un genograma para entender patrones y relaciones."
      },
      {
        step: 3,
        title: "Objetivos conjuntos",
        description: "Definimos qué quiere lograr cada miembro y la familia como unidad."
      },
      {
        step: 4,
        title: "Intervención terapéutica",
        description: "Sesiones regulares con técnicas sistémicas adaptadas a vuestra realidad."
      }
    ],
    faqs: [
      {
        question: "¿Tienen que participar todos los miembros?",
        answer: "Lo ideal es que participen todos, pero podemos empezar con quienes estén disponibles y ir incorporando a otros gradualmente."
      },
      {
        question: "¿A partir de qué edad pueden participar los niños?",
        answer: "Los niños pueden participar desde los 4-5 años con actividades adaptadas a su edad. Su perspectiva es valiosa para entender la dinámica familiar."
      },
      {
        question: "¿Cuánto dura el proceso?",
        answer: "Depende de la complejidad de la situación. Generalmente entre 10-20 sesiones, con seguimientos posteriores si es necesario."
      }
    ],
    price: "Desde 100€/sesión",
    duration: "90 minutos",
    modality: "Preferiblemente presencial"
  },
  {
    slug: "mindfulness-meditacion",
    icon: Sparkles,
    title: "Mindfulness y Meditación",
    subtitle: "Cultiva la atención plena y reduce el estrés",
    description: "Talleres grupales e individuales para cultivar la atención plena y reducir el estrés.",
    longDescription: "El mindfulness o atención plena es una práctica milenaria respaldada por la ciencia moderna. Nuestros talleres y sesiones individuales te enseñarán a vivir el presente, reducir el estrés, mejorar tu concentración y desarrollar una relación más sana con tus pensamientos y emociones. Ofrecemos desde iniciación hasta programas avanzados como MBSR (Reducción del Estrés Basada en Mindfulness).",
    features: ["Grupos reducidos", "Material incluido", "Sesiones semanales"],
    benefits: [
      {
        title: "Reducción del estrés",
        description: "Aprende a calmar tu mente y cuerpo en momentos de tensión."
      },
      {
        title: "Mayor concentración",
        description: "Mejora tu capacidad de enfoque y atención en el día a día."
      },
      {
        title: "Regulación emocional",
        description: "Desarrolla una relación más sana con tus emociones sin dejarte arrastrar por ellas."
      },
      {
        title: "Mejor sueño",
        description: "Las prácticas de relajación te ayudarán a descansar mejor cada noche."
      }
    ],
    process: [
      {
        step: 1,
        title: "Sesión introductoria",
        description: "Descubre qué es el mindfulness y experimenta tu primera práctica guiada."
      },
      {
        step: 2,
        title: "Curso de 8 semanas",
        description: "Programa estructurado basado en MBSR con prácticas progresivas."
      },
      {
        step: 3,
        title: "Práctica diaria",
        description: "Te acompañamos con audios y materiales para tu práctica en casa."
      },
      {
        step: 4,
        title: "Comunidad de práctica",
        description: "Únete a nuestras sesiones grupales semanales para mantener tu práctica."
      }
    ],
    faqs: [
      {
        question: "¿Necesito experiencia previa en meditación?",
        answer: "No, nuestros programas están diseñados para todos los niveles, desde principiantes absolutos hasta practicantes avanzados."
      },
      {
        question: "¿Tiene base científica?",
        answer: "Sí, el mindfulness cuenta con décadas de investigación que demuestran sus beneficios para la salud mental y física."
      },
      {
        question: "¿Cuánto tiempo debo practicar al día?",
        answer: "Empezamos con 5-10 minutos diarios y vamos aumentando gradualmente. Lo importante es la constancia, no la duración."
      }
    ],
    price: "Desde 40€/sesión grupal",
    duration: "60-90 minutos",
    modality: "Online y presencial"
  }
]

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return servicesData.find(service => service.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map(service => service.slug)
}
