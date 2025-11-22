
// "use client"
// import { motion } from "framer-motion"
// import { TechnicalSkillsHeading } from "@/components/tech_heading";

// const TechLogos = {
//     Golang: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg",
//     "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
//     C: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
//     MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
//     PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
//     Redis: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
//     AWS: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
//     Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
//     Kubernetes: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
//     Linux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
//     Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
//     VSCode: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
//     Vim: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
//     Arduino: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
// }

// export function TechnicalSkillsSection() {
//     return (
//         <section className="px-4 sm:px-6 lg:px-8">
//             {/* <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-900 border-b border-gray-200 pb-2">Technical Skills</h2> */}
//             <TechnicalSkillsHeading />

//             <div className="space-y-12 sm:space-y-16">
//                 {/* Programming Languages */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     viewport={{ once: true }}
//                 >
//                     {/* <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Programming Languages</h3> */}
//                     <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
//                         Programming Languages
//                     </h3>

//                     <div className="flex justify-center flex-wrap gap-3 sm:gap-6 md:gap-12 lg:gap-16">


//                         <div className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group">
//                             <img
//                                 src={TechLogos.Golang || "/placeholder.svg"}
//                                 alt="Go Logo"
//                                 width="48"
//                                 height="36"
//                                 className="w-10 sm:w-12 h-auto group-hover:scale-110 transition-transform duration-300 relative z-10"
//                             />
//                             <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-sky-600 transition-colors relative z-10">
//                                 Go
//                             </span>
//                         </div>
//                         <div className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group">
//                             <img
//                                 src={TechLogos["C++"] || "/placeholder.svg"}
//                                 alt="C++ Logo"
//                                 width="40"
//                                 height="40"
//                                 className="w-10 sm:w-12 h-auto group-hover:scale-110 transition-transform duration-300 relative z-10"
//                             />
//                             <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-sky-600 transition-colors relative z-10">
//                                 C++
//                             </span>
//                         </div>
//                         <div className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group">
//                             <img
//                                 src={TechLogos.C || "/placeholder.svg"}
//                                 alt="C Logo"
//                                 width="40"
//                                 height="40"
//                                 className="w-10 sm:w-12 h-auto group-hover:scale-110 transition-transform duration-300 relative z-10"
//                             />
//                             <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-sky-600 transition-colors relative z-10">
//                                 C
//                             </span>
//                         </div>
//                     </div>
//                 </motion.div>

//                 {/* Databases */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 0.2 }}
//                     viewport={{ once: true }}
//                 >
//                     <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Databases</h3>
//                     <div className="flex justify-center flex-wrap gap-3 sm:gap-6 md:gap-12 lg:gap-16">
//                         <div className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group">
//                             <img
//                                 src={TechLogos.MongoDB || "/placeholder.svg"}
//                                 alt="MongoDB Logo"
//                                 width="40"
//                                 height="40"
//                                 className="w-10 sm:w-12 h-auto group-hover:scale-110 transition-transform duration-300 relative z-10"
//                             />
//                             <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-sky-600 transition-colors relative z-10">
//                                 MongoDB
//                             </span>
//                         </div>
//                         <div className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group">
//                             <img
//                                 src={TechLogos.PostgreSQL || "/placeholder.svg"}
//                                 alt="PostgreSQL Logo"
//                                 width="40"
//                                 height="40"
//                                 className="w-10 sm:w-12 h-auto group-hover:scale-110 transition-transform duration-300 relative z-10"
//                             />
//                             <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-sky-600 transition-colors relative z-10">
//                                 PostgreSQL
//                             </span>
//                         </div>
//                         <div className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group">
//                             <img
//                                 src={TechLogos.Redis || "/placeholder.svg"}
//                                 alt="Redis Logo"
//                                 width="40"
//                                 height="40"
//                                 className="w-10 sm:w-12 h-auto group-hover:scale-110 transition-transform duration-300 relative z-10"
//                             />
//                             <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-sky-600 transition-colors relative z-10">
//                                 Redis
//                             </span>
//                         </div>
//                     </div>
//                 </motion.div>

