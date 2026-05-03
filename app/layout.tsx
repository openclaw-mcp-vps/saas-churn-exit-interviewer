import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ChurnIQ — Auto-interview churning customers',
  description: 'Automatically send exit interview surveys to cancelled customers and analyze churn patterns to reduce customer loss.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="21fca15f-d855-4734-be84-c6bb82b5c3a3"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
