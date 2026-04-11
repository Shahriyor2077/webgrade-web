'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('hero')

    const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
        e.preventDefault()
        setMenuOpen(false)
        const section = document.getElementById(sectionId)
        section?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        const handleScroll = () => {
            const servicesSection = document.getElementById('services')
            if (servicesSection) {
                setScrolled(window.scrollY + 80 >= servicesSection.offsetTop)
            }

            const sections = ['hero', 'services', 'portfolio', 'about', 'contact']
            for (const sectionId of sections.reverse()) {
                const section = document.getElementById(sectionId)
                if (section) {
                    const rect = section.getBoundingClientRect()
                    if (rect.top <= 150) {
                        setActiveSection(sectionId)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        ['Xizmatlar', 'services'],
        ['Portfolio', 'portfolio'],
        ['Biz haqimizda', 'about'],
        ['Aloqa', 'contact'],
    ]

    return (
        <header className={`fixed top-0 left-0 right-0 w-full z-50 border-b transition-colors duration-300 ${scrolled
            ? 'bg-white/95 border-gray-200 text-[#000000] backdrop-blur-md shadow-sm'
            : 'bg-[#1a2332]/80 border-white/10 text-white backdrop-blur-md'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between w-full">
                <a href="#hero" onClick={(e) => scrollToSection(e, 'hero')} className="flex items-center gap-2 font-bold text-xl">
                    <Image src="/logo.svg" alt="Webgrade" width={120} height={32} className={`h-8 w-auto transition-all ${scrolled ? 'brightness-0' : 'brightness-0 invert'}`} priority />
                </a>

                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map(([label, id]) => (
                        <a key={id} href={`#${id}`} onClick={(e) => scrollToSection(e, id)} className={`relative group transition-colors duration-300 ${activeSection === id
                            ? scrolled ? 'text-[#60a5fa] font-semibold' : 'text-white font-semibold'
                            : scrolled ? 'hover:text-[#60a5fa]' : 'hover:text-gray-300'
                            }`}>
                            {label}
                            <span className={`absolute -bottom-1 left-0 h-0.5 transition-all ${activeSection === id
                                ? scrolled ? 'bg-[#60a5fa] w-full' : 'bg-white w-full'
                                : 'w-0 group-hover:w-full ' + (scrolled ? 'bg-[#60a5fa]' : 'bg-white')
                                }`}></span>
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hidden sm:flex items-center gap-2 font-semibold px-6 py-3 rounded-xl transition-all duration-300 bg-gradient-to-r from-[#60a5fa] to-[#3b82f6] hover:from-[#3b82f6] hover:to-[#2563eb] text-white shadow-lg hover:shadow-xl hover:scale-105 group">
                        <span>Bog'lanish</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden p-2"
                        aria-label="Menyuni ochish/yopish"
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className={`md:hidden px-6 pb-6 ${scrolled ? 'bg-white' : 'bg-[#1a2332]'}`}>
                    <nav className="flex flex-col gap-4">
                        {navLinks.map(([label, id]) => (
                            <a key={id} href={`#${id}`} onClick={(e) => scrollToSection(e, id)} className={`py-2 transition-colors ${activeSection === id
                                ? scrolled ? 'text-[#60a5fa] font-semibold' : 'text-white font-semibold'
                                : scrolled ? 'hover:text-[#60a5fa]' : 'hover:text-gray-300'
                                }`}>
                                {label}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    )
}
