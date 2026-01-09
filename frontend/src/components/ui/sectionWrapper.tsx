import { ReactNode } from "react"

interface Props {
  id: string
  children: ReactNode
}

export default function SectionWrapper({ id, children }: Props) {
  return (
    <section
      id={id}
      className="min-h-screen flex items-center justify-center px-6"
    >
      {children}
    </section>
  )
}