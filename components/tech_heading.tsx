"use client";
import { LayoutTextFlipTech } from "@/components/layout-flip2";
import { motion } from "motion/react";

export function TechnicalSkillsHeading() {
    return (
        <div className="mb-10">
            <motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">

                <LayoutTextFlipTech
                    text="explore my"
                    words={[
                        "technical skills",
                        "tech stack",
                        "abilities",
                        "core expertise",
                        "engineering skills",
                    ]}
                    duration={2500}
                />
            </motion.div>

        </div>
    );
}
