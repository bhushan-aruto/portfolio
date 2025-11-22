// "use client"
// import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { motion } from "framer-motion"
// import { MagicCard } from "@/components/ui/magic-card"
// import { BorderBeam } from "@/components/ui/border-beam"

// export function ExperienceSection() {
//     return (
//         <section>
//             <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b border-gray-200 pb-2">Experience</h2>
//             <div className="grid gap-6">
//                 {/* Vithsutra Technologies */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     viewport={{ once: true }}
//                 >
//                     <MagicCard className="group relative overflow-hidden">
//                         <BorderBeam duration={8} size={100} />
//                         <CardHeader>
//                             <div className="flex justify-between items-start">
//                                 <div>
//                                     <CardTitle className="group-hover:text-sky-700 transition-colors duration-300">
//                                         Backend Developer
//                                     </CardTitle>
//                                     <CardDescription>Vithsutra Technologies Pvt. Ltd.</CardDescription>
//                                 </div>
//                                 <Badge variant="outline" className="bg-sky-50 text-sky-700 border-sky-200">
//                                     2024 – 2025
//                                 </Badge>
//                             </div>
//                         </CardHeader>
//                         <CardContent className="pt-6">
//                             <p className="text-gray-600 mb-2 italic">Remote</p>
//                             <div className="space-y-4">
//                                 <div className="flex flex-wrap gap-2">
//                                     {["Golang", "RESTful APIs", "PostgreSQL", "PDF Generation", "gopdf", "godotenv"].map((tech) => (
//                                         <Badge
//                                             key={tech}
//                                             variant="outline"
//                                             className="bg-white hover:bg-gray-50 text-gray-700 transition-all duration-300"
//                                         >
//                                             {tech}
//                                         </Badge>
//                                     ))}
//                                 </div>
//                                 <ul className="list-disc list-inside space-y-2 text-gray-600">
//                                     <li className="transition-all duration-300 hover:text-gray-900">
//                                         Contributed to the backend development of the APMC Billing Application using Golang, designed
//                                         for managing agricultural produce transactions; Deployed in production.
//                                     </li>
//                                     <li className="transition-all duration-300 hover:text-gray-900">
//                                         Implemented robust environment configuration handling (dev/prod) using godotenv to dynamically
//                                         load '.env' files based on runtime server mode.
//                                     </li>
//                                     <li className="transition-all duration-300 hover:text-gray-900">
//                                         Designed and developed core RESTful API endpoints for consignee and product modules, including
//                                         creation, retrieval, updating, and deletion, following secure and scalable coding practices.
//                                     </li>
//                                     <li className="transition-all duration-300 hover:text-gray-900">
//                                         Developed and integrated a dynamic PDF generation system using gopdf across multiple internal
//                                         tools such as the biometric attendance system and recharge machine.
//                                     </li>
//                                 </ul>
//                             </div>
//                         </CardContent>
//                     </MagicCard>
//                 </motion.div>

