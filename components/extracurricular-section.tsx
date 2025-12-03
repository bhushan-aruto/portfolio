

"use client"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { MagicCard } from "@/components/ui/magic-card"
import { BorderBeam } from "@/components/ui/border-beam"

// -----------------------------------------------------------
// THEME CONSTANTS (Matching all previous sections)
// -----------------------------------------------------------
const LIGHT_GLASS_CARD_CLASSES = "backdrop-blur-sm bg-white/50 border border-white/80 shadow-xl hover:bg-white/90 transition-all duration-500 ring-1 ring-sky-100/50"
const ACCENT_COLOR_CLASS = "text-sky-800"
const HOVER_TITLE_CLASS = "group-hover:text-sky-700"
// -----------------------------------------------------------

export function ExtracurricularSection() {
    return (
        // Main container with the light gradient background
        <section className="px-4 sm:px-6 lg:px-8 py-12 
            bg-gradient-to-br from-sky-50 to-white 
            text-gray-900 relative overflow-hidden">

            {/* Background elements (subtle) for light UI */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <h2 className={`text-3xl font-bold mb-8 ${ACCENT_COLOR_CLASS} border-b border-sky-200 pb-2`}>
                    Extracurricular Activities
                </h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {/* Applied Glassmorphism theme class to MagicCard */}
                    <MagicCard className={`group relative overflow-hidden ${LIGHT_GLASS_CARD_CLASSES}`}>
                        <BorderBeam duration={8} size={100} />

                        <CardHeader className="pb-3 pt-6 px-6">
                            <CardTitle className={`${ACCENT_COLOR_CLASS} ${HOVER_TITLE_CLASS} transition-colors duration-300`}>
                                State-level Kabaddi Player
                            </CardTitle>
                            <CardDescription className="text-gray-600">VTU Champions Team, 2021</CardDescription>
                        </CardHeader>

                        <CardContent className="pt-4 pb-6 px-6">
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li className="transition-all duration-300 hover:text-sky-700">
                                    Represented the state-level Kabaddi team and played a key role in securing the VTU championship
                                    victory in 2021
                                </li>
                                <li className="transition-all duration-300 hover:text-sky-700">
                                    Developed strong teamwork, discipline, and physical endurance through competitive Kabaddi
                                </li>
                            </ul>
                        </CardContent>
                    </MagicCard>
                </motion.div>
            </div>
        </section>
    )
}