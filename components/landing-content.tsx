"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const testimonials = [
    {
        name: "Alex Carter",
        avatar: "A",
        title: "Game Developer",
        description: "Your Image Generator sparks my creativity like magic! It produces visuals I'd never dream of, making my projects stand out effortlessly!"
    },
    {
        name: "Sophia Chen",
        avatar: "A",
        title: "Full-Stack Developer",
        description: "Your Music Generator turns my ideas into symphonies. It's a melody magician, making music composition pure joy."
    },
    {
        name: "William Lee",
        avatar: "A",
        title: "Cyber Security Engineer",
        description: "As a beginner, your Code Generator's explanations and snippets are my coding lifesavers. It's like having a genius programmer by my side!"
    },
    {
        name: "James Wilson",
        avatar: "A",
        title: "Full-Stack Engineer",
        description: "Your Conversation Generator crafts emails that seal deals. It's my secret weapon for professional and persuasive communication."
    },
]
export const LandingContent = () => {
    return (
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                Testimonials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {testimonials.map((item) => (
                    <Card key={item.description} className="bg-[#192339] border-none text-white">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-lg">{item.name}</p>
                                    <p className="text-zinc-400 text-sm">{item.title}</p>
                                </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {item.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    )
} 