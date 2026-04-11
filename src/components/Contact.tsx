'use client'

import { Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', phone: '', service: '', message: '' })
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null)

    const generateRequestId = () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
        let id = 'WG-'
        for (let i = 0; i < 6; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length))
        }
        return id
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        setStatus(null)

        try {
            const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN
            const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID
            const requestId = generateRequestId()
            const now = new Date()
            const date = now.toLocaleDateString('uz-UZ', { day: '2-digit', month: '2-digit', year: 'numeric' })
            const time = now.toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit', second: '2-digit' })

            const text = `🚀 Yangi so'rov!\n\n🆔 ID: ${requestId}\n\n👤 Ism: ${formData.name}\n📞 Telefon: ${formData.phone}\n🔧 Xizmat: ${formData.service}\n💬 Xabar: ${formData.message}\n\n📅 Sana: ${date}, ${time}`

            const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: text,
                    parse_mode: 'HTML'
                })
            })

            if (response.ok) {
                setStatus({ type: 'success', message: 'So\'rov muvaffaqiyatli yuborildi!' })
                setFormData({ name: '', phone: '', service: '', message: '' })
            } else {
                throw new Error('Xatolik yuz berdi')
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Xatolik yuz berdi. Iltimos qaytadan urinib ko\'ring.' })
        } finally {
            setLoading(false)
        }
    }

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
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <input
                            type="text"
                            placeholder="Ismingiz"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-[#f9fafb] text-[#000000] px-4 py-4 rounded-xl outline-none focus:ring-2 ring-[#60a5fa]/30 border border-gray-200 focus:border-[#60a5fa]"
                            required
                        />
                        <input
                            type="tel"
                            placeholder="+998 90 123 45 67"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-[#f9fafb] text-[#000000] px-4 py-4 rounded-xl outline-none focus:ring-2 ring-[#60a5fa]/30 border border-gray-200 focus:border-[#60a5fa]"
                            required
                        />
                        <select
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full bg-[#f9fafb] text-[#000000] px-4 py-4 rounded-xl outline-none focus:ring-2 ring-[#60a5fa]/30 border border-gray-200 focus:border-[#60a5fa]"
                            required
                        >
                            <option value="" disabled>Xizmat turini tanlang</option>
                            <option value="Veb-sayt yaratish">Veb-sayt yaratish</option>
                            <option value="CRM/ERP tizimlar">CRM/ERP tizimlar</option>
                            <option value="Mobil ilovalar">Mobil ilovalar</option>
                            <option value="Telegram botlar">Telegram botlar</option>
                            <option value="Texnik qo'llab-quvvatlash">Texnik qo'llab-quvvatlash</option>
                            <option value="Maxsus dasturlash">Maxsus dasturlash</option>
                            <option value="Boshqa">Boshqa</option>
                        </select>
                        <textarea
                            placeholder="Loyihangiz haqida qisqacha..."
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full bg-[#f9fafb] text-[#000000] px-4 py-4 rounded-xl outline-none focus:ring-2 ring-[#60a5fa]/30 border border-gray-200 focus:border-[#60a5fa] resize-none"
                            required
                        ></textarea>

                        {status && (
                            <div className={`p-4 rounded-xl text-sm font-medium ${status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                                {status.message}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="font-bold py-4 rounded-xl bg-gradient-to-r from-[#60a5fa] to-[#3b82f6] hover:from-[#3b82f6] hover:to-[#2563eb] text-white shadow-lg btn-hover-lift flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <Send className="w-5 h-5" />
                            {loading ? 'Yuborilmoqda...' : 'So\'rov yuborish'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