//                 {/* Aspiration Matters */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 0.2 }}
//                     viewport={{ once: true }}
//                 >
//                     <MagicCard className="group relative overflow-hidden">
//                         <BorderBeam duration={8} size={100} />
//                         <CardHeader>
//                             <div className="flex justify-between items-start">
//                                 <div>
//                                     <CardTitle className="group-hover:text-sky-700 transition-colors duration-300">
//                                         Backend Developer Intern
//                                     </CardTitle>
//                                     <CardDescription className="text-gray-600">
//                                         Aspiration Matters
//                                         <span className="ml-2 inline-flex items-center gap-1 text-sky-600 hover:text-sky-700 font-medium transition-colors">
//                                             <a
//                                                 href="https://www.aspirationmatters.com"
//                                                 target="_blank"
//                                                 rel="noopener noreferrer"
//                                                 className="inline-flex items-center gap-1 group"
//                                             >
//                                                 <span className="underline group-hover:no-underline">Visit Site</span>
//                                                 <svg
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                     fill="none"
//                                                     viewBox="0 0 24 24"
//                                                     strokeWidth={1.8}
//                                                     stroke="currentColor"
//                                                     className="w-4 h-4"
//                                                 >
//                                                     <path
//                                                         strokeLinecap="round"
//                                                         strokeLinejoin="round"
//                                                         d="M13.5 4.5H19.5V10.5M10.5 13.5L19.5 4.5M4.5 19.5H19.5"
//                                                     />
//                                                 </svg>
//                                             </a>
//                                         </span>
//                                     </CardDescription>
//                                 </div>
//                                 <Badge variant="outline" className="bg-sky-50 text-sky-700 border-sky-200">
//                                     Feb 2025 – july 2025
//                                 </Badge>
//                             </div>
//                         </CardHeader>
//                         <CardContent className="pt-6">
//                             <p className="text-gray-600 mb-2 italic">Remote</p>
//                             <div className="space-y-4">
//                                 <div className="flex flex-wrap gap-2">
//                                     {[
//                                         "Golang",
//                                         "Next.js",
//                                         "AWS S3",
//                                         "CloudFront",
//                                         "RabbitMQ",
//                                         "Echo",
//                                         "MongoDB",
//                                         "Razorpay",
//                                         "SendGrid",
//                                         "DigitalOcean",
//                                         "Vercel",
//                                         "Postman",
//                                     ].map((tech) => (
//                                         <Badge
//                                             key={tech}
//                                             variant="outline"
//                                             className="bg-white hover:bg-gray-50 text-gray-700 transition-all duration-300"
//                                         >
//                                             {tech}
//                                         </Badge>
//                                     ))}
//                                 </div>
//                                 <ul className="list-disc list-inside space-y-2 text-gray-600">
//                                     <li className="transition-all duration-300 hover:text-gray-900">
//                                         Developing a scalable course-based e-learning platform with a fully dynamic website
//                                         (aspirationmatters.com) using Next.js (frontend) and Golang (backend).
//                                     </li>
//                                     <li className="transition-all duration-300 hover:text-gray-900">
//                                         Integrated Razorpay for secure course purchases with dynamic course unlocking logic post-payment
//                                         verification.
//                                     </li>
//                                     <li className="transition-all duration-300 hover:text-gray-900">
//                                         Built a cloud-native video delivery pipeline with AWS S3 for video/image uploads and CloudFront
//                                         for secure, high-speed streaming.
//                                     </li>
//                                     <li className="transition-all duration-300 hover:text-gray-900">
//                                         Designed and developed backend APIs for a dynamic admin panel, enabling course creators to
//                                         manage videos, content, blogs, and testimonials via MongoDB; tested and validated endpoints
//                                         using Postman.
//                                     </li>
//                                     <li className="transition-all duration-300 hover:text-gray-900">
//                                         Implemented a dedicated microservice for OTP and email notifications using RabbitMQ, Echo
//                                         (Golang), and SendGrid.
//                                     </li>
//                                     <li className="transition-all duration-300 hover:text-gray-900">
//                                         Enabled OTP-based signup authentication and automated welcome emails, contact replies, and
//                                         course inquiry messages via SendGrid.
//                                     </li>
//                                     <li className="transition-all duration-300 hover:text-gray-900">
//                                         Handled full-stack deployment: backend on DigitalOcean, frontend on Vercel, ensuring high uptime
//                                         and scalability in production.
//                                     </li>
//                                 </ul>
//                             </div>
//                         </CardContent>
//                     </MagicCard>
//                 </motion.div>
//             </div>
//         </section>
//     )
// }






// "use client"
// import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { motion } from "framer-motion"
// import { MagicCard } from "@/components/ui/magic-card" // Assuming this component supports background customization
// import { BorderBeam } from "@/components/ui/border-beam" // Custom component for border animation

// // -----------------------------------------------------------
// // THEME CONSTANTS (Matching TechnicalSkillsSection)
// // -----------------------------------------------------------
// // 1. Light Glass Card Style: Semi-transparent white card with subtle border/shadow
// const LIGHT_GLASS_CARD_CLASSES = "backdrop-blur-sm bg-white/50 border border-white/80 shadow-xl hover:bg-white/90 transition-all duration-500 ring-1 ring-sky-100/50"

// // 2. Primary Accent Color (for badges/titles): Dark Sky Blue
// const ACCENT_COLOR_CLASS = "text-sky-800"
// const ACCENT_BADGE_CLASS = "bg-sky-100 text-sky-800 border-sky-300"
// const HOVER_TITLE_CLASS = "group-hover:text-sky-700"
// // -----------------------------------------------------------


// export function ExperienceSection() {
//     return (
//         // The main section is placed inside the light gradient background
//         <section className="px-4 sm:px-6 lg:px-8 py-12 
//             bg-gradient-to-br from-sky-50 to-white 
//             text-gray-900 relative overflow-hidden">

//             {/* Background elements (subtle) for light UI */}
//             <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
//             <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

//             <div className="relative z-10 max-w-7xl mx-auto">
//                 <h2 className={`text-3xl font-bold mb-8 ${ACCENT_COLOR_CLASS} border-b border-sky-200 pb-2`}>
//                     Professional Experience
//                 </h2>
//                 <div className="grid gap-6">

