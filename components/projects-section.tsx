"use client"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from 'lucide-react'
import { motion } from "framer-motion"
import { MagicCard } from "@/components/ui/magic-card"
import { BorderBeam } from "@/components/ui/border-beam"

const projects = [
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
        <section>
            <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b border-gray-200 pb-2">Projects</h2>
            <div className="grid gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <MagicCard className="group relative overflow-hidden">
                            <BorderBeam duration={8} size={100} />
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle className="group-hover:text-sky-700 transition-colors duration-300">
                                            {project.title}
                                        </CardTitle>
                                        <CardDescription>{project.date}</CardDescription>
                                    </div>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                                    >
                                        <ArrowUpRight className="w-5 h-5 text-gray-400 hover:text-sky-500 transition-colors duration-300" />
                                    </a>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-6">
                                <div className="space-y-4">
                                    <div className="flex flex-wrap gap-2">
                                        {project.techs.map((tech) => (
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
                                        {project.points.map((point, i) => (
                                            <li key={i} className="transition-all duration-300 hover:text-gray-900">
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
        </section>
    )
}
