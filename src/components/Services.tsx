'use client'

import { Globe, Database, Smartphone, Bot, Headphones, Code, ArrowRight } from 'lucide-react'

const services = [
    {
        icon: Globe,
        title: 'Veb-sayt yaratish',
        desc: 'Zamonavoy va responsive veb-saytlar',
        prices: [
            { name: 'Landing page', price: '2 800 000 so\'m +' },
            { name: 'Korporativ sayt', price: '6 500 000 so\'m +' },
            { name: 'E-commerce', price: '10 000 000 so\'m +' },
        ],
    },
    {
        icon: Database,
        title: 'CRM/ERP tizimlar',
        desc: 'Biznes jarayonlarini boshqarish tizimi',
        prices: [
            { name: 'Standart CRM', price: '10 000 000 so\'m +' },
            { name: 'Maxsus CRM', price: '14 500 000 so\'m +' },
        ],
    },
    {
        icon: Smartphone,
        title: 'Mobil ilovalar',
        desc: 'Android va iOS uchun ilovalar',
        prices: [
            { name: 'Android ilova', price: '8 600 000 so\'m +' },
            { name: 'Cross-platform', price: '13 000 000 so\'m +' },
        ],
    },
    {
        icon: Bot,
        title: 'Telegram botlar',
        desc: 'Avtomatlashtirish uchun botlar',
        prices: [
            { name: 'Oddiy bot', price: '4 300 000 so\'m +' },
            { name: 'Murakkab bot', price: '6 500 000 so\'m +' },
        ],
    },
    {
        icon: Headphones,
        title: 'Texnik qo\'llab-quvvatlash',
        desc: '24/7 monitoring va yordam',
        prices: [
            { name: 'Soatlik', price: '450 000 so\'m +' },
            { name: 'Oylik', price: '2 200 000 so\'m +' },
        ],
    },
    {
        icon: Code,
        title: 'Maxsus dasturlash',
        desc: 'Talabingizga mos yechim',
        prices: [
            { name: 'Loyiha narxi', price: 'Kelishiladi' },
        ],
    },
]

export default function Services() {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact')
        contactSection?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="services" className="py-20 bg-[#f9fafb] scroll-mt-24 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
                <div className="text-center mb-16">
                    <span className="text-[#989898] font-medium tracking-widest text-sm uppercase">XIZMATLAR</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-4 text-[#000000]">Bizning xizmatlarimiz</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <div
                                key={index}
                                onClick={scrollToContact}
                                className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-2xl hover:border-[#60a5fa] hover:-translate-y-3 transition-all duration-300 border-2 border-gray-100 group cursor-pointer relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#eff6ff] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative z-10">
                                    <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#93c5fd] to-[#60a5fa] text-white mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                                        <Icon className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4 text-[#000000] group-hover:text-[#60a5fa] transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-[#6b7280] mb-8 text-base leading-relaxed">{service.desc}</p>

                                    {/* Narxlar */}
                                    <div className="mb-8 pb-8 border-b border-gray-100">
                                        <p className="text-xs text-[#989898] uppercase tracking-wider mb-4 font-semibold">Narxlar</p>
                                        <ul className="space-y-3">
                                            {service.prices.map((item, i) => (
                                                <li key={i} className="flex items-center justify-between text-sm">
                                                    <span className="text-[#6b7280] font-medium">{item.name}</span>
                                                    <span className="text-[#60a5fa] font-bold">{item.price}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* CTA Button */}
                                    <button
                                        aria-label={`${service.title} uchun so'rov yuborish`}
                                        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#60a5fa] to-[#3b82f6] text-white font-semibold py-3 px-6 rounded-xl md:opacity-0 md:group-hover:opacity-100 transform md:translate-y-2 md:group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:shadow-xl">
                                        <span>So'rov yuborish</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
