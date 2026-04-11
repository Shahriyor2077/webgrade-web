import { Phone, Mail, AtSign, MapPin } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="bg-[#0f172a] text-[#94a3b8] pt-20 pb-8 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div>
                        <div className="mb-6">
                            <Image src="/logo.svg" alt="Webgrade" width={120} height={32} className="h-10 w-auto brightness-0 invert" />
                        </div>
                        <p className="text-sm leading-relaxed text-[#cbd5e1]">
                            Biznes uchun tezkor va barqaror IT yechimlar.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 text-base">Xizmatlar</h4>
                        <ul className="space-y-3 text-sm">
                            {['Veb-sayt yaratish', 'CRM tizimlar', 'Mobil ilovalar', 'Telegram botlar'].map((item, i) => (
                                <li key={i}>
                                    <a href="#services" className="hover:text-[#60a5fa] transition-colors duration-300">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 text-base">Kompaniya</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#about" className="hover:text-[#60a5fa] transition-colors duration-300">Biz haqimizda</a></li>
                            <li><a href="#contact" className="hover:text-[#60a5fa] transition-colors duration-300">Aloqa</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 text-base">Bog'lanish</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <Phone className="w-4 h-4 text-[#60a5fa] mt-1" />
                                <a href="tel:+998973027750" className="hover:text-[#60a5fa] transition-colors">+998 97 302 77 50</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="w-4 h-4 text-[#60a5fa] mt-1" />
                                <a href="mailto:webgradeuz@gmail.com" className="hover:text-[#60a5fa] transition-colors break-all">webgradeuz@gmail.com</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <AtSign className="w-4 h-4 text-[#60a5fa] mt-1" />
                                <a href="https://t.me/webgradeuz" target="_blank" rel="noopener noreferrer" className="hover:text-[#60a5fa] transition-colors">@webgradeuz</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-[#60a5fa] mt-1" />
                                <span>Toshkent, O'zbekiston</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-[#1e293b] pt-8 text-center">
                    <p className="text-sm text-[#cbd5e1]">© 2026 Webgrade. Barcha huquqlar himoyalangan.</p>
                </div>
            </div>
        </footer>
    )
}