//                 {/* Cloud Platforms */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 0.4 }}
//                     viewport={{ once: true }}
//                 >
//                     <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Cloud Platforms</h3>
//                     <div className="flex justify-center flex-wrap gap-3 sm:gap-6 md:gap-12 lg:gap-16">
//                         <div className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group">
//                             <img
//                                 src={TechLogos.AWS || "/placeholder.svg"}
//                                 alt="AWS Logo"
//                                 width="40"
//                                 height="40"
//                                 className="w-10 sm:w-12 h-auto group-hover:scale-110 transition-transform duration-300 relative z-10"
//                             />
//                             <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-sky-600 transition-colors relative z-10">
//                                 AWS
//                             </span>
//                         </div>
//                         <div className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group">
//                             <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm sm:text-base group-hover:scale-110 transition-transform duration-300 relative z-10">
//                                 DO
//                             </div>
//                             <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-sky-600 transition-colors relative z-10">
//                                 DigitalOcean
//                             </span>
//                         </div>
//                     </div>
//                 </motion.div>

//                 {/* Protocols & Messaging */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 0.6 }}
//                     viewport={{ once: true }}
//                 >
//                     <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Protocols & Messaging</h3>
//                     <div className="flex justify-center flex-wrap gap-3 sm:gap-4 md:gap-6 lg:gap-12">
//                         {[
//                             { name: "HTTP", color: "bg-orange-500" },
//                             { name: "MQTT", color: "bg-purple-500" },
//                             { name: "gRPC", color: "bg-green-500" },
//                             { name: "RabbitMQ", color: "bg-orange-600" },
//                             { name: "NATS", color: "bg-blue-500" },
//                         ].map((tech) => (
//                             <div
//                                 key={tech.name}
//                                 className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group"
//                             >
//                                 <div
//                                     className={`w-10 sm:w-12 h-10 sm:h-12 ${tech.color} rounded-lg flex items-center justify-center text-white font-bold text-xs sm:text-sm group-hover:scale-110 transition-transform duration-300 relative z-10`}
//                                 >
//                                     {tech.name.slice(0, 2)}
//                                 </div>
//                                 <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-sky-600 transition-colors relative z-10">
//                                     {tech.name}
//                                 </span>
//                             </div>
//                         ))}
//                     </div>
//                 </motion.div>

//                 {/* Technologies & Frameworks */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 0.8 }}
//                     viewport={{ once: true }}
//                 >
//                     <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Technologies & Frameworks</h3>
//                     <div className="flex justify-center flex-wrap gap-3 sm:gap-4 md:gap-6 lg:gap-12">
//                         <div className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group">
//                             <img
//                                 src={TechLogos.Docker || "/placeholder.svg"}
//                                 alt="Docker Logo"
//                                 width="40"
//                                 height="40"
//                                 className="w-10 sm:w-12 h-auto group-hover:scale-110 transition-transform duration-300 relative z-10"
//                             />
//                             <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-sky-600 transition-colors relative z-10">
//                                 Docker
//                             </span>
//                         </div>
//                         <div className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group">
//                             <img
//                                 src={TechLogos.Kubernetes || "/placeholder.svg"}
//                                 alt="Kubernetes Logo"
//                                 width="40"
//                                 height="40"
//                                 className="w-10 sm:w-12 h-auto group-hover:scale-110 transition-transform duration-300 relative z-10"
//                             />
//                             <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-sky-600 transition-colors relative z-10">
//                                 Kubernetes
//                             </span>
//                         </div>
//                         <div className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group">
//                             <img
//                                 src={TechLogos.Linux || "/placeholder.svg"}
//                                 alt="Linux Logo"
//                                 width="40"
//                                 height="40"
//                                 className="w-10 sm:w-12 h-auto group-hover:scale-110 transition-transform duration-300 relative z-10"
//                             />
//                             <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-sky-600 transition-colors relative z-10">
//                                 Linux
//                             </span>
//                         </div>
//                         <div className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group">
//                             <img
//                                 src={TechLogos.Git || "/placeholder.svg"}
//                                 alt="Git Logo"
//                                 width="40"
//                                 height="40"
//                                 className="w-10 sm:w-12 h-auto group-hover:scale-110 transition-transform duration-300 relative z-10"
//                             />
//                             <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-sky-600 transition-colors relative z-10">
//                                 Git
//                             </span>
//                         </div>
//                         <div className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group">
//                             <div className="w-10 sm:w-12 h-10 sm:h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold text-xs sm:text-sm group-hover:scale-110 transition-transform duration-300 relative z-10">
//                                 EC
//                             </div>
//                             <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-sky-600 transition-colors relative z-10">
//                                 Echo Framework
//                             </span>
//                         </div>
//                     </div>
//                 </motion.div>

