import { useMDXComponents as getBlogMDXComponents } from 'nextra-theme-blog'

export function useMDXComponents(components) {
  const blogComponents = getBlogMDXComponents()
  return {
    ...blogComponents,
    ...components,
    // Hier kannst du deine eigenen globalen MDX-Komponenten hinzufügen
  }
} 