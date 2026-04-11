'use client'

import { Send } from 'lucide-react'

export default function Contact() {
    return (
        <section id="contact" className="bg-[#f9fafb] text-[#000000] py-20 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-16 items-center w-full">
                <div>
                    <span className="inline-flex items-center gap-2 text-[#60a5fa] font-semibold tracking-wide uppercase text-xs bg-[#eff6ff] px-4 py-2 rounded-full mb-6">
                        Bog'lanish
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Boshlashga tayyormisiz?</h2>
                    <p className="text-[#6b7280] text-lg mb-8 max-w-md leading-relaxed">
                        Bepul konsultatsiya, aniq tavsiyalar, hech qanday majburiyat yo'q.
                    </p>
                    <a
                        href="https://t.me/webgradeuz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#60a5fa] to-[#3b82f6] text-white px-8 py-4 rounded-xl hover:from-[#3b82f6] hover:to-[#2563eb] transition-all shadow-lg font-semibold hover:scale-105 hover:shadow-xl"
                    >
                        <Send className="w-5 h-5" />
                        Telegram orqali yozish
                    </a>
                </div>

                <div className="bg-white p-10 md:p-12 rounded-3xl border border-gray-200 shadow-xl">
                    <h3 className="text-2xl font-bold mb-8 text-[#000000]">So'rov qoldiring</h3>
                    <form className="flex flex-col gap-5">
                        <input
                            type="text"
                            placeholder="Ismingiz"
                            className="w-full bg-[#f9fafb] text-[#000000] px-4 py-4 rounded-xl outline-none focus:ring-2 ring-[#60a5fa]/30 border border-gray-200 focus:border-[#60a5fa]"
                            required
                        />
                        <input
                            type="tel"
                            placeholder="+998 90 123 45 67"
                            className="w-full bg-[#f9fafb] text-[#000000] px-4 py-4 rounded-xl outline-none focus:ring-2 ring-[#60a5fa]/30 border border-gray-200 focus:border-[#60a5fa]"
                            required
                        />
                        <textarea
                            placeholder="Loyihangiz haqida qisqacha..."
                            rows={4}
                            className="w-full bg-[#f9fafb] text-[#000000] px-4 py-4 rounded-xl outline-none focus:ring-2 ring-[#60a5fa]/30 border border-gray-200 focus:border-[#60a5fa] resize-none"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="font-bold py-4 rounded-xl bg-gradient-to-r from-[#60a5fa] to-[#3b82f6] hover:from-[#3b82f6] hover:to-[#2563eb] text-white shadow-lg btn-hover-lift flex justify-center items-center gap-2"
                        >
                            <Send className="w-5 h-5" />
                            So'rov yuborish
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
