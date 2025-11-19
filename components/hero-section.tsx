"use client"
import Image from "next/image"
import { MapPin, Phone, Mail } from 'lucide-react'
import { EncryptedText } from "@/components/ui/encrypted-text";


export function HeroSection() {
    return (
        <section className="relative h-[500px] bg-gradient-to-r from-[#0C4A6E] via-[#0EA5E9] to-[#075985]">
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent" />
            <div className="container mx-auto px-4 h-full relative">
                <div className="flex flex-col md:flex-row items-center justify-center h-full gap-8">
                    <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <Image
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bhushan_image.jpg-bIWK7aoMbo2B1UP0wJzulkFFApN3Ia.jpeg"
                            alt="Professional headshot"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="text-center md:text-left text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">NAGABHUSHANA H K</h1>

                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <div className="flex items-center gap-2 transition-all duration-300 hover:text-sky-100">
                                <MapPin className="w-4 h-4" />
                                <span>Karnataka, Shivamogga, Talale</span>
                            </div>
                            <div className="flex items-center gap-2 transition-all duration-300 hover:text-sky-100">
                                <Phone className="w-4 h-4" />
                                <span>8317498525</span>
                            </div>
                            <div className="flex items-center gap-2 transition-all duration-300 hover:text-sky-100">
                                <Mail className="w-4 h-4" />
                                <span>developer.bhushanhk@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
