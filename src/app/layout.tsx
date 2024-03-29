import type { Metadata, Viewport } from 'next'

import './globals.css'
import { monaSans, sourceSerif } from '@/lib/fonts'
import { siteConfig } from '@/config/site'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { Header } from '@/components/header'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  // metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  authors: [
    {
      name: 'Franklin Ramos',
      url: 'https://github.com/franklinrms',
    },
  ],
  creator: 'Franklin Ramos',
  // openGraph: {
  //   type: 'website',
  //   locale: 'en_US',
  //   url: siteConfig.url,
  //   title: siteConfig.name,
  //   description: siteConfig.description,
  //   siteName: siteConfig.name,
  //   images: [
  //     {
  //       url: siteConfig.ogImage,
  //       width: 1200,
  //       height: 630,
  //       alt: siteConfig.name,
  //     },
  //   ],
  // },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'font-body antialiased',
          monaSans.variable,
          sourceSerif.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
        </ThemeProvider>
        {children}
      </body>
    </html>
  )
}
