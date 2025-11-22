

"use client";
import { useScroll, useTransform } from "motion/react";
import React from "react";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";

// Import your necessary components for the overlay
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from 'lucide-react';

export default function GoogleGeminiEffectDemo() {
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
    const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
    const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
    const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
    const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

    return (
        <div
            className="h-[60vh] md:h-[80vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative"
            ref={ref}
        >
            <div
                className="absolute top-12 left-0 right-0 z-50 w-full flex flex-col items-center justify-center gap-2"
            >
                <p
                    className="text-white text-base md:text-4xl font-semibold"
                >
                    Let's Connect
                </p>
                {/* MODIFIED: Increased vertical gap from 2 to 8 (2rem or 32px) on large screens (md:gap-8) */}
                <div className="flex justify-center gap-4 md:gap-6 mt-2 md:mt-8">
                    {[
                        { href: "https://github.com/bhushan-aruto", Icon: Github },
                        { href: "https://linkedin.com/in/bhushanaruto05", Icon: Linkedin },
                        { href: "mailto:developer.bhushanhk@gmail.com", Icon: Mail },
                    ].map(({ href, Icon }) => (
                        <a key={href} href={href} target="_blank" rel="noopener noreferrer">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full hover:bg-white/10 text-white hover:text-sky-400 transition-all duration-300 w-7 h-7 md:w-9 md:h-9 p-0"
                            >
                                <Icon className="w-5 h-5 md:w-6 md:h-6" />
                            </Button>
                        </a>
                    ))}
                </div>
            </div>

            <GoogleGeminiEffect
                pathLengths={[
                    pathLengthFirst,
                    pathLengthSecond,
                    pathLengthThird,
                    pathLengthFourth,
                    pathLengthFifth,
                ]}
            />
        </div>
    );
}