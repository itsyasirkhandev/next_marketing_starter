"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const projects = [
    {
        id: 1,
        title: "Concrete Monolith",
        location: "Zurich, Switzerland",
        image: "/images/project1.png",
        year: "2023",
    },
    {
        id: 2,
        title: "The Glass Pavilion",
        location: "Saitama, Japan",
        image: "/images/project2.png",
        year: "2022",
    },
    {
        id: 3,
        title: "Vertical Grid",
        location: "Manhattan, NY",
        image: "/images/project3.png",
        year: "2024",
    },
];

export const ProjectGrid = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(".project-card", {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            },
        });
    }, { scope: containerRef });

    return (
        <section
            id="works"
            ref={containerRef}
            className="bg-foreground px-8 py-32 text-background md:px-16"
        >
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col items-baseline justify-between gap-8 border-b border-background/20 pb-12 md:flex-row">
                    <h2 className="font-ivypresto-display text-huge font-500 uppercase tracking-tighter">
                        Selected <br /> Works
                    </h2>
                    <div className="font-mono text-14 font-500 uppercase tracking-widest text-background/60">
                        Portfolio / 2020—2024
                    </div>
                </div>

                <div className="mt-24 grid gap-16 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="project-card group cursor-pointer"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden grayscale transition-all duration-700 group-hover:grayscale-0">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-foreground/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </div>
                            <div className="mt-8 flex items-start justify-between">
                                <div>
                                    <h3 className="font-ivypresto-display text-28 md:text-32 font-500 uppercase tracking-tight">
                                        {project.title}
                                    </h3>
                                    <p className="mt-1 font-mono text-12 uppercase tracking-widest text-background/60">
                                        {project.location}
                                    </p>
                                </div>
                                <div className="font-ivypresto-display text-24 font-500 italic">
                                    &apos;{project.year.slice(2)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-32 flex justify-center">
                    <button className="border border-background/20 px-16 py-8 font-inter text-14 font-500 uppercase tracking-[0.3em] transition-colors hover:bg-background hover:text-foreground">
                        View All Projects
                    </button>
                </div>
            </div>
        </section>
    );
};
