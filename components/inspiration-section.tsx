

"use client"

import { Card } from "@/components/ui/card"
import { SplineScene } from "@/components/ui/splite"

export function InspirationSection() {
    return (
        <section className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <Card className="w-full bg-gradient-to-br from-sky-50 via-white to-sky-50 border-sky-100 shadow-lg overflow-hidden">
                    <div className="flex flex-col lg:flex-row h-full min-h-[400px] md:min-h-[500px]">
                        {/* Left content - Luffy Quote */}
                        <div className="flex-1 p-6 sm:p-8 md:p-10 lg:p-12 relative z-10 flex flex-col justify-center items-center lg:items-start">
                            <div className="w-full max-w-lg">
                                <blockquote className="mb-6">

                                    <p
                                        className="font-[var(--font-poppins)] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-sky-600 via-sky-500 to-sky-400 bg-clip-text text-transparent leading-tight"
                                    >
                                        "as long as I'm alive, there are infinite chances !"
                                    </p>
                                </blockquote>
                                <p className="text-base sm:text-lg text-sky-1000 font-medium mt-6 font-sans">— Monkey D. Luffy</p>
                            </div>
                        </div>

                        {/* Right content - 3D Robot Scene */}
                        <div className="flex-1 relative overflow-hidden min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-auto">
                            <SplineScene
                                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    )
}
