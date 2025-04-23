import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Nandan's Portfolio",
  description: "Personal portfolio website of Nandan Upadhyay showcasing skills, projects, and achievements",
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
