import nextra from 'nextra'

// Set up Nextra with its configuration
const withNextra = nextra({
  theme: 'nextra-theme-blog', // Specify the theme
  themeConfig: './theme.config.jsx' // Specify theme configuration file if you have one
})

// Export the final Next.js config with Nextra included
export default withNextra({
  // ... Add regular Next.js options here
}) 