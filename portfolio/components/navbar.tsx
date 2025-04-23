"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavbarProps {
  scrolled: boolean
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "SKILLS", href: "#skills" },
    { name: "ACADEMIC", href: "#academic" },
    { name: "PROJECTS", href: "#projects" },
    { name: "HACKATHONS", href: "#hackathons" },
    { name: "RESEARCH", href: "#research" },
    { name: "CERTIFICATIONS", href: "#certifications" },
    { name: "CONTACT", href: "#contact" },
  ]

  const handleHireMeClick = () => {
    window.location.href = "mailto:thenandanupadhyay0321@gmail.com"
  }

  const handleResumeClick = () => {
    const link = document.createElement('a')
    link.href = '/Nandan_Resume.pdf'
    link.download = 'Nandan_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="text-white font-bold text-2xl">
            NU
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 rounded-full"
              onClick={handleResumeClick}
            >
              <Download className="mr-2 h-4 w-4" />
              RESUME
            </Button>
            <Button 
              className="bg-white text-black hover:bg-white/90 rounded-full"
              onClick={handleHireMeClick}
            >
              LET'S WORK
            </Button>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/95 border-b border-white/10"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-white/70 hover:text-white py-2"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-3">
                <Button 
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 rounded-full w-full"
                  onClick={handleResumeClick}
                >
                  <Download className="mr-2 h-4 w-4" />
                  RESUME
                </Button>
                <Button 
                  className="bg-white text-black hover:bg-white/90 rounded-full w-full"
                  onClick={handleHireMeClick}
                >
                  LET'S WORK
                </Button>
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
