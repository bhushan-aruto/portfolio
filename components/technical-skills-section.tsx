
"use client"
import { motion } from "framer-motion"

const TechLogos = {
    Golang: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg",
    "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    C: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    Redis: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    AWS: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    Kubernetes: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    Linux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    VSCode: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    Vim: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
    Arduino: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
}

export function TechnicalSkillsSection() {
    return (
        <section className="px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-900 border-b border-gray-200 pb-2">Technical Skills</h2>
            <div className="space-y-12 sm:space-y-16">
                {/* Programming Languages */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Programming Languages</h3>
                    <div className="flex justify-center flex-wrap gap-3 sm:gap-6 md:gap-12 lg:gap-16">
                        <div className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                            <img
                                src={TechLogos.Golang || "/placeholder.svg"}
                                alt="Go Logo"
                                width="48"
                                height="36"
                                className="w-10 sm:w-12 h-auto group-hover:scale-110 transition-transform duration-300 relative z-10"
                            />
                            <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-sky-600 transition-colors relative z-10">
                                Go
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                            <img
                                src={TechLogos["C++"] || "/placeholder.svg"}
                                alt="C++ Logo"
                                width="40"
                                height="40"
                                className="w-10 sm:w-12 h-auto group-hover:scale-110 transition-transform duration-300 relative z-10"
                            />
                            <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-sky-600 transition-colors relative z-10">
                                C++
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                            <img
                                src={TechLogos.C || "/placeholder.svg"}
                                alt="C Logo"
                                width="40"
                                height="40"
                                className="w-10 sm:w-12 h-auto group-hover:scale-110 transition-transform duration-300 relative z-10"
                            />
                            <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-sky-600 transition-colors relative z-10">
                                C
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Databases */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Databases</h3>
                    <div className="flex justify-center flex-wrap gap-3 sm:gap-6 md:gap-12 lg:gap-16">
                        <div className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                            <img
                                src={TechLogos.MongoDB || "/placeholder.svg"}
                                alt="MongoDB Logo"
                                width="40"
                                height="40"
                                className="w-10 sm:w-12 h-auto group-hover:scale-110 transition-transform duration-300 relative z-10"
                            />
                            <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-sky-600 transition-colors relative z-10">
                                MongoDB
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                            <img
                                src={TechLogos.PostgreSQL || "/placeholder.svg"}
                                alt="PostgreSQL Logo"
                                width="40"
                                height="40"
                                className="w-10 sm:w-12 h-auto group-hover:scale-110 transition-transform duration-300 relative z-10"
                            />
                            <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-sky-600 transition-colors relative z-10">
                                PostgreSQL
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                            <img
                                src={TechLogos.Redis || "/placeholder.svg"}
                                alt="Redis Logo"
                                width="40"
                                height="40"
                                className="w-10 sm:w-12 h-auto group-hover:scale-110 transition-transform duration-300 relative z-10"
                            />
                            <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-sky-600 transition-colors relative z-10">
                                Redis
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Cloud Platforms */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Cloud Platforms</h3>
                    <div className="flex justify-center flex-wrap gap-3 sm:gap-6 md:gap-12 lg:gap-16">
                        <div className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                            <img
                                src={TechLogos.AWS || "/placeholder.svg"}
                                alt="AWS Logo"
                                width="40"
                                height="40"
                                className="w-10 sm:w-12 h-auto group-hover:scale-110 transition-transform duration-300 relative z-10"
                            />
                            <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-sky-600 transition-colors relative z-10">
                                AWS
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm sm:text-base group-hover:scale-110 transition-transform duration-300 relative z-10">
                                DO
                            </div>
                            <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-sky-600 transition-colors relative z-10">
                                DigitalOcean
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Protocols & Messaging */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Protocols & Messaging</h3>
                    <div className="flex justify-center flex-wrap gap-3 sm:gap-4 md:gap-6 lg:gap-12">
                        {[
                            { name: "HTTP", color: "bg-orange-500" },
                            { name: "MQTT", color: "bg-purple-500" },
                            { name: "gRPC", color: "bg-green-500" },
                            { name: "RabbitMQ", color: "bg-orange-600" },
                            { name: "NATS", color: "bg-blue-500" },
                        ].map((tech) => (
                            <div
                                key={tech.name}
                                className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                            >
                                <div
                                    className={`w-10 sm:w-12 h-10 sm:h-12 ${tech.color} rounded-lg flex items-center justify-center text-white font-bold text-xs sm:text-sm group-hover:scale-110 transition-transform duration-300 relative z-10`}
                                >
                                    {tech.name.slice(0, 2)}
                                </div>
                                <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-sky-600 transition-colors relative z-10">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Technologies & Frameworks */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Technologies & Frameworks</h3>
                    <div className="flex justify-center flex-wrap gap-3 sm:gap-4 md:gap-6 lg:gap-12">
                        <div className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                            <img
                                src={TechLogos.Docker || "/placeholder.svg"}
                                alt="Docker Logo"
                                width="40"
                                height="40"
                                className="w-10 sm:w-12 h-auto group-hover:scale-110 transition-transform duration-300 relative z-10"
                            />
                            <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-sky-600 transition-colors relative z-10">
                                Docker
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                            <img
                                src={TechLogos.Kubernetes || "/placeholder.svg"}
                                alt="Kubernetes Logo"
                                width="40"
                                height="40"
                                className="w-10 sm:w-12 h-auto group-hover:scale-110 transition-transform duration-300 relative z-10"
                            />
                            <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-sky-600 transition-colors relative z-10">
                                Kubernetes
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                            <img
                                src={TechLogos.Linux || "/placeholder.svg"}
                                alt="Linux Logo"
                                width="40"
                                height="40"
                                className="w-10 sm:w-12 h-auto group-hover:scale-110 transition-transform duration-300 relative z-10"
                            />
                            <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-sky-600 transition-colors relative z-10">
                                Linux
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                            <img
                                src={TechLogos.Git || "/placeholder.svg"}
                                alt="Git Logo"
                                width="40"
                                height="40"
                                className="w-10 sm:w-12 h-auto group-hover:scale-110 transition-transform duration-300 relative z-10"
                            />
                            <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-sky-600 transition-colors relative z-10">
                                Git
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold text-xs sm:text-sm group-hover:scale-110 transition-transform duration-300 relative z-10">
                                EC
                            </div>
                            <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-sky-600 transition-colors relative z-10">
                                Echo Framework
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Developer Tools */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Developer Tools</h3>
                    <div className="flex justify-center flex-wrap gap-3 sm:gap-4 md:gap-6 lg:gap-12">
                        <div className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                            <img
                                src={TechLogos.VSCode || "/placeholder.svg"}
                                alt="VS Code Logo"
                                width="40"
                                height="40"
                                className="w-10 sm:w-12 h-auto group-hover:scale-110 transition-transform duration-300 relative z-10"
                            />
                            <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-sky-600 transition-colors relative z-10">
                                VS Code
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                            <img
                                src={TechLogos.Vim || "/placeholder.svg"}
                                alt="Vim Logo"
                                width="40"
                                height="40"
                                className="w-10 sm:w-12 h-auto group-hover:scale-110 transition-transform duration-300 relative z-10"
                            />
                            <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-sky-600 transition-colors relative z-10">
                                Vim
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                            <img
                                src={TechLogos.Arduino || "/placeholder.svg"}
                                alt="Arduino Logo"
                                width="40"
                                height="40"
                                className="w-10 sm:w-12 h-auto group-hover:scale-110 transition-transform duration-300 relative z-10"
                            />
                            <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-sky-600 transition-colors relative z-10">
                                Arduino IDE
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xs sm:text-sm group-hover:scale-110 transition-transform duration-300 relative z-10">
                                PM
                            </div>
                            <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-sky-600 transition-colors relative z-10">
                                Postman
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
