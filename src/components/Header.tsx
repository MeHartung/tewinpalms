'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact me' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [hideOnScroll, setHideOnScroll] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setHideOnScroll(currentScrollY > lastScrollY && currentScrollY > 80)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header className={`fixed top-0 left-0 w-full z-50 bg-transparent transition-transform duration-300 ${
      hideOnScroll ? '-translate-y-full' : 'translate-y-0'
    }`}>
      <div className="relative flex items-center justify-between px-4 md:px-8 py-2">
        
        {/* Avatar */}
        <Link href="/" className="shrink-0">
          <Image
            src="/img/avatar.jpg"
            alt="Avatar"
            width={36}
            height={36}
            className="rounded-full object-cover"
          />
        </Link>

        {/* Center nav (desktop) */}
        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          items-center gap-6 px-5 py-2 rounded-full bg-brand-black/70 text-brand-white
          backdrop-blur-md border border-white/10 shadow-md">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-brand-white px-3 py-1 rounded-full hover:bg-white/10 transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Burger menu (mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-brand-white"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <nav className="md:hidden absolute top-14 left-0 w-full 
          bg-brand-black/90 text-brand-white flex flex-col 
          items-start gap-4 p-6 backdrop-blur-md border-t border-white/10 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg px-3 py-1 rounded-full hover:bg-white/10 transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}