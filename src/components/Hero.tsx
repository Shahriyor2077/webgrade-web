'use client'

import { ArrowRight, Play } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
    const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
        e.preventDefault()
        const section = document.getElementById(sectionId)
        section?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="hero" className="relative min-h-screen bg-[#1a2332] text-white flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src="/images/team2.jpg"
                    alt="Webgrade team"
                    fill
                    priority
                    className="object-cover opacity-50"
                    sizes="100vw"
                    quality={85}
                />
            </div>

            <div className="absolute inset-0 bg-[#1a2332]/40 z-[1]"></div>

            <div className="relative z-[2] text-center max-w-3xl select-none px-6 w-full">
                <h1 className="text-4xl md:text-6xl font-bold leading-snug">
                    Biznesingizni
                    <span className="text-[#f1f1f1]"> raqamli </span>
                    bosqichga olib chiqamiz
                </h1>

                <p className="mt-6 text-white/90 text-lg md:text-xl leading-relaxed font-medium">
                    Zamonavoy texnologiyalar yordamida mijozlar oqimini ko'paytiring va savdoni tizimli ravishta rivojlantiring
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                    <a
                        href="#contact"
                        onClick={(e) => scrollToSection(e, 'contact')}
                        className="bg-white hover:bg-[#f1f1f1] text-[#000000] font-semibold px-6 py-3 rounded-lg transition inline-flex items-center justify-center gap-2"
                    >
                        Bepul maslahat olish
                        <ArrowRight className="w-5 h-5" />
                    </a>
                    <a
                        href="#services"
                        onClick={(e) => scrollToSection(e, 'services')}
                        className="border-2 border-white text-white hover:bg-white hover:text-[#000000] font-semibold px-6 py-3 rounded-lg transition inline-flex items-center justify-center gap-2"
                    >
                        <Play className="w-5 h-5" />
                        Xizmatlar
                    </a>
                </div>
            </div>
        </section>
    )
}
