import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'About Us',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <h2>Menu</h2>
      <ul>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/about/contacts">Contacts</Link></li>
        <li><Link href="/about/team">Team</Link></li>
      </ul>
      {children}
    </div>
  )
}
