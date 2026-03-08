"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const services = [
    {
        title: "Architectural Design",
        description: "From conceptualization to construction documentation, we create structures that redefine their environment.",
        num: "01"
    },
    {
        title: "Urban Planning",
        description: "Designing large-scale systems that harmonize human interaction with urban infrastructure.",
        num: "02"
    },
    {
        title: "Interior Architecture",
        description: "Synthesizing external forms with internal flows to create cohesive structural experiences.",
        num: "03"
    },
    {
        title: "Structural Consulting",
        description: "Leveraging our expertise in raw materiality to advise on complex monolithic builds.",
        num: "04"
    }
];

export const Services = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(".service-item", {
            x: -50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
            },
        });
    }, { scope: containerRef });

    return (
        <section id="services" ref={containerRef} className="border-t border-foreground/10 px-8 py-32 md:px-16">
            <div className="mx-auto max-w-7xl">
                <div className="mb-24 flex flex-col items-baseline justify-between gap-8 md:flex-row">
                    <h2 className="font-ivypresto-display text-80 md:text-120 font-500 uppercase tracking-tighter">
                        Design <br /> Expertise
                    </h2>
                    <p className="max-w-xs font-mono text-14 uppercase tracking-widest text-muted-foreground">
                        Specialized solutions for monolithic and brutalist structures.
                    </p>
                </div>

                <div className="grid gap-px bg-foreground/10 md:grid-cols-2">
                    {services.map((service) => (
                        <div
                            key={service.num}
                            className="service-item bg-background p-12 transition-colors hover:bg-muted"
                        >
                            <div className="mb-8 font-mono text-14 font-500 text-[oklch(0.6_0.2_45)]">{service.num}</div>
                            <h3 className="mb-6 font-ivypresto-display text-40 md:text-48 font-500 uppercase tracking-tight">{service.title}</h3>
                            <p className="font-inter text-18 md:text-20 leading-tight text-muted-foreground">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
