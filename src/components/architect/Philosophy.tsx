"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Philosophy = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(".stat-item", {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
            },
        });
    }, { scope: containerRef });

    return (
        <section
            id="philosophy"
            ref={containerRef}
            className="relative overflow-hidden px-8 py-32 md:px-16"
        >
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-24 lg:grid-cols-2">
                    <div>
                        <h2 className="font-mono text-14 md:text-16 font-500 uppercase tracking-[0.4em] text-[oklch(0.6_0.2_45)]">
                            Our Philosophy
                        </h2>
                        <h3 className="mt-8 font-ivypresto-display text-64 md:text-80 lg:text-96 font-500 leading-tight tracking-tighter uppercase whitespace-nowrap">
                            Architecture <br />
                            As A <br />
                            Language.
                        </h3>
                        <p className="mt-12 font-inter text-18 md:text-20 leading-24 md:leading-32 max-w-lg text-muted-foreground">
                            We don&apos;t just build spaces; we compose experiences. Every line, every
                            void, and every material choice is a deliberate act of communication.
                            Our work is defined by the honesty of concrete, the precision of steel,
                            and the warmth of natural light.
                        </p>

                        <div className="mt-20 flex flex-col justify-center gap-16">
                            <div className="stat-item border-l-4 border-foreground pl-8">
                                <div className="font-ivypresto-display text-96 md:text-120 lg:text-140 font-500 leading-none tracking-tighter">75+</div>
                                <div className="mt-4 font-mono text-14 md:text-16 uppercase tracking-[0.2em] text-muted-foreground font-500">
                                    Projects Delivered Worldwide
                                </div>
                            </div>
                            <div className="stat-item border-l-4 border-[oklch(0.6_0.2_45)] pl-8">
                                <div className="font-ivypresto-display text-96 md:text-120 lg:text-140 font-500 leading-none tracking-tighter">12</div>
                                <div className="mt-4 font-mono text-14 md:text-16 uppercase tracking-[0.2em] text-muted-foreground font-500">
                                    International Design Awards
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative hidden aspect-[4/5] overflow-hidden lg:block">
                        <img
                            src="/images/philosophy.png"
                            alt="Architectural Philosophy"
                            className="h-full w-full object-cover grayscale transition-transform duration-1000 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-background/5 mix-blend-overlay" />
                    </div>
                </div>
            </div>
        </section>
    );
};