//                 {/* Developer Tools */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 1.0 }}
//                     viewport={{ once: true }}
//                 >
//                     <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Developer Tools</h3>
//                     <div className="flex justify-center flex-wrap gap-3 sm:gap-4 md:gap-6 lg:gap-12">
//                         <div className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group">
//                             <img
//                                 src={TechLogos.VSCode || "/placeholder.svg"}
//                                 alt="VS Code Logo"
//                                 width="40"
//                                 height="40"
//                                 className="w-10 sm:w-12 h-auto group-hover:scale-110 transition-transform duration-300 relative z-10"
//                             />
//                             <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-sky-600 transition-colors relative z-10">
//                                 VS Code
//                             </span>
//                         </div>
//                         <div className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group">
//                             <img
//                                 src={TechLogos.Vim || "/placeholder.svg"}
//                                 alt="Vim Logo"
//                                 width="40"
//                                 height="40"
//                                 className="w-10 sm:w-12 h-auto group-hover:scale-110 transition-transform duration-300 relative z-10"
//                             />
//                             <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-sky-600 transition-colors relative z-10">
//                                 Vim
//                             </span>
//                         </div>
//                         <div className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group">
//                             <img
//                                 src={TechLogos.Arduino || "/placeholder.svg"}
//                                 alt="Arduino Logo"
//                                 width="40"
//                                 height="40"
//                                 className="w-10 sm:w-12 h-auto group-hover:scale-110 transition-transform duration-300 relative z-10"
//                             />
//                             <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-sky-600 transition-colors relative z-10">
//                                 Arduino IDE
//                             </span>
//                         </div>
//                         <div className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group">
//                             <div className="w-10 sm:w-12 h-10 sm:h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xs sm:text-sm group-hover:scale-110 transition-transform duration-300 relative z-10">
//                                 PM
//                             </div>
//                             <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-sky-600 transition-colors relative z-10">
//                                 Postman
//                             </span>
//                         </div>
//                     </div>
//                 </motion.div>
//             </div>
//         </section>
//     )
// }



// "use client"
// import { motion } from "framer-motion"
// import { TechnicalSkillsHeading } from "@/components/tech_heading";

// // This object holds the external image URLs for the technical logos.
// const TechLogos = {
//     Golang: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg",
//     "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
//     C: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
//     MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
//     PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
//     Redis: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
//     AWS: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
//     Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
//     Kubernetes: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
//     Linux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
//     Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
//     VSCode: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
//     Vim: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
//     Arduino: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
// }

// // -----------------------------------------------------------
// // FIX: Define the TypeScript interface for SkillCard props
// // -----------------------------------------------------------
// interface SkillCardProps {
//     name: string;
//     logoUrl?: string;           // Made optional
//     logoType?: 'img' | 'text';
//     textPlaceholder?: string;
//     bgColor?: string;
// }

// const GLASS_CARD_CLASSES = "backdrop-blur-md bg-white/10 border border-white/20 shadow-lg hover:bg-white/20 hover:scale-[1.02] transition-all duration-500"

// /**
//  * Renders an individual skill card with the Glassmorphism style.
//  */
// // FIX: Apply the SkillCardProps interface to the component
// function SkillCard({
//     name,
//     logoUrl,
//     logoType = 'img',
//     textPlaceholder = '',
//     bgColor = 'bg-gray-700'
// }: SkillCardProps) {
//     return (
//         <div className={`flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-2xl ${GLASS_CARD_CLASSES} group min-w-[100px] text-center`}>
//             {logoType === 'img' ? (
//                 <img
//                     src={logoUrl || "/placeholder.svg"}
//                     // Using logoUrl here is fine since for logoType='img', it should be passed
//                     alt={`${name} Logo`}
//                     width="48"
//                     height="48"
//                     className="w-10 sm:w-12 h-auto group-hover:scale-110 transition-transform duration-300 relative z-10"
//                 />
//             ) : (
//                 <div className={`w-10 sm:w-12 h-10 sm:h-12 ${bgColor} rounded-lg flex items-center justify-center text-white font-extrabold text-sm sm:text-base group-hover:scale-110 transition-transform duration-300 relative z-10 shadow-md`}>
//                     {textPlaceholder}
//                 </div>
//             )}
//             <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-sky-300 transition-colors relative z-10 tracking-wider drop-shadow-md">
//                 {name}
//             </span>
//         </div>
//     );
// }

// export function TechnicalSkillsSection() {
//     return (
//         <section className="px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-gray-900 to-gray-700 text-white relative overflow-hidden">
//             <div className="absolute top-0 left-0 w-64 h-64 bg-sky-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
//             <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>

//             <div className="relative z-10 max-w-7xl mx-auto">
//                 <TechnicalSkillsHeading />

//                 <div className="space-y-12 sm:space-y-16 mt-12">
//                     {/* Programming Languages */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
//                         viewport={{ once: true, amount: 0.1 }}
//                     >
//                         <h3 className="text-2xl font-extrabold text-center mb-8 tracking-wider text-sky-400 drop-shadow-lg">
//                             Programming Languages
//                         </h3>

//                         <div className="flex justify-center flex-wrap gap-4 sm:gap-8 md:gap-12">
//                             {/* Usage with logoUrl - OK */}
//                             <SkillCard name="Go" logoUrl={TechLogos.Golang} />
//                             <SkillCard name="C++" logoUrl={TechLogos["C++"]} />
//                             <SkillCard name="C" logoUrl={TechLogos.C} />
//                         </div>
//                     </motion.div>

//                     <hr className="border-t border-white/20" />

//                     {/* Databases */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
//                         viewport={{ once: true, amount: 0.1 }}
//                     >
//                         <h3 className="text-2xl font-extrabold text-center mb-8 tracking-wider text-sky-400 drop-shadow-lg">Databases</h3>
//                         <div className="flex justify-center flex-wrap gap-4 sm:gap-8 md:gap-12">
//                             <SkillCard name="MongoDB" logoUrl={TechLogos.MongoDB} />
//                             <SkillCard name="PostgreSQL" logoUrl={TechLogos.PostgreSQL} />
//                             <SkillCard name="Redis" logoUrl={TechLogos.Redis} />
//                         </div>
//                     </motion.div>

//                     <hr className="border-t border-white/20" />

//                     {/* Cloud Platforms */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
//                         viewport={{ once: true, amount: 0.1 }}
//                     >
//                         <h3 className="text-2xl font-extrabold text-center mb-8 tracking-wider text-sky-400 drop-shadow-lg">Cloud Platforms</h3>
//                         <div className="flex justify-center flex-wrap gap-4 sm:gap-8 md:gap-12">
//                             <SkillCard name="AWS" logoUrl={TechLogos.AWS} />
//                             {/* Usage without logoUrl - OK */}
//                             <SkillCard
//                                 name="DigitalOcean"
//                                 logoType="text"
//                                 textPlaceholder="DO"
//                                 bgColor="bg-blue-600"
//                             />
//                         </div>
//                     </motion.div>

//                     <hr className="border-t border-white/20" />

//                     {/* Protocols & Messaging */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
//                         viewport={{ once: true, amount: 0.1 }}
//                     >
//                         <h3 className="text-2xl font-extrabold text-center mb-8 tracking-wider text-sky-400 drop-shadow-lg">Protocols & Messaging</h3>
//                         <div className="flex justify-center flex-wrap gap-4 sm:gap-6 md:gap-8">
//                             {[
//                                 { name: "HTTP", text: "HT", color: "bg-red-500" },
//                                 { name: "MQTT", text: "MQ", color: "bg-purple-600" },
//                                 { name: "gRPC", text: "gR", color: "bg-green-600" },
//                                 { name: "RabbitMQ", text: "RM", color: "bg-orange-600" },
//                                 { name: "NATS", text: "NA", color: "bg-blue-500" },
//                             ].map((tech) => (
//                                 // Usage without logoUrl - OK
//                                 <SkillCard
//                                     key={tech.name}
//                                     name={tech.name}
//                                     logoType="text"
//                                     textPlaceholder={tech.text}
//                                     bgColor={tech.color}
//                                 />
//                             ))}
//                         </div>
//                     </motion.div>

//                     <hr className="border-t border-white/20" />

