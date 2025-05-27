import 'nextra-theme-blog/style.css'
import Head from 'next/head'

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <Head>
        <title>Mein Nextra Blog</title>
      </Head>
      <body>
        {children}
      </body>
    </html>
  )
} 