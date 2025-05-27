import nextra from 'nextra'

// Set up Nextra with its configuration
const withNextra = nextra({
  // theme: 'nextra-theme-blog', // VERALTET für Nextra 4 hier
  // themeConfig: './theme.config.jsx' // VERALTET für Nextra 4 hier
  // Nextra 4 erkennt das installierte Theme (nextra-theme-blog) oder es wird im Layout expliziter.
})

// Export the final Next.js config with Nextra included
export default withNextra({
  // ... Add regular Next.js options here
  output: 'export', // Wenn du einen statischen Export planst
  images: {
    unoptimized: true // Notwendig für statischen Export ohne Bildoptimierungs-Server
  }
}) 