
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";


export function SummarySection() {

    const ACCENT_COLOR_CLASS = "text-sky-800";
    const LIGHT_GLASS_CARD_CLASSES = "backdrop-blur-sm bg-white/50 border border-white/80 shadow-xl ring-1 ring-sky-100/50 transition-all duration-500";


    const summaryText = "A highly motivated Backend Developer proficient in Golang, REST/gRPC APIs, and cloud-native systems. Experienced in building scalable, production-grade applications leveraging technologies like Docker, MongoDB, RabbitMQ, and cloud platforms such as AWS and DigitalOcean. Focused on robust architecture and high performance.";



    const SummaryTextWrapper = () => (
        <TextGenerateEffect
            words={summaryText}

            className="text-center text-base leading-relaxed font-medium text-gray-700"
            duration={0.7}
        />
    );


    return (
        // Main container with the light gradient background
        <section className="px-4 sm:px-6 lg:px-8 py-12 
            bg-gradient-to-br from-sky-50 to-white 
            text-gray-900 relative overflow-hidden">

            {/* Background elements (subtle) */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className={`max-w-4xl mx-auto text-center p-8 rounded-2xl ${LIGHT_GLASS_CARD_CLASSES}`}>

                    {/* Heading size remains text-2xl */}
                    <h2 className={`text-2xl font-semibold mb-6 ${ACCENT_COLOR_CLASS}`}>
                        Professional Summary
                    </h2>

                    {/* Text size is now text-base (16px) */}
                    <SummaryTextWrapper />

                </div>
            </div>
        </section>
    );
}