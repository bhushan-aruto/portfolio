// "use client"
// import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { motion } from "framer-motion"
// import { MagicCard } from "@/components/ui/magic-card"
// import { BorderBeam } from "@/components/ui/border-beam"

// export function EducationSection() {
//     return (
//         <section>
//             <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b border-gray-200 pb-2">Education</h2>
//             <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 viewport={{ once: true }}
//             >
//                 <MagicCard className="group relative overflow-hidden">
//                     <BorderBeam duration={8} size={100} />
//                     <CardHeader>
//                         <CardTitle className="group-hover:text-sky-700 transition-colors duration-300">
//                             Bachelor of Engineering (B.E)
//                         </CardTitle>
//                         <CardDescription>Electronics and Communication Engineering</CardDescription>
//                     </CardHeader>
//                     <CardContent className="pt-6">
//                         <div className="flex flex-wrap justify-between gap-4">
//                             <div>
//                                 <p className="text-gray-600">Visvesvaraya Technological University (VTU)</p>
//                                 <p className="text-gray-600">Mudubidre, Karnataka</p>
//                             </div>
//                             <div className="text-right">
//                                 <p className="text-gray-600">NOV. 2021 – April 2025</p>
//                                 <p className="text-sky-600 font-bold text-lg">CGPA: 8.1</p>
//                             </div>
//                         </div>
//                     </CardContent>
//                 </MagicCard>
//             </motion.div>
//         </section>
//     )
// }


"use client"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { MagicCard } from "@/components/ui/magic-card"
import { BorderBeam } from "@/components/ui/border-beam"

// -----------------------------------------------------------
// THEME CONSTANTS (Matching Experience & Technical Skills)
// -----------------------------------------------------------
// Light Glass Card Style: Semi-transparent white card with subtle border/shadow
const LIGHT_GLASS_CARD_CLASSES = "backdrop-blur-sm bg-white/50 border border-white/80 shadow-xl hover:bg-white/90 transition-all duration-500 ring-1 ring-sky-100/50"

// Primary Accent Color: Dark Sky Blue
const ACCENT_COLOR_CLASS = "text-sky-800"
const HOVER_TITLE_CLASS = "group-hover:text-sky-700"
// -----------------------------------------------------------

export function EducationSection() {
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
                    Education
                </h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {/* Applied Glassmorphism theme class to MagicCard */}
                    <MagicCard className={`group relative overflow-hidden ${LIGHT_GLASS_CARD_CLASSES} p-0`}>
                        <BorderBeam duration={8} size={100} />

                        <CardHeader className="pb-3 pt-6 px-6">
                            <CardTitle className={`${ACCENT_COLOR_CLASS} ${HOVER_TITLE_CLASS} transition-colors duration-300`}>
                                Bachelor of Engineering (B.E)
                            </CardTitle>
                            <CardDescription className="text-gray-600">Electronics and Communication Engineering</CardDescription>
                        </CardHeader>

                        <CardContent className="pt-4 pb-6 px-6">
                            {/* Adjusted for better mobile stacking (flex-col on small screen) */}
                            <div className="flex flex-col sm:flex-row justify-between gap-4">

                                <div className="space-y-1">
                                    {/* University and Location */}
                                    <p className="text-gray-700 font-semibold">Visvesvaraya Technological University (VTU)</p>
                                    <p className="text-gray-600 text-sm">Mudubidre, Karnataka</p>
                                </div>

                                <div className="text-left sm:text-right space-y-1">
                                    {/* Dates and CGPA */}
                                    <p className="text-gray-600 text-sm font-medium">NOV. 2021 – April 2025</p>
                                    {/* Accent color for CGPA */}
                                    <p className="text-sky-700 font-extrabold text-xl">CGPA: 8.1</p>
                                </div>
                            </div>
                        </CardContent>
                    </MagicCard>
                </motion.div>
            </div>
        </section>
    )
}