"use client"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
    return (
        <footer className="bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <div className="flex justify-center gap-6">
                    <a href="https://github.com/bhushan-aruto" target="_blank" rel="noopener noreferrer">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full hover:bg-sky-100 hover:text-sky-700 transition-all duration-300"
                        >
                            <Github className="w-5 h-5" />
                        </Button>
                    </a>
                    <a href="https://linkedin.com/in/bhushanaruto05" target="_blank" rel="noopener noreferrer">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full hover:bg-sky-100 hover:text-sky-700 transition-all duration-300"
                        >
                            <Linkedin className="w-5 h-5" />
                        </Button>
                    </a>
                    <a href="mailto:developer.bhushanhk@gmail.com">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full hover:bg-sky-100 hover:text-sky-700 transition-all duration-300"
                        >
                            <Mail className="w-5 h-5" />
                        </Button>
                    </a>
                </div>
            </div>
        </footer>
    )
}
