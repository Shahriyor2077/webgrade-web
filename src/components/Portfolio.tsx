'use client'

import Image from 'next/image'

const projects = [
    { name: 'Xorazmbeton.uz', desc: 'Beton savdosi bilan shug\'ullanuvchi kompaniya uchun korporativ veb-sayt', url: 'https://xorazmbeton.uz', tag: 'Korporativ sayt', image: '/images/xorazmbeton.jpg' },
    { name: 'Getolog.uz', desc: 'Yopiq Telegram kanallarni avtomatlashtirish platformasi', url: 'https://getolog.uz', tag: 'Platforma', image: '/images/getolog.jpg' },
    { name: 'NBSGazoil.uz', desc: 'Zapravka stansiyalari uchun analitika tizimi', url: 'https://nbsgazoil.uz', tag: 'Analitika tizim', image: '/images/nbsgasoil.jpg' },
    { name: 'Milliyjamoasi.uz', desc: 'Ochiq byudjetga ovoz berish platformasi', url: 'https://milliyjamoasi.uz', tag: 'Ijtimoiy platforma', image: '/images/milliyjamoasi.jpg' },
    { name: 'Otbozor.uz', desc: 'Otlarni sotish va sotib olish uchun maxsus marketplace', url: 'https://otbozor.uz', tag: 'Marketplace', image: '/images/otbozor.jpg' },
    { name: 'Uzbektype.uz', desc: 'Typing test platformasi', url: 'https://uzbektype.uz', tag: 'Veb-ilova', image: '/images/uzbektype.jpg' },
]

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-20 bg-[#f9fafb] w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 text-[#60a5fa] font-semibold tracking-wide uppercase text-xs bg-[#eff6ff] px-4 py-2 rounded-full">Portfolio</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-6 text-[#000000]">Bizning ishlarimiz</h2>
                    <p className="text-[#6b7280] mt-4 max-w-xl mx-auto">Biz yaratgan loyihalar bilan tanishing</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
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
            </div>
        </section>
    )
}