//                     {/* Technologies & Frameworks */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 100 }}
//                         viewport={{ once: true, amount: 0.1 }}
//                     >
//                         <h3 className="text-2xl font-extrabold text-center mb-8 tracking-wider text-sky-400 drop-shadow-lg">Technologies & Frameworks</h3>
//                         <div className="flex justify-center flex-wrap gap-4 sm:gap-6 md:gap-8">
//                             <SkillCard name="Docker" logoUrl={TechLogos.Docker} />
//                             <SkillCard name="Kubernetes" logoUrl={TechLogos.Kubernetes} />
//                             <SkillCard name="Linux" logoUrl={TechLogos.Linux} />
//                             <SkillCard name="Git" logoUrl={TechLogos.Git} />
//                             {/* Usage without logoUrl - OK */}
//                             <SkillCard
//                                 name="Echo Framework"
//                                 logoType="text"
//                                 textPlaceholder="EC"
//                                 bgColor="bg-green-700"
//                             />
//                         </div>
//                     </motion.div>

//                     <hr className="border-t border-white/20" />

//                     {/* Developer Tools */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, delay: 1.0, type: "spring", stiffness: 100 }}
//                         viewport={{ once: true, amount: 0.1 }}
//                     >
//                         <h3 className="text-2xl font-extrabold text-center mb-8 tracking-wider text-sky-400 drop-shadow-lg">Developer Tools</h3>
//                         <div className="flex justify-center flex-wrap gap-4 sm:gap-6 md:gap-8">
//                             <SkillCard name="VS Code" logoUrl={TechLogos.VSCode} />
//                             <SkillCard name="Vim" logoUrl={TechLogos.Vim} />
//                             <SkillCard name="Arduino IDE" logoUrl={TechLogos.Arduino} />
//                             {/* Usage without logoUrl - OK */}
//                             <SkillCard
//                                 name="Postman"
//                                 logoType="text"
//                                 textPlaceholder="PM"
//                                 bgColor="bg-orange-500"
//                             />
//                         </div>
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     )
// }



"use client"
import { motion } from "framer-motion"
import { TechnicalSkillsHeading } from "@/components/tech_heading";

// This object holds the external image URLs for the technical logos.
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

// -----------------------------------------------------------
// FIX: Define the TypeScript interface for SkillCard props
// -----------------------------------------------------------
interface SkillCardProps {
    name: string;
    logoUrl?: string;
    logoType?: 'img' | 'text';
    textPlaceholder?: string;
    bgColor?: string;
}

// ADJUSTMENT: Glass Card Class for a LIGHT background.
// - bg-white/50 provides more solid milky white/glass look.
// - border border-white/80 provides a clear, subtle border.
// - shadow-xl adds a strong but diffused shadow.
const GLASS_CARD_CLASSES = "backdrop-blur-sm bg-white/50 border border-white/80 shadow-xl hover:bg-white/90 hover:scale-[1.02] transition-all duration-500 ring-1 ring-sky-100/50"

/**
 * Renders an individual skill card with the Glassmorphism style.
 */
function SkillCard({
    name,
    logoUrl,
    logoType = 'img',
    textPlaceholder = '',
    bgColor = 'bg-gray-700'
}: SkillCardProps) {
    return (
        <div className={`flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-2xl ${GLASS_CARD_CLASSES} group min-w-[100px] text-center`}>
            {logoType === 'img' ? (
                <img
                    src={logoUrl || "/placeholder.svg"}
                    alt={`${name} Logo`}
                    width="48"
                    height="48"
                    className="w-10 sm:w-12 h-auto group-hover:scale-110 transition-transform duration-300 relative z-10"
                />
            ) : (
                <div className={`w-10 sm:w-12 h-10 sm:h-12 ${bgColor} rounded-lg flex items-center justify-center text-white font-extrabold text-sm sm:text-base group-hover:scale-110 transition-transform duration-300 relative z-10 shadow-md`}>
                    {textPlaceholder}
                </div>
            )}
            {/* ADJUSTMENT: Dark text for light background contrast */}
            <span className="text-xs sm:text-sm font-semibold text-gray-800 group-hover:text-sky-700 transition-colors relative z-10 tracking-wider">
                {name}
            </span>
        </div>
    );
}

export function TechnicalSkillsSection() {
    return (
        // ADJUSTMENT: Light Sky Blue and Milky White Gradient Background
        <section className="px-4 sm:px-6 lg:px-8 py-12 
            bg-gradient-to-br from-sky-50 to-white 
            text-gray-900 relative overflow-hidden min-h-screen">

            {/* Background elements (subtle) for light UI */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <TechnicalSkillsHeading />

                <div className="space-y-12 sm:space-y-16 mt-12">
                    {/* Programming Languages */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {/* ADJUSTMENT: Darker heading color for contrast */}
                        <h3 className="text-2xl font-extrabold text-center mb-8 tracking-wider text-sky-800 drop-shadow-sm">
                            Programming Languages
                        </h3>

                        <div className="flex justify-center flex-wrap gap-4 sm:gap-8 md:gap-12">
                            <SkillCard name="Go" logoUrl={TechLogos.Golang} />
                            <SkillCard name="C++" logoUrl={TechLogos["C++"]} />
                            <SkillCard name="C" logoUrl={TechLogos.C} />
                        </div>
                    </motion.div>

                    <hr className="border-t border-sky-200/50" />

                    {/* Databases */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <h3 className="text-2xl font-extrabold text-center mb-8 tracking-wider text-sky-800 drop-shadow-sm">Databases</h3>
                        <div className="flex justify-center flex-wrap gap-4 sm:gap-8 md:gap-12">
                            <SkillCard name="MongoDB" logoUrl={TechLogos.MongoDB} />
                            <SkillCard name="PostgreSQL" logoUrl={TechLogos.PostgreSQL} />
                            <SkillCard name="Redis" logoUrl={TechLogos.Redis} />
                        </div>
                    </motion.div>

                    <hr className="border-t border-sky-200/50" />

                    {/* Cloud Platforms */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <h3 className="text-2xl font-extrabold text-center mb-8 tracking-wider text-sky-800 drop-shadow-sm">Cloud Platforms</h3>
                        <div className="flex justify-center flex-wrap gap-4 sm:gap-8 md:gap-12">
                            <SkillCard name="AWS" logoUrl={TechLogos.AWS} />
                            <SkillCard
                                name="DigitalOcean"
                                logoType="text"
                                textPlaceholder="DO"
                                bgColor="bg-blue-600"
                            />
                        </div>
                    </motion.div>

                    <hr className="border-t border-sky-200/50" />

                    {/* Protocols & Messaging */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <h3 className="text-2xl font-extrabold text-center mb-8 tracking-wider text-sky-800 drop-shadow-sm">Protocols & Messaging</h3>
                        <div className="flex justify-center flex-wrap gap-4 sm:gap-6 md:gap-8">
                            {[
                                { name: "HTTP", text: "HT", color: "bg-red-500" },
                                { name: "MQTT", text: "MQ", color: "bg-purple-600" },
                                { name: "gRPC", text: "gR", color: "bg-green-600" },
                                { name: "RabbitMQ", text: "RM", color: "bg-orange-600" },
                                { name: "NATS", text: "NA", color: "bg-blue-500" },
                            ].map((tech) => (
                                <SkillCard
                                    key={tech.name}
                                    name={tech.name}
                                    logoType="text"
                                    textPlaceholder={tech.text}
                                    bgColor={tech.color}
                                />
                            ))}
                        </div>
                    </motion.div>

                    <hr className="border-t border-sky-200/50" />

                    {/* Technologies & Frameworks */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 100 }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <h3 className="text-2xl font-extrabold text-center mb-8 tracking-wider text-sky-800 drop-shadow-sm">Technologies & Frameworks</h3>
                        <div className="flex justify-center flex-wrap gap-4 sm:gap-6 md:gap-8">
                            <SkillCard name="Docker" logoUrl={TechLogos.Docker} />
                            <SkillCard name="Kubernetes" logoUrl={TechLogos.Kubernetes} />
                            <SkillCard name="Linux" logoUrl={TechLogos.Linux} />
                            <SkillCard name="Git" logoUrl={TechLogos.Git} />
                            <SkillCard
                                name="Echo Framework"
                                logoType="text"
                                textPlaceholder="EC"
                                bgColor="bg-green-700"
                            />
                        </div>
                    </motion.div>

                    <hr className="border-t border-sky-200/50" />

                    {/* Developer Tools */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.0, type: "spring", stiffness: 100 }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <h3 className="text-2xl font-extrabold text-center mb-8 tracking-wider text-sky-800 drop-shadow-sm">Developer Tools</h3>
                        <div className="flex justify-center flex-wrap gap-4 sm:gap-6 md:gap-8">
                            <SkillCard name="VS Code" logoUrl={TechLogos.VSCode} />
                            <SkillCard name="Vim" logoUrl={TechLogos.Vim} />
                            <SkillCard name="Arduino IDE" logoUrl={TechLogos.Arduino} />
                            <SkillCard
                                name="Postman"
                                logoType="text"
                                textPlaceholder="PM"
                                bgColor="bg-orange-500"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}