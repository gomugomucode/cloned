import { useEffect } from 'react'

interface SEOHeadProps {
  title: string
  description?: string
}

export function SEOHead({ title, description }: SEOHeadProps) {
  useEffect(() => {
    document.title = title ? `${title} | StackForge` : 'StackForge - Master Modern Software Development'

    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.setAttribute('content', description)
      } else {
        const meta = document.createElement('meta')
        meta.name = 'description'
        meta.content = description
        document.head.appendChild(meta)
      }
    }
  }, [title, description])

  return null
}
