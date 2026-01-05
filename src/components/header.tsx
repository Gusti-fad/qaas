"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const sections = [
  { id: "what-we-do", label: "About Us" },
  { id: "services", label: "Services" },
  { id: "why-choose", label: "Our Features" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)

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

useEffect(() => {
  const visibleSections = new Set<string>()

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id

        if (entry.isIntersecting) {
          visibleSections.add(id)
        } else {
          visibleSections.delete(id)
        }
      })

      if (visibleSections.size === 0) {
        setActiveSection(null)
      } else {
        setActiveSection([...visibleSections].at(-1)!)
      }
    },
    {
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0,
    }
  )

  sections.forEach((section) => {
    const el = document.getElementById(section.id)
    if (el) observer.observe(el)
  })

  return () => observer.disconnect()
}, [])


  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

const navClass = (id: string) =>
  `
  relative text-gray-300 transition-colors duration-300
  hover:text-[#d4af37] cursor-pointer

  after:absolute
  after:left-0
  after:-bottom-1
  after:h-[2px]
  after:w-full
  after:bg-[#d4af37]
  after:scale-x-0
  after:origin-left
  after:transition-transform
  after:duration-300
  after:ease-out

  ${
    activeSection === id
      ? "text-[#d4af37] after:scale-x-100"
      : "hover:after:scale-x-100"
  }
  `


const mobileNavClass = (id: string) =>
  `
  relative text-left transition-colors duration-300
  hover:text-[#f4e5b8]

  after:absolute
  after:left-0
  after:-bottom-1
  after:h-[2px]
  after:w-6
  after:bg-[#d4af37]
  after:scale-x-0
  after:origin-left
  after:transition-transform
  after:duration-300

  ${
    activeSection === id
      ? "text-[#d4af37] after:scale-x-100"
      : ""
  }
  `


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
            {sections.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={navClass(item.id)}
              >
                {item.label}
              </button>
            ))}
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
            {sections.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={mobileNavClass(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
