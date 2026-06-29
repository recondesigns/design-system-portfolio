import { projects } from '@/data/projects'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) return null

  return (
    <main style={{ padding: '128px 48px' }}>
      <h1>{project.title}</h1>
      <p>{project.subtitle}</p>
    </main>
  )
}