//                     {/* Vithsutra Technologies */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
//                         viewport={{ once: true, amount: 0.1 }}
//                     >
//                         {/* Applied Glassmorphism theme class to MagicCard */}
//                         <MagicCard className={`group relative overflow-hidden ${LIGHT_GLASS_CARD_CLASSES}`}>
//                             <BorderBeam duration={8} size={100} />
//                             <CardHeader>
//                                 <div className="flex justify-between items-start">
//                                     <div>
//                                         <CardTitle className={`${ACCENT_COLOR_CLASS} ${HOVER_TITLE_CLASS} transition-colors duration-300`}>
//                                             Backend Developer
//                                         </CardTitle>
//                                         <CardDescription className="text-gray-600">Vithsutra Technologies Pvt. Ltd.</CardDescription>
//                                     </div>
//                                     <Badge variant="outline" className={`${ACCENT_BADGE_CLASS}`}>
//                                         2024 – 2025
//                                     </Badge>
//                                 </div>
//                             </CardHeader>
//                             <CardContent className="pt-6">
//                                 <p className="text-gray-600 mb-2 italic">Remote</p>
//                                 <div className="space-y-4">
//                                     {/* Tech Stack Badges */}
//                                     <div className="flex flex-wrap gap-2">
//                                         {["Golang", "RESTful APIs", "PostgreSQL", "PDF Generation", "gopdf", "godotenv"].map((tech) => (
//                                             <Badge
//                                                 key={tech}
//                                                 variant="outline"
//                                                 // Clean badge style on light background
//                                                 className="bg-sky-50 hover:bg-sky-100 text-sky-800 border-sky-200 transition-all duration-300"
//                                             >
//                                                 {tech}
//                                             </Badge>
//                                         ))}
//                                     </div>
//                                     {/* Responsibilities List */}
//                                     <ul className="list-disc list-inside space-y-2 text-gray-700">
//                                         <li className="transition-all duration-300 hover:text-sky-700">
//                                             Contributed to the backend development of the **APMC Billing Application** using **Golang**, designed
//                                             for managing agricultural produce transactions; Deployed in production.
//                                         </li>
//                                         <li className="transition-all duration-300 hover:text-sky-700">
//                                             Implemented robust environment configuration handling (dev/prod) using **godotenv** to dynamically
//                                             load '.env' files based on runtime server mode.
//                                         </li>
//                                         <li className="transition-all duration-300 hover:text-sky-700">
//                                             Designed and developed core **RESTful API** endpoints for consignee and product modules, including
//                                             creation, retrieval, updating, and deletion, following secure and scalable coding practices.
//                                         </li>
//                                         <li className="transition-all duration-300 hover:text-sky-700">
//                                             Developed and integrated a dynamic **PDF generation system** using **gopdf** across multiple internal
//                                             tools such as the biometric attendance system and recharge machine.
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </CardContent>
//                         </MagicCard>
//                     </motion.div>

