"use client"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { MagicCard } from "@/components/ui/magic-card"
import { BorderBeam } from "@/components/ui/border-beam"

export function EducationSection() {
    return (
        <section>
            <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b border-gray-200 pb-2">Education</h2>
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
                            Bachelor of Engineering (B.E)
                        </CardTitle>
                        <CardDescription>Electronics and Communication Engineering</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <div className="flex flex-wrap justify-between gap-4">
                            <div>
                                <p className="text-gray-600">Visvesvaraya Technological University (VTU)</p>
                                <p className="text-gray-600">Mudubidre, Karnataka</p>
                            </div>
                            <div className="text-right">
                                <p className="text-gray-600">NOV. 2021 – April 2025</p>
                                <p className="text-sky-600 font-bold text-lg">CGPA: 8.1</p>
                            </div>
                        </div>
                    </CardContent>
                </MagicCard>
            </motion.div>
        </section>
    )
}
