'use client'

import Image from 'next/image'
import { useState } from 'react'

const projects = [
    { name: 'Darslinker.uz', desc: 'O\'qituvchilar uchun onlayn ta\'limni tizimlashtirish platformasi', url: 'https://darslinker.uz', tag: 'Ta\'lim platformasi', image: '/images/darslinker.jpg', inProgress: true },
    { name: 'Otbozor.uz', desc: 'Otlarni sotish va sotib olish uchun maxsus marketplace', url: 'https://otbozor.uz', tag: 'Marketplace', image: '/images/otbozor.jpg' },
    { name: 'Xorazmbeton.uz', desc: 'Beton savdosi bilan shug\'ullanuvchi kompaniya uchun korporativ veb-sayt', url: 'https://xorazmbeton.uz', tag: 'Korporativ sayt', image: '/images/xorazmbeton.jpg' },
    { name: 'Getolog.uz', desc: 'Yopiq Telegram kanallarni avtomatlashtirish platformasi', url: 'https://getolog.uz', tag: 'Platforma', image: '/images/getolog.jpg' },
    { name: 'NBSGazoil.uz', desc: 'Zapravka stansiyalari uchun analitika tizimi', url: 'https://nbsgazoil.uz', tag: 'Analitika tizim', image: '/images/nbsgasoil.jpg' },
    { name: 'Milliyjamoasi.uz', desc: 'Ochiq byudjetga ovoz berish platformasi', url: 'https://milliyjamoasi.uz', tag: 'Ijtimoiy platforma', image: '/images/milliyjamoasi.jpg' },
    { name: 'Uzbektype.uz', desc: 'Typing test platformasi', url: 'https://uzbektype.uz', tag: 'Veb-ilova', image: '/images/uzbektype.jpg' },
]

export default function Portfolio() {
    const [showAll, setShowAll] = useState(false)

    return (
        <section id="portfolio" className="py-20 bg-[#f9fafb] w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 text-[#60a5fa] font-semibold tracking-wide uppercase text-xs bg-[#eff6ff] px-4 py-2 rounded-full">Portfolio</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-6 text-[#000000]">Bizning ishlarimiz</h2>
                    <p className="text-[#6b7280] mt-4 max-w-xl mx-auto">Biz yaratgan loyihalar bilan tanishing</p>
                </div>

                {/* Desktop - barcha loyihalar */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 flex flex-col"
                        >
                            <div className="relative h-64 overflow-hidden bg-gray-100">
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    fill
                                    quality={75}
                                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    loading={index < 3 ? 'eager' : 'lazy'}
                                />
                                {project.inProgress && (
                                    <span className="absolute top-4 right-4 text-xs font-bold text-white bg-yellow-500 px-4 py-2 rounded-full shadow-lg">
                                        Jarayonda
                                    </span>
                                )}
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <span className="inline-block text-xs font-bold text-[#60a5fa] uppercase tracking-wider mb-3 bg-[#eff6ff] px-3 py-1 rounded-full w-fit">
                                    {project.tag}
                                </span>
                                <h3 className="text-xl font-bold text-[#000000] mb-3 group-hover:text-[#60a5fa] transition-colors">
                                    {project.name}
                                </h3>
                                <p className="text-[#6b7280] text-sm leading-relaxed">{project.desc}</p>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Mobile - 3 ta yoki barchasi */}
                <div className="grid grid-cols-1 gap-8 md:hidden">
                    {(showAll ? projects : projects.slice(0, 3)).map((project, index) => (
                        <a
                            key={index}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 flex flex-col"
                        >
                            <div className="relative h-64 overflow-hidden bg-gray-100">
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    fill
                                    quality={75}
                                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-700"
                                    sizes="100vw"
                                    loading={index < 3 ? 'eager' : 'lazy'}
                                />
                                {project.inProgress && (
                                    <span className="absolute top-4 right-4 text-xs font-bold text-white bg-yellow-500 px-4 py-2 rounded-full shadow-lg">
                                        Jarayonda
                                    </span>
                                )}
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <span className="inline-block text-xs font-bold text-[#60a5fa] uppercase tracking-wider mb-3 bg-[#eff6ff] px-3 py-1 rounded-full w-fit">
                                    {project.tag}
                                </span>
                                <h3 className="text-xl font-bold text-[#000000] mb-3 group-hover:text-[#60a5fa] transition-colors">
                                    {project.name}
                                </h3>
                                <p className="text-[#6b7280] text-sm leading-relaxed">{project.desc}</p>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Show More/Less Button - faqat mobileda */}
                <div className="flex justify-center mt-12 md:hidden">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#60a5fa] to-[#3b82f6] text-white font-semibold px-8 py-4 rounded-xl hover:from-[#3b82f6] hover:to-[#2563eb] transition-all shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        {showAll ? 'Kamroq ko\'rish' : 'Barcha loyihalarni ko\'rish'}
                        <svg
                            className={`w-5 h-5 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}
