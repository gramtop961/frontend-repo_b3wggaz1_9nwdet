import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/60 border-b border-white/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="font-bold text-gray-900 text-lg tracking-tight">Sarthak Tripathy</a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-gray-900 transition-colors" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-full bg-gray-900 text-white px-4 py-2 hover:bg-gray-800 transition-colors">Hire Me</a>
          </nav>

          <button className="md:hidden p-2" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="grid gap-2 text-sm">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="px-2 py-2 rounded hover:bg-white/70" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              ))}
              <a href="#contact" className="mt-2 inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-4 py-2 hover:bg-gray-800" onClick={() => setOpen(false)}>
                Hire Me
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
