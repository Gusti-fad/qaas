"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setIsOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <header
      className={`
        fixed top-0 z-50 w-full
        border-b border-[#2a3952]
        bg-[#0a1628]/95 backdrop-blur-sm
        transition-all duration-500 ease-in-out
        ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
      `}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#d4af37] font-bold text-[#0a1628]">
              QA
            </div>
            <span className="text-xl font-bold text-[#d4af37] group-hover:text-[#f4e5b8] transition-colors">
              Platform
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("what-we-do")} className="nav-item">
              About Us
            </button>
            <button onClick={() => scrollToSection("services")} className="nav-item">
              Services
            </button>
            <button onClick={() => scrollToSection("why-choose")} className="nav-item">
              Our Features
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5"
            aria-label="Toggle menu"
          >
            <div className={`h-0.5 w-6 bg-[#d4af37] transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`h-0.5 w-6 bg-[#d4af37] transition-opacity ${isOpen ? "opacity-0" : ""}`} />
            <div className={`h-0.5 w-6 bg-[#d4af37] transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-6 space-y-5 pb-4 flex flex-col">
            <button onClick={() => scrollToSection("what-we-do")} className="mobile-nav-item">
              About Us
            </button>
            <button onClick={() => scrollToSection("services")} className="mobile-nav-item">
              Services
            </button>
            <button onClick={() => scrollToSection("why-choose")} className="mobile-nav-item">
              Our Features
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
