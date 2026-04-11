'use client'

import Link from 'next/link'
import { Home, ArrowLeft, Search } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function NotFound() {
    const router = useRouter()

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f9fafb] via-[#eff6ff] to-[#f9fafb] flex items-center justify-center px-6">
            <div className="max-w-2xl w-full text-center">
                {/* Animated 404 */}
                <div className="relative mb-8">
                    <h1 className="text-[180px] md:text-[250px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#3b82f6] leading-none animate-pulse">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Search className="w-24 h-24 text-[#60a5fa]/20 animate-bounce" />
                    </div>
                </div>

                {/* Message */}
                <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-4">
                    Sahifa topilmadi
                </h2>
                <p className="text-[#6b7280] text-lg mb-8 max-w-md mx-auto">
                    Kechirasiz, siz qidirayotgan sahifa mavjud emas yoki ko'chirilgan bo'lishi mumkin.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => router.back()}
                        className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#000000] font-semibold px-8 py-4 rounded-xl border-2 border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        Orqaga qaytish
                    </button>
                    <Link
                        href="/"
                        className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#60a5fa] to-[#3b82f6] hover:from-[#3b82f6] hover:to-[#2563eb] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
                    >
                        <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        Bosh sahifa
                    </Link>
                </div>

                {/* Decorative elements */}
                <div className="mt-16 flex justify-center gap-4">
                    <div className="w-3 h-3 bg-[#60a5fa] rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="w-3 h-3 bg-[#3b82f6] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-3 h-3 bg-[#2563eb] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
            </div>
        </div>
    )
}