//                     {/* Aspiration Matters */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
//                         viewport={{ once: true, amount: 0.1 }}
//                     >
//                         {/* Applied Glassmorphism theme class to MagicCard */}
//                         <MagicCard className={`group relative overflow-hidden ${LIGHT_GLASS_CARD_CLASSES}`}>
//                             <BorderBeam duration={8} size={100} />
//                             <CardHeader>
//                                 <div className="flex justify-between items-start">
//                                     <div>
//                                         <CardTitle className={`${ACCENT_COLOR_CLASS} ${HOVER_TITLE_CLASS} transition-colors duration-300`}>
//                                             Backend Developer Intern
//                                         </CardTitle>
//                                         <CardDescription className="text-gray-600">
//                                             Aspiration Matters
//                                             <span className="ml-2 inline-flex items-center gap-1 text-sky-600 hover:text-sky-700 font-medium transition-colors">
//                                                 <a
//                                                     href="https://www.aspirationmatters.com"
//                                                     target="_blank"
//                                                     rel="noopener noreferrer"
//                                                     className="inline-flex items-center gap-1 group"
//                                                 >
//                                                     <span className="underline group-hover:no-underline">Visit Site</span>
//                                                     <svg
//                                                         xmlns="http://www.w3.org/2000/svg"
//                                                         fill="none"
//                                                         viewBox="0 0 24 24"
//                                                         strokeWidth={1.8}
//                                                         stroke="currentColor"
//                                                         className="w-4 h-4"
//                                                     >
//                                                         <path
//                                                             strokeLinecap="round"
//                                                             strokeLinejoin="round"
//                                                             d="M13.5 4.5H19.5V10.5M10.5 13.5L19.5 4.5M4.5 19.5H19.5"
//                                                         />
//                                                     </svg>
//                                                 </a>
//                                             </span>
//                                         </CardDescription>
//                                     </div>
//                                     <Badge variant="outline" className={`${ACCENT_BADGE_CLASS}`}>
//                                         Feb 2025 – July 2025
//                                     </Badge>
//                                 </div>
//                             </CardHeader>
//                             <CardContent className="pt-6">
//                                 <p className="text-gray-600 mb-2 italic">Remote</p>
//                                 <div className="space-y-4">
//                                     {/* Tech Stack Badges */}
//                                     <div className="flex flex-wrap gap-2">
//                                         {[
//                                             "Golang", "Next.js", "AWS S3", "CloudFront", "RabbitMQ", "Echo", "MongoDB", "Razorpay", "SendGrid", "DigitalOcean", "Vercel", "Postman",
//                                         ].map((tech) => (
//                                             <Badge
//                                                 key={tech}
//                                                 variant="outline"
//                                                 // Clean badge style on light background
//                                                 className="bg-sky-50 hover:bg-sky-100 text-sky-800 border-sky-200 transition-all duration-300"
//                                             >
//                                                 {tech}
//                                             </Badge>
//                                         ))}
//                                     </div>
//                                     {/* Responsibilities List */}
//                                     <ul className="list-disc list-inside space-y-2 text-gray-700">
//                                         <li className="transition-all duration-300 hover:text-sky-700">
//                                             Developing a scalable course-based **e-learning platform** with a fully dynamic website
//                                             using **Next.js** (frontend) and **Golang** (backend).
//                                         </li>
//                                         <li className="transition-all duration-300 hover:text-sky-700">
//                                             Integrated **Razorpay** for secure course purchases with dynamic course unlocking logic post-payment
//                                             verification.
//                                         </li>
//                                         <li className="transition-all duration-300 hover:text-sky-700">
//                                             Built a cloud-native video delivery pipeline with **AWS S3** for video/image uploads and **CloudFront**
//                                             for secure, high-speed streaming.
//                                         </li>
//                                         <li className="transition-all duration-300 hover:text-sky-700">
//                                             Designed and developed backend APIs for a dynamic admin panel, enabling course creators to
//                                             manage videos, content, blogs, and testimonials via **MongoDB**; tested and validated endpoints
//                                             using **Postman**.
//                                         </li>
//                                         <li className="transition-all duration-300 hover:text-sky-700">
//                                             Implemented a dedicated **microservice** for OTP and email notifications using **RabbitMQ**, **Echo**
//                                             (Golang), and **SendGrid**.
//                                         </li>
//                                         <li className="transition-all duration-300 hover:text-sky-700">
//                                             Handled full-stack deployment: backend on **DigitalOcean**, frontend on **Vercel**, ensuring high uptime
//                                             and scalability in production.
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </CardContent>
//                         </MagicCard>
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     )
// }





"use client"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { MagicCard } from "@/components/ui/magic-card"
import { BorderBeam } from "@/components/ui/border-beam"

// -----------------------------------------------------------
// THEME CONSTANTS (Matching TechnicalSkillsSection)
// -----------------------------------------------------------
const LIGHT_GLASS_CARD_CLASSES = "backdrop-blur-sm bg-white/50 border border-white/80 shadow-xl hover:bg-white/90 transition-all duration-500 ring-1 ring-sky-100/50"
const ACCENT_COLOR_CLASS = "text-sky-800"
const ACCENT_BADGE_CLASS = "bg-sky-100 text-sky-800 border-sky-300"
const HOVER_TITLE_CLASS = "group-hover:text-sky-700"
// -----------------------------------------------------------


