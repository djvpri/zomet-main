import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Zomet - Ekosistem Aplikasi Digital',
  description: 'Platform lengkap untuk berbagai kebutuhan bisnis digital Anda',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className="bg-gray-950 text-white">{children}</body>
    </html>
  )
}
