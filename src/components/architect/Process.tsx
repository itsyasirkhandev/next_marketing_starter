"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const steps = [
    {
        title: "Discovery & Site Analysis",
        content: "We begin by understanding the geological and cultural landscape where the structure will exist."
    },
    {
        title: "Conceptual Composition",
        content: "Abstracting requirements into formal volumes that prioritize structural honesty."
    },
    {
        title: "Material Specification",
        content: "Selecting raw materials—concrete, glass, steel—that will define the project's character."
    },
    {
        title: "Construction Oversight",
        content: "Rigorous attention to detail during the physical manifestation of the design."
    }
];

export const Process = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section id="process" ref={containerRef} className="bg-foreground px-8 py-32 text-background md:px-16">
            <div className="mx-auto max-w-7xl">
                <div className="mb-24">
                    <h2 className="font-mono text-14 font-500 uppercase tracking-[0.4em] text-[oklch(0.6_0.2_45)]">The Process</h2>
                    <h3 className="mt-8 font-ivypresto-display text-80 md:text-120 font-500 uppercase tracking-tighter shadow-foreground">From Void To Volume</h3>
                </div>

                <div className="space-y-12">
                    {steps.map((step, i) => (
                        <div
                            key={i}
                            className="group flex flex-col gap-8 border-b border-background/20 pb-12 transition-colors hover:border-[oklch(0.6_0.2_45)] md:flex-row md:items-start md:gap-24"
                        >
                            <div className="font-ivypresto-display text-64 md:text-80 font-500 text-background/20 transition-colors group-hover:text-[oklch(0.6_0.2_45)]">
                                (0{i + 1})
                            </div>
                            <div className="flex-1">
                                <h4 className="font-ivypresto-display text-32 md:text-48 font-500 uppercase tracking-tight">{step.title}</h4>
                                <p className="mt-6 font-inter text-20 text-background/60 leading-tight max-w-2xl">
                                    {step.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