export function ExperienceSection() {
    return (
        <section className="px-4 sm:px-6 lg:px-8 py-12 
            bg-gradient-to-br from-sky-50 to-white 
            text-gray-900 relative overflow-hidden">

            {/* Background elements (subtle) for light UI */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <h2 className={`text-3xl font-bold mb-8 ${ACCENT_COLOR_CLASS} border-b border-sky-200 pb-2`}>
                    Professional Experience
                </h2>
                <div className="grid gap-6">

                    {/* Vithsutra Technologies */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <MagicCard className={`group relative overflow-hidden ${LIGHT_GLASS_CARD_CLASSES}`}>
                            <BorderBeam duration={8} size={100} />
                            <CardHeader>
                                {/* FIX 2: Added flex-col sm:flex-row and gap-4 for responsiveness */}
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                    <div>
                                        <CardTitle className={`${ACCENT_COLOR_CLASS} ${HOVER_TITLE_CLASS} transition-colors duration-300`}>
                                            Backend Developer
                                        </CardTitle>
                                        <CardDescription className="text-gray-600">Vithsutra Technologies Pvt. Ltd.</CardDescription>
                                    </div>
                                    <Badge variant="outline" className={`${ACCENT_BADGE_CLASS} shrink-0`}>
                                        2024 – 2025
                                    </Badge>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-6">
                                <p className="text-gray-600 mb-2 italic">Remote</p>
                                <div className="space-y-4">
                                    {/* Tech Stack Badges */}
                                    <div className="flex flex-wrap gap-2">
                                        {["Golang", "RESTful APIs", "PostgreSQL", "PDF Generation", "gopdf", "godotenv"].map((tech) => (
                                            <Badge
                                                key={tech}
                                                variant="outline"
                                                className="bg-sky-50 hover:bg-sky-100 text-sky-800 border-sky-200 transition-all duration-300"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                    {/* Responsibilities List - FIX 1: Removed markdown bolding */}
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li className="transition-all duration-300 hover:text-sky-700">
                                            Contributed to the backend development of the APMC Billing Application using Golang, designed
                                            for managing agricultural produce transactions; Deployed in production.
                                        </li>
                                        <li className="transition-all duration-300 hover:text-sky-700">
                                            Implemented robust environment configuration handling (dev/prod) using godotenv to dynamically
                                            load '.env' files based on runtime server mode.
                                        </li>
                                        <li className="transition-all duration-300 hover:text-sky-700">
                                            Designed and developed core RESTful API endpoints for consignee and product modules, including
                                            creation, retrieval, updating, and deletion, following secure and scalable coding practices.
                                        </li>
                                        <li className="transition-all duration-300 hover:text-sky-700">
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
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <MagicCard className={`group relative overflow-hidden ${LIGHT_GLASS_CARD_CLASSES}`}>
                            <BorderBeam duration={8} size={100} />
                            <CardHeader>
                                {/* FIX 2: Added flex-col sm:flex-row and gap-4 for responsiveness */}
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                    <div>
                                        <CardTitle className={`${ACCENT_COLOR_CLASS} ${HOVER_TITLE_CLASS} transition-colors duration-300`}>
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
                                    <Badge variant="outline" className={`${ACCENT_BADGE_CLASS} shrink-0`}>
                                        Feb 2025 – July 2025
                                    </Badge>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-6">
                                <p className="text-gray-600 mb-2 italic">Remote</p>
                                <div className="space-y-4">
                                    {/* Tech Stack Badges */}
                                    <div className="flex flex-wrap gap-2">
                                        {[
                                            "Golang", "Next.js", "AWS S3", "CloudFront", "RabbitMQ", "Echo", "MongoDB", "Razorpay", "SendGrid", "DigitalOcean", "Vercel", "Postman",
                                        ].map((tech) => (
                                            <Badge
                                                key={tech}
                                                variant="outline"
                                                className="bg-sky-50 hover:bg-sky-100 text-sky-800 border-sky-200 transition-all duration-300"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                    {/* Responsibilities List - FIX 1: Removed markdown bolding */}
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li className="transition-all duration-300 hover:text-sky-700">
                                            Developing a scalable course-based e-learning platform with a fully dynamic website using Next.js (frontend) and Golang (backend).
                                        </li>
                                        <li className="transition-all duration-300 hover:text-sky-700">
                                            Integrated Razorpay for secure course purchases with dynamic course unlocking logic post-payment verification.
                                        </li>
                                        <li className="transition-all duration-300 hover:text-sky-700">
                                            Built a cloud-native video delivery pipeline with AWS S3 for video/image uploads and CloudFront for secure, high-speed streaming.
                                        </li>
                                        <li className="transition-all duration-300 hover:text-sky-700">
                                            Designed and developed backend APIs for a dynamic admin panel, enabling course creators to manage videos, content, blogs, and testimonials via MongoDB; tested and validated endpoints using Postman.
                                        </li>
                                        <li className="transition-all duration-300 hover:text-sky-700">
                                            Implemented a dedicated microservice for OTP and email notifications using RabbitMQ, Echo (Golang), and SendGrid.
                                        </li>
                                        <li className="transition-all duration-300 hover:text-sky-700">
                                            Handled full-stack deployment: backend on DigitalOcean, frontend on Vercel, ensuring high uptime and scalability in production.
                                        </li>
                                    </ul>
                                </div>
                            </CardContent>
                        </MagicCard>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}