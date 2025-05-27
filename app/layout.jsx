import 'nextra-theme-blog/style.css'
import { Footer, Layout, Navbar, ThemeSwitch } from 'nextra-theme-blog'
import { Banner, Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'

export const metadata = {
  title: 'Mein Nextra Blog',
  description: 'Eine Beschreibung meines Blogs.'
}

export default async function RootLayout({ children }) {
  const pageMap = await getPageMap()

  return (
    <html lang="de" suppressHydrationWarning>
      <Head>
      </Head>
      <body>
        <Layout>
          <Navbar pageMap={pageMap}>
            <ThemeSwitch />
          </Navbar>
          <main>
            {children}
          </main>
          <Footer>
            <p>
              {new Date().getFullYear()} © Mein Blog Name.
              <a href="/feed.xml" style={{ float: 'right' }}>
                RSS
              </a>
            </p>
          </Footer>
        </Layout>
      </body>
    </html>
  )
} 