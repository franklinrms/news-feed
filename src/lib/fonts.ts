import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

export const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const chewie = localFont({
  src: [
    {
      path: '../assets/fonts/ChewieDEMO-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/ChewieDEMO-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/ChewieDEMO-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/ChewieDEMO-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/ChewieDEMO-ExtraBold.otf',
      weight: '800',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-chewie',
})
