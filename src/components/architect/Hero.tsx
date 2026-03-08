"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(".hero-line", {
            y: "110%",
            skewY: 7,
            opacity: 0,
            duration: 1.5,
            stagger: 0.2,
            ease: "power4.out",
            delay: 0.2,
        });

        tl.from(".hero-sub", {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        }, "-=0.8");

        tl.from(".hero-image", {
            scale: 1.3,
            opacity: 0,
            duration: 2.5,
            ease: "power2.out",
        }, "-=1.5");
    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className="relative flex min-h-[110vh] items-center justify-start overflow-hidden px-8 pt-32 md:px-16"
        >
            <div className="z-10 mx-auto w-full max-w-7xl">
                <h1 className="font-ivypresto-display text-[15vw] md:text-[13vw] lg:text-[14vw] font-500 leading-[0.85] tracking-tighter uppercase whitespace-nowrap">
                    <div className="overflow-hidden">
                        <span className="hero-line block">Form</span>
                    </div>
                    <div className="overflow-hidden">
                        <span className="hero-line block text-[oklch(0.6_0.2_45)]">Beyond</span>
                    </div>
                    <div className="overflow-hidden">
                        <span className="hero-line block">Function</span>
                    </div>
                </h1>

                <div className="hero-sub mt-16 flex flex-col items-start gap-12 md:flex-row md:items-end md:justify-between">
                    <p className="font-inter text-18 md:text-20 leading-24 md:leading-32 max-w-md text-muted-foreground">
                        We design monolithic structures that define the intersection of
                        raw materiality and structural clarity. Minimalist by choice,
                        brutalist by soul.
                    </p>

                    <div className="flex flex-col gap-4">
                        <div className="font-mono text-10 uppercase tracking-[0.2em] text-muted-foreground">
                            Est. 2012 / LONDON
                        </div>
                        <button className="group relative overflow-hidden bg-foreground px-12 py-6 text-14 font-500 text-background transition-colors hover:bg-foreground/90">
                            <span className="relative z-10 uppercase tracking-widest">Start a Project</span>
                            <div className="absolute inset-0 -translate-x-full bg-[oklch(0.6_0.2_45)] transition-transform duration-500 group-hover:translate-x-0" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Background Element - Verified Unsplash Image URL */}
            <div className="hero-image pointer-events-none absolute right-[-10%] top-[15%] -z-10 h-[90vh] w-[70vw] opacity-20 grayscale md:right-[-5%] md:top-[10%] md:h-[80vh] md:w-[60vw]">
                <img
                    src="/images/hero.png"
                    alt="Brutalist Architecture"
                    className="h-full w-full object-cover"
                />
            </div>
        </section>
    );
};
