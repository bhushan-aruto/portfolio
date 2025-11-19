"use client"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { MagicCard } from "@/components/ui/magic-card"
import { BorderBeam } from "@/components/ui/border-beam"

export function ExtracurricularSection() {
    return (
        <section>
            <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b border-gray-200 pb-2">
                Extracurricular Activities
            </h2>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <MagicCard className="group relative overflow-hidden">
                    <BorderBeam duration={8} size={100} />
                    <CardHeader>
                        <CardTitle className="group-hover:text-sky-700 transition-colors duration-300">
                            State-level Kabaddi Player
                        </CardTitle>
                        <CardDescription>VTU Champions Team, 2021</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                            <li className="transition-all duration-300 hover:text-gray-900">
                                Represented the state-level Kabaddi team and played a key role in securing the VTU championship
                                victory in 2021
                            </li>
                            <li className="transition-all duration-300 hover:text-gray-900">
                                Developed strong teamwork, discipline, and physical endurance through competitive Kabaddi
                            </li>
                        </ul>
                    </CardContent>
                </MagicCard>
            </motion.div>
        </section>
    )
}
