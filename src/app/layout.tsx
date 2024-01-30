import type { Metadata, Viewport } from 'next'

import './globals.css'
import { chewie, inter } from '@/lib/fonts'
import { siteConfig } from '@/config/site'

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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
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
    <html lang="en">
      <head />
      <body
        className={`${inter.variable} ${chewie.variable} font-body antialiased`}
      >
        {/* <header className="bg-primary p-4 text-white">
          <div className="container flex justify-between">
            <h1 className="text-3xl font-bold">NewsFeed</h1>
          </div>
        </header> */}
        {children}
      </body>
    </html>
  )
}
