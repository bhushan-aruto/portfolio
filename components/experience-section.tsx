"use client"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { MagicCard } from "@/components/ui/magic-card"
import { BorderBeam } from "@/components/ui/border-beam"

export function ExperienceSection() {
    return (
        <section>
            <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b border-gray-200 pb-2">Experience</h2>
            <div className="grid gap-6">
                {/* Vithsutra Technologies */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <MagicCard className="group relative overflow-hidden">
                        <BorderBeam duration={8} size={100} />
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div>
                                    <CardTitle className="group-hover:text-sky-700 transition-colors duration-300">
                                        Backend Developer
                                    </CardTitle>
                                    <CardDescription>Vithsutra Technologies Pvt. Ltd.</CardDescription>
                                </div>
                                <Badge variant="outline" className="bg-sky-50 text-sky-700 border-sky-200">
                                    2024 – 2025
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <p className="text-gray-600 mb-2 italic">Remote</p>
                            <div className="space-y-4">
                                <div className="flex flex-wrap gap-2">
                                    {["Golang", "RESTful APIs", "PostgreSQL", "PDF Generation", "gopdf", "godotenv"].map((tech) => (
                                        <Badge
                                            key={tech}
                                            variant="outline"
                                            className="bg-white hover:bg-gray-50 text-gray-700 transition-all duration-300"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                                <ul className="list-disc list-inside space-y-2 text-gray-600">
                                    <li className="transition-all duration-300 hover:text-gray-900">
                                        Contributed to the backend development of the APMC Billing Application using Golang, designed
                                        for managing agricultural produce transactions; Deployed in production.
                                    </li>
                                    <li className="transition-all duration-300 hover:text-gray-900">
                                        Implemented robust environment configuration handling (dev/prod) using godotenv to dynamically
                                        load '.env' files based on runtime server mode.
                                    </li>
                                    <li className="transition-all duration-300 hover:text-gray-900">
                                        Designed and developed core RESTful API endpoints for consignee and product modules, including
                                        creation, retrieval, updating, and deletion, following secure and scalable coding practices.
                                    </li>
                                    <li className="transition-all duration-300 hover:text-gray-900">
                                        Developed and integrated a dynamic PDF generation system using gopdf across multiple internal
                                        tools such as the biometric attendance system and recharge machine.
                                    </li>
                                </ul>
                            </div>
                        </CardContent>
                    </MagicCard>
                </motion.div>

                {/* Aspiration Matters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <MagicCard className="group relative overflow-hidden">
                        <BorderBeam duration={8} size={100} />
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div>
                                    <CardTitle className="group-hover:text-sky-700 transition-colors duration-300">
                                        Backend Developer Intern
                                    </CardTitle>
                                    <CardDescription className="text-gray-600">
                                        Aspiration Matters
                                        <span className="ml-2 inline-flex items-center gap-1 text-sky-600 hover:text-sky-700 font-medium transition-colors">
                                            <a
                                                href="https://www.aspirationmatters.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 group"
                                            >
                                                <span className="underline group-hover:no-underline">Visit Site</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.8}
                                                    stroke="currentColor"
                                                    className="w-4 h-4"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M13.5 4.5H19.5V10.5M10.5 13.5L19.5 4.5M4.5 19.5H19.5"
                                                    />
                                                </svg>
                                            </a>
                                        </span>
                                    </CardDescription>
                                </div>
                                <Badge variant="outline" className="bg-sky-50 text-sky-700 border-sky-200">
                                    Feb 2025 – july 2025
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <p className="text-gray-600 mb-2 italic">Remote</p>
                            <div className="space-y-4">
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "Golang",
                                        "Next.js",
                                        "AWS S3",
                                        "CloudFront",
                                        "RabbitMQ",
                                        "Echo",
                                        "MongoDB",
                                        "Razorpay",
                                        "SendGrid",
                                        "DigitalOcean",
                                        "Vercel",
                                        "Postman",
                                    ].map((tech) => (
                                        <Badge
                                            key={tech}
                                            variant="outline"
                                            className="bg-white hover:bg-gray-50 text-gray-700 transition-all duration-300"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                                <ul className="list-disc list-inside space-y-2 text-gray-600">
                                    <li className="transition-all duration-300 hover:text-gray-900">
                                        Developing a scalable course-based e-learning platform with a fully dynamic website
                                        (aspirationmatters.com) using Next.js (frontend) and Golang (backend).
                                    </li>
                                    <li className="transition-all duration-300 hover:text-gray-900">
                                        Integrated Razorpay for secure course purchases with dynamic course unlocking logic post-payment
                                        verification.
                                    </li>
                                    <li className="transition-all duration-300 hover:text-gray-900">
                                        Built a cloud-native video delivery pipeline with AWS S3 for video/image uploads and CloudFront
                                        for secure, high-speed streaming.
                                    </li>
                                    <li className="transition-all duration-300 hover:text-gray-900">
                                        Designed and developed backend APIs for a dynamic admin panel, enabling course creators to
                                        manage videos, content, blogs, and testimonials via MongoDB; tested and validated endpoints
                                        using Postman.
                                    </li>
                                    <li className="transition-all duration-300 hover:text-gray-900">
                                        Implemented a dedicated microservice for OTP and email notifications using RabbitMQ, Echo
                                        (Golang), and SendGrid.
                                    </li>
                                    <li className="transition-all duration-300 hover:text-gray-900">
                                        Enabled OTP-based signup authentication and automated welcome emails, contact replies, and
                                        course inquiry messages via SendGrid.
                                    </li>
                                    <li className="transition-all duration-300 hover:text-gray-900">
                                        Handled full-stack deployment: backend on DigitalOcean, frontend on Vercel, ensuring high uptime
                                        and scalability in production.
                                    </li>
                                </ul>
                            </div>
                        </CardContent>
                    </MagicCard>
                </motion.div>
            </div>
        </section>
    )
}
