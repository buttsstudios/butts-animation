import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Butts Animation',
  description: 'Animation portfolio and reel hosting',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
