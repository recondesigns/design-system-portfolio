import { defineConfig, defineCollection, s } from 'velite'

const caseStudies = defineCollection({
  name: 'CaseStudy',
  pattern: 'work/*.mdx',
  schema: s.object({
    slug: s.slug(),
    order: s.number(),
    projectNumber: s.string(),
    title: s.string(),
    subtitle: s.string(),
    tag: s.string(),
    details: s.string(),
    tagline: s.string(),
    role: s.string(),
    year: s.string(),
    scope: s.string(),
    overview: s.string(),
    metrics: s.array(
      s.object({
        value: s.string(),
        label: s.string(),
      })
    ),
    phases: s.array(
      s.object({
        number: s.string(),
        title: s.string(),
        body: s.string(),
        image: s.string().optional(),
      })
    ),
    nextSlug: s.string(),
    nextTitle: s.string(),
    heroImage: s.string().optional(),
    links: s
      .array(
        s.object({
          label: s.string(),
          url: s.string(),
        })
      )
      .max(3)
      .optional(),
    content: s.mdx(),
  }),
})

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: { caseStudies },
})
