"use client";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "motion/react";

export function ProjectsHeading() {
    return (
        <div className="mb-10">
            <motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
                <LayoutTextFlip
                    text="welcome to"
                    words={[
                        "my projects",
                        "my creations",
                        "my work showcase",
                        "my tech builds",
                        "my coding journey",
                    ]}
                    duration={2500}
                />
            </motion.div>

            <p className="mt-4 text-center text-base text-neutral-600 dark:text-neutral-400">
                Explore the things I've built with passion, creativity, and clean engineering.
            </p>
        </div>
    );
}
