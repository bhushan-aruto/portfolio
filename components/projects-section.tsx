// "use client"
// import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { ArrowUpRight } from 'lucide-react'
// import { motion } from "framer-motion"
// import { MagicCard } from "@/components/ui/magic-card"
// import { BorderBeam } from "@/components/ui/border-beam"
// import { ProjectsHeading } from "@/components/project_heading"

// const projects = [

//     {
//         title: "Smart Park Assist",
//         date: "July 2024 – Dec 2024",
//         github: "https://github.com/bhushan-aruto/Smart_Car_Assist_mqtt_message_processor.git",
//         techs: [
//             "Golang",
//             "C++",
//             "ESP32",
//             "IR Sensors",
//             "Servo Motor",
//             "RFID",
//             "Flutter",
//             "PostgreSQL",
//             "Redis",
//             "MQTT",
//         ],
//         points: [
//             "Designed and developed an end-to-end smart parking solution combining embedded systems and mobile application for intelligent gate control, real-time slot monitoring, and user booking.",
//             "Integrated ESP32 with IR sensors, servo motors, and RFID for secure vehicle detection, authentication, and gate automation.",
//             "Displayed slot availability on an LCD and synchronized status updates with a Flutter app for seamless user experience.",
//             "Utilized PostgreSQL and Redis for structured and high-speed storage, enabling real-time data access.",
//             "Implemented MQTT protocol for lightweight, real-time bi-directional communication between IoT devices and the mobile app.",
//             "Crafted a user-friendly app interface for slot booking, parking duration tracking, and charge calculation.",
//             "Awarded ₹5000 under the 48th Series Student Project Programme (SPP) 2024–25 by KSCST for innovation and technical execution.",
//         ],
//     },
//     {
//         title: "Messaging and Email Microservice",
//         date: "2025",
//         github: "https://github.com/bhushan-aruto/go-email-service.git",
//         techs: ["Golang", "RabbitMQ", "SendGrid"],
//         points: [
//             "Developed a scalable microservice in Golang leveraging RabbitMQ for messaging queues and SendGrid for transactional email delivery.",
//             "Designed priority-based queues to ensure ultra-low latency OTP dispatch during authentication workflows.",
//             "Automated welcome email flows to streamline user onboarding and increase engagement rates.",
//             "Enhanced fault tolerance and throughput by optimizing the consumer pipeline with retry and reconnection strategies.",
//         ],
//     },
//     {
//         title: "gRPC Client-Server Architecture in Go",
//         date: "2024",
//         github: "https://github.com/bhushan-aruto/GRPC-FileStream.git",
//         techs: ["Golang", "gRPC"],
//         points: [
//             "Built a scalable communication system using gRPC with support for unary, client-streaming, and server-streaming RPCs.",
//             "Designed a modular client-server architecture ensuring robust and efficient message exchange.",
//             "Optimized latency and bandwidth utilization through protocol buffers and asynchronous RPC handling.",
//         ],
//     },
//     {
//         title: "IoT-Based Moisture Monitoring System",
//         date: "Apr 2025",
//         github: "https://github.com/bhushan-aruto/Go-Mqtt-Processor.git",
//         techs: ["Golang", "MQTT", "Twilio", "IoT", "JSON"],
//         points: [
//             "Developed a real-time backend system in Golang to monitor soil moisture for smart agriculture applications.",
//             "Integrated MQTT protocol to stream live sensor data and dynamically adjust threshold levels.",
//             "Automated emergency voice call alerts using Twilio API when moisture dropped below safe limits.",
//             "Implemented robust fault-tolerant MQTT handling with reconnection logic for unstable network environments.",
//             "Wrote modular, production-ready code with scalability for remote agricultural deployments.",
//         ],
//     },
// ]

// export function ProjectsSection() {
//     return (
//         <section>
//             {/* <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b border-gray-200 pb-2">Projects</h2> */}
//             <ProjectsHeading />
//             <div className="grid gap-6">
//                 {projects.map((project, index) => (
//                     <motion.div
//                         key={index}
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: index * 0.1 }}
//                         viewport={{ once: true }}
//                     >
//                         <MagicCard className="group relative overflow-hidden">
//                             <BorderBeam duration={8} size={100} />
//                             <CardHeader>
//                                 <div className="flex justify-between items-start">
//                                     <div>
//                                         <CardTitle className="group-hover:text-sky-700 transition-colors duration-300">
//                                             {project.title}
//                                         </CardTitle>
//                                         <CardDescription>{project.date}</CardDescription>
//                                     </div>
//                                     <a
//                                         href={project.github}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="opacity-0 group-hover:opacity-100 transition-all duration-300"
//                                     >
//                                         <ArrowUpRight className="w-5 h-5 text-gray-400 hover:text-sky-500 transition-colors duration-300" />
//                                     </a>
//                                 </div>
//                             </CardHeader>
//                             <CardContent className="pt-6">
//                                 <div className="space-y-4">
//                                     <div className="flex flex-wrap gap-2">
//                                         {project.techs.map((tech) => (
//                                             <Badge
//                                                 key={tech}
//                                                 variant="outline"
//                                                 className="bg-white hover:bg-gray-50 text-gray-700 transition-all duration-300"
//                                             >
//                                                 {tech}
//                                             </Badge>
//                                         ))}
//                                     </div>

//                                     <ul className="list-disc list-inside space-y-2 text-gray-600">
//                                         {project.points.map((point, i) => (
//                                             <li key={i} className="transition-all duration-300 hover:text-gray-900">
//                                                 {point}
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                             </CardContent>
//                         </MagicCard>
//                     </motion.div>
//                 ))}
//             </div>
//         </section>
//     )
// }




"use client"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from 'lucide-react'
import { motion } from "framer-motion"
import { MagicCard } from "@/components/ui/magic-card"
import { BorderBeam } from "@/components/ui/border-beam"
import { ProjectsHeading } from "@/components/project_heading"

// -----------------------------------------------------------
// THEME CONSTANTS (Matching Education & Experience)
// -----------------------------------------------------------
const LIGHT_GLASS_CARD_CLASSES = "backdrop-blur-sm bg-white/50 border border-white/80 shadow-xl hover:bg-white/90 transition-all duration-500 ring-1 ring-sky-100/50"
const ACCENT_COLOR_CLASS = "text-sky-800"
const ACCENT_BADGE_CLASS = "bg-sky-100 text-sky-800 border-sky-300"
const HOVER_TITLE_CLASS = "group-hover:text-sky-700"
// -----------------------------------------------------------


const projects = [
    {
        title: "Smart Park Assist",
        date: "July 2024 – Dec 2024",
        github: "https://github.com/bhushan-aruto/Smart_Car_Assist_mqtt_message_processor.git",
        techs: [
            "Golang",
            "C++",
            "ESP32",
            "IR Sensors",
            "Servo Motor",
            "RFID",
            "Flutter",
            "PostgreSQL",
            "Redis",
            "MQTT",
        ],
        points: [
            "Designed and developed an end-to-end smart parking solution combining embedded systems and mobile application for intelligent gate control, real-time slot monitoring, and user booking.",
            "Integrated ESP32 with IR sensors, servo motors, and RFID for secure vehicle detection, authentication, and gate automation.",
            "Displayed slot availability on an LCD and synchronized status updates with a Flutter app for seamless user experience.",
            "Utilized PostgreSQL and Redis for structured and high-speed storage, enabling real-time data access.",
            "Implemented MQTT protocol for lightweight, real-time bi-directional communication between IoT devices and the mobile app.",
            "Crafted a user-friendly app interface for slot booking, parking duration tracking, and charge calculation.",
            "Awarded ₹5000 under the 48th Series Student Project Programme (SPP) 2024–25 by KSCST for innovation and technical execution.",
        ],
    },
    {
        title: "Messaging and Email Microservice",
        date: "2025",
        github: "https://github.com/bhushan-aruto/go-email-service.git",
        techs: ["Golang", "RabbitMQ", "SendGrid"],
        points: [
            "Developed a scalable microservice in Golang leveraging RabbitMQ for messaging queues and SendGrid for transactional email delivery.",
            "Designed priority-based queues to ensure ultra-low latency OTP dispatch during authentication workflows.",
            "Automated welcome email flows to streamline user onboarding and increase engagement rates.",
            "Enhanced fault tolerance and throughput by optimizing the consumer pipeline with retry and reconnection strategies.",
        ],
    },
    {
        title: "gRPC Client-Server Architecture in Go",
        date: "2024",
        github: "https://github.com/bhushan-aruto/GRPC-FileStream.git",
        techs: ["Golang", "gRPC"],
        points: [
            "Built a scalable communication system using gRPC with support for unary, client-streaming, and server-streaming RPCs.",
            "Designed a modular client-server architecture ensuring robust and efficient message exchange.",
            "Optimized latency and bandwidth utilization through protocol buffers and asynchronous RPC handling.",
        ],
    },
    {
        title: "IoT-Based Moisture Monitoring System",
        date: "Apr 2025",
        github: "https://github.com/bhushan-aruto/Go-Mqtt-Processor.git",
        techs: ["Golang", "MQTT", "Twilio", "IoT", "JSON"],
        points: [
            "Developed a real-time backend system in Golang to monitor soil moisture for smart agriculture applications.",
            "Integrated MQTT protocol to stream live sensor data and dynamically adjust threshold levels.",
            "Automated emergency voice call alerts using Twilio API when moisture dropped below safe limits.",
            "Implemented robust fault-tolerant MQTT handling with reconnection logic for unstable network environments.",
            "Wrote modular, production-ready code with scalability for remote agricultural deployments.",
        ],
    },
]

export function ProjectsSection() {
    return (
        // Main container with the light gradient background
        <section className="px-4 sm:px-6 lg:px-8 py-12 
            bg-gradient-to-br from-sky-50 to-white 
            text-gray-900 relative overflow-hidden">

            {/* Background elements (subtle) for light UI */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <ProjectsHeading />
                <div className="grid gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 100 }}
                            viewport={{ once: true, amount: 0.1 }}
                        >
                            {/* Applied Glassmorphism theme class to MagicCard */}
                            <MagicCard className={`group relative overflow-hidden ${LIGHT_GLASS_CARD_CLASSES}`}>
                                <BorderBeam duration={8} size={100} />
                                <CardHeader>
                                    {/* Responsive layout for title, date, and GitHub link */}
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">

                                        {/* Project Title and Date */}
                                        <div>
                                            <CardTitle className={`${ACCENT_COLOR_CLASS} ${HOVER_TITLE_CLASS} transition-colors duration-300`}>
                                                {project.title}
                                            </CardTitle>
                                            <CardDescription className="text-gray-600 text-sm">{project.date}</CardDescription>
                                        </div>

                                        {/* GitHub Link Button */}
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            // Themed button link style for GitHub access
                                            className="inline-flex items-center text-sm font-medium text-sky-700 border border-sky-300 bg-sky-50 px-3 py-1 rounded-full shadow-sm hover:bg-sky-100 transition-all duration-300 shrink-0"
                                        >
                                            Code <ArrowUpRight className="w-4 h-4 ml-1" />
                                        </a>
                                    </div>
                                </CardHeader>

                                <CardContent className="pt-6">
                                    <div className="space-y-4">
                                        {/* Tech Stack Badges */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.techs.map((tech) => (
                                                <Badge
                                                    key={tech}
                                                    variant="outline"
                                                    // Themed badge style
                                                    className="bg-sky-50 hover:bg-sky-100 text-sky-800 border-sky-200 transition-all duration-300"
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>

                                        {/* Project Description Points */}
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            {project.points.map((point, i) => (
                                                <li key={i} className="transition-all duration-300 hover:text-sky-700">
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </CardContent>
                            </MagicCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}