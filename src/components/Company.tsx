'use client'

import { CheckCircle, Users, Briefcase, Clock } from 'lucide-react'

export default function Company() {
    return (
        <section id="about" className="bg-[#f8f9fc] py-20 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="inline-flex items-center gap-2 text-[#60a5fa] font-semibold tracking-wide uppercase text-xs bg-[#eff6ff] px-4 py-2 rounded-full">
                            <span className="w-2 h-2 bg-[#60a5fa] rounded-full"></span>
                            Biz haqimizda
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mt-6 leading-tight">
                            Bizneslarni <span className="text-[#60a5fa]">raqamlashtirish</span> — bizning ishimiz
                        </h2>

                        <p className="text-[#6b7280] mt-8 leading-relaxed text-lg">
                            Biz kompaniyalarning onlayn mavjudligini noldan quramiz: saytlar, tizimlar, botlar va avtomatlashtirish yechimlari.
                        </p>

                        <ul className="space-y-4 mt-8">
                            {['Real loyihalar bilan tasdiqlangan tajriba', 'Zamonaviy va ishonchli texnologiyalar', 'Belgilangan muddatda topshirish'].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-[#374151]">
                                    <div className="w-6 h-6 bg-[#d1fae5] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <CheckCircle className="w-4 h-4 text-[#10b981]" />
                                    </div>
                                    <span className="text-base">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white rounded-3xl p-10 md:p-12 shadow-xl border-2 border-gray-100">
                        <div className="text-center mb-12">
                            <div className="w-24 h-24 bg-gradient-to-br from-[#60a5fa] to-[#3b82f6] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                                <span className="text-4xl font-bold text-white">W</span>
                            </div>
                            <h3 className="text-2xl font-bold text-[#000000]">Webgrade</h3>
                            <p className="text-[#6b7280] text-sm mt-2">IT Solutions</p>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mb-8">
                            {[{ icon: Briefcase, value: '13+', label: 'Loyihalar' }, { icon: Users, value: '6+', label: 'Jamoa' }, { icon: Clock, value: '3+', label: 'Yillik tajriba' }].map((stat, i) => (
                                <div key={i} className="bg-gradient-to-br from-[#eff6ff] to-[#f0f9ff] rounded-2xl p-5 text-center">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#60a5fa] to-[#3b82f6] rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <stat.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="text-3xl font-bold text-[#000000] mb-1">{stat.value}</h4>
                                    <p className="text-[#6b7280] text-xs">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
