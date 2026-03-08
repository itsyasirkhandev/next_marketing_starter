"use client";

import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const contactSchema = z.object({
    buyerType: z.enum(["Owner", "Developer"]),
    interest: z.string().min(1, "Interest is required"),
    model: z.string().optional(),
    ownLand: z.string().min(1, "Selection is required"),
    firstName: z.string().min(1, "First Name is required"),
    lastName: z.string().min(1, "Last Name is required"),
    email: z.string().email("Invalid email"),
    city: z.string().optional(),
    company: z.string().optional(),
    projectLocation: z.string().optional(),
    projectSize: z.string().optional(),
    message: z.string().optional(),
    newsletter: z.boolean().default(false),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const Contact = () => {
    const [buyerType, setBuyerType] = useState<"Owner" | "Developer">("Owner");
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            buyerType: "Owner",
            newsletter: false,
        },
    });

    const selectedBuyerType = watch("buyerType");

    useEffect(() => {
        if (selectedBuyerType) {
            setBuyerType(selectedBuyerType);
        }
    }, [selectedBuyerType]);

    useGSAP(() => {
        if (!titleRef.current) return;

        const words = titleRef.current.querySelectorAll(".word");

        gsap.fromTo(
            words,
            { y: "110%", opacity: 0 },
            {
                y: "0%",
                opacity: 1,
                duration: 1.2,
                ease: "power4.out",
                stagger: 0.03,
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 85%",
                },
            }
        );
    }, { scope: sectionRef });

    const onSubmit = (data: ContactFormValues) => {
        console.log(data);
        alert("Inquiry received. We will contact you shortly.");
        reset();
    };

    return (
        <section
            ref={sectionRef}
            id="waitlist"
            className="px-8 py-32 md:px-16 border-t border-foreground transition-colors duration-500"
        >
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-y-32">

                    {/* Header Title */}
                    <div className="md:col-span-12 lg:col-span-7">
                        <h2
                            ref={titleRef}
                            className="font-ivypresto-display text-32 md:text-56 lg:text-72 font-500 leading-[1] tracking-tighter uppercase mb-0"
                        >
                            {"Join the waitlist and be first to know when we go live.".split(" ").map((word, i) => (
                                <span key={i} className="inline-block overflow-hidden mr-[0.2em] py-[0.05em]">
                                    <span className="word inline-block">{word}</span>
                                </span>
                            ))}
                        </h2>
                    </div>

                    {/* Info/Description */}
                    <div className="md:col-span-12 lg:col-span-4 lg:col-start-9 flex flex-col gap-10">
                        <div className="flex flex-col gap-3">
                            <span className="font-mono text-10 uppercase tracking-[0.3em] text-muted-foreground">Status: Pre-Launch</span>
                            <div className="h-[2px] w-16 bg-foreground" />
                        </div>
                        <p className="font-inter text-16 md:text-20 leading-tight opacity-90 max-w-sm">
                            Atheos is currently in its <i className="font-500 underline decoration-1">pre-launch</i> phase. Share your interest to secure priority access before our public <i className="font-500 underline decoration-1">sales</i> phase begins.
                        </p>
                    </div>

                    {/* Dynamic Image Display */}
                    <div className="md:col-span-12 lg:col-span-6 aspect-[16/10] overflow-hidden bg-muted group relative">
                        <div className={cn(
                            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                            buyerType === "Owner" ? "opacity-100" : "opacity-0"
                        )}>
                            <img
                                src="/images/owner.png"
                                alt="Owner Perspective"
                                className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-105 transition-transform duration-[3s]"
                            />
                            <div className="absolute top-8 left-8 bg-foreground text-background px-4 py-1 font-mono text-10 uppercase tracking-widest">Perspective: Residential</div>
                        </div>
                        <div className={cn(
                            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                            buyerType === "Developer" ? "opacity-100" : "opacity-0"
                        )}>
                            <img
                                src="/images/developer.png"
                                alt="Developer Perspective"
                                className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-105 transition-transform duration-[3s]"
                            />
                            <div className="absolute top-8 left-8 bg-foreground text-background px-4 py-1 font-mono text-10 uppercase tracking-widest">Perspective: Commercial</div>
                        </div>
                    </div>

                    {/* Form Container */}
                    <div className="md:col-span-12">
                        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-12 gap-x-16 gap-y-16">

                            {/* Buyer Type Selection (Radio Buttons styled as Brutalist Tabs) */}
                            <div className="md:col-span-12 flex flex-col gap-6">
                                <span className="font-mono text-10 uppercase tracking-widest text-muted-foreground">Type of Interest*</span>
                                <div className="flex gap-4">
                                    <button
                                        type="button"
                                        onClick={() => reset({ ...watch(), buyerType: "Owner" })}
                                        className={cn(
                                            "px-8 py-3 font-inter text-14 font-900 uppercase tracking-widest border-2 transition-all",
                                            buyerType === "Owner" ? "bg-foreground text-background border-foreground" : "bg-transparent text-foreground border-foreground/20 hover:border-foreground"
                                        )}
                                    >
                                        Owner
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => reset({ ...watch(), buyerType: "Developer" })}
                                        className={cn(
                                            "px-8 py-3 font-inter text-14 font-900 uppercase tracking-widest border-2 transition-all",
                                            buyerType === "Developer" ? "bg-foreground text-background border-foreground" : "bg-transparent text-foreground border-foreground/20 hover:border-foreground"
                                        )}
                                    >
                                        Developer
                                    </button>
                                    <input type="hidden" {...register("buyerType")} />
                                </div>
                            </div>

                            {/* Inquiry Details */}
                            <div className="md:col-span-6 lg:col-span-4">
                                <div className="relative">
                                    <select
                                        {...register("interest")}
                                        className="w-full bg-transparent border-b-2 border-foreground/10 py-4 font-inter text-16 focus:outline-none focus:border-foreground transition-colors appearance-none cursor-pointer"
                                    >
                                        <option value="">Interest Level</option>
                                        {buyerType === "Owner" ? (
                                            <>
                                                <option value="owning">Serious Ownership</option>
                                                <option value="learn">Research & Learning</option>
                                            </>
                                        ) : (
                                            <>
                                                <option value="purchase">Multi-Unit Purchase</option>
                                                <option value="work">Strategic Partnership</option>
                                            </>
                                        )}
                                    </select>
                                    <div className="absolute right-0 bottom-5 pointer-events-none">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    </div>
                                </div>
                                {errors.interest && <p className="text-destructive text-10 font-mono mt-2 uppercase">{errors.interest.message}</p>}
                            </div>

                            <div className="md:col-span-6 lg:col-span-4">
                                <div className="relative">
                                    <select
                                        {...register("model")}
                                        className="w-full bg-transparent border-b-2 border-foreground/10 py-4 font-inter text-16 focus:outline-none focus:border-foreground transition-colors appearance-none cursor-pointer"
                                    >
                                        <option value="">Model Designation</option>
                                        <option value="BASE I">MODEL ATHEOS I</option>
                                        <option value="BASE I+">MODEL ATHEOS I+</option>
                                        <option value="CUSTOM">BESPOKE STRUCT.</option>
                                    </select>
                                    <div className="absolute right-0 bottom-5 pointer-events-none">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="md:col-span-12 lg:col-span-4">
                                <div className="relative">
                                    <select
                                        {...register("ownLand")}
                                        className="w-full bg-transparent border-b-2 border-foreground/10 py-4 font-inter text-16 focus:outline-none focus:border-foreground transition-colors appearance-none cursor-pointer"
                                    >
                                        <option value="">Land Ownership Status</option>
                                        <option value="Yes">Secured Site</option>
                                        <option value="No">Seeking Site</option>
                                    </select>
                                    <div className="absolute right-0 bottom-5 pointer-events-none">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    </div>
                                </div>
                                {errors.ownLand && <p className="text-destructive text-10 font-mono mt-2 uppercase">{errors.ownLand.message}</p>}
                            </div>

                            {/* Personal Details */}
                            <div className="md:col-span-6">
                                <input
                                    type="text"
                                    placeholder="First Name*"
                                    {...register("firstName")}
                                    className="w-full bg-transparent border-b-2 border-foreground/10 py-4 font-inter text-20 focus:outline-none focus:border-foreground transition-colors placeholder:text-foreground/30"
                                />
                                {errors.firstName && <p className="text-destructive text-10 font-mono mt-2 uppercase">{errors.firstName.message}</p>}
                            </div>

                            <div className="md:col-span-6">
                                <input
                                    type="text"
                                    placeholder="Last Name*"
                                    {...register("lastName")}
                                    className="w-full bg-transparent border-b-2 border-foreground/10 py-4 font-inter text-20 focus:outline-none focus:border-foreground transition-colors placeholder:text-foreground/30"
                                />
                                {errors.lastName && <p className="text-destructive text-10 font-mono mt-2 uppercase">{errors.lastName.message}</p>}
                            </div>

                            <div className="md:col-span-6">
                                <input
                                    type="email"
                                    placeholder="Electronic Mail*"
                                    {...register("email")}
                                    className="w-full bg-transparent border-b-2 border-foreground/10 py-4 font-inter text-20 focus:outline-none focus:border-foreground transition-colors placeholder:text-foreground/30"
                                />
                                {errors.email && <p className="text-destructive text-10 font-mono mt-2 uppercase">{errors.email.message}</p>}
                            </div>

                            <div className="md:col-span-6">
                                {buyerType === "Owner" ? (
                                    <input
                                        type="text"
                                        placeholder="City / Region*"
                                        {...register("city")}
                                        className="w-full bg-transparent border-b-2 border-foreground/10 py-4 font-inter text-20 focus:outline-none focus:border-foreground transition-colors placeholder:text-foreground/30"
                                    />
                                ) : (
                                    <input
                                        type="text"
                                        placeholder="Organization / Entity*"
                                        {...register("company")}
                                        className="w-full bg-transparent border-b-2 border-foreground/10 py-4 font-inter text-20 focus:outline-none focus:border-foreground transition-colors placeholder:text-foreground/30"
                                    />
                                )}
                            </div>

                            {/* Developer specific fields */}
                            {buyerType === "Developer" && (
                                <>
                                    <div className="md:col-span-6">
                                        <input
                                            type="text"
                                            placeholder="Proposed Site Location*"
                                            {...register("projectLocation")}
                                            className="w-full bg-transparent border-b-2 border-foreground/10 py-4 font-inter text-20 focus:outline-none focus:border-foreground transition-colors placeholder:text-foreground/30"
                                        />
                                    </div>
                                    <div className="md:col-span-6">
                                        <input
                                            type="text"
                                            placeholder="Project Magnitude (Units/SQF)*"
                                            {...register("projectSize")}
                                            className="w-full bg-transparent border-b-2 border-foreground/10 py-4 font-inter text-20 focus:outline-none focus:border-foreground transition-colors placeholder:text-foreground/30"
                                        />
                                    </div>
                                </>
                            )}

                            {/* Message */}
                            <div className="md:col-span-12">
                                <textarea
                                    placeholder="Additional Project Details"
                                    {...register("message")}
                                    rows={2}
                                    className="w-full bg-transparent border-b-2 border-foreground/10 py-4 font-inter text-20 focus:outline-none focus:border-foreground transition-colors resize-none placeholder:text-foreground/30"
                                />
                            </div>

                            {/* Submit and Consent */}
                            <div className="md:col-span-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mt-8">
                                <label className="flex items-center gap-6 cursor-pointer group max-w-sm">
                                    <div className="relative w-6 h-6 border-2 border-foreground flex items-center justify-center shrink-0">
                                        <input
                                            type="checkbox"
                                            {...register("newsletter")}
                                            className="peer absolute inset-0 opacity-0 cursor-pointer"
                                        />
                                        <div className="w-3 h-3 bg-foreground opacity-0 peer-checked:opacity-100 transition-opacity" />
                                    </div>
                                    <span className="font-mono text-10 uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors leading-[1.5]">
                                        I consent to receiving progress updates and technical dossiers via the Atheos Newsletter.
                                    </span>
                                </label>

                                <div className="flex flex-col items-end gap-4 w-full md:w-auto">
                                    <p className="font-mono text-[9px] uppercase text-muted-foreground text-right">Verification Required: reCAPTCHA Integrated</p>
                                    <button
                                        type="submit"
                                        className="w-full md:w-auto bg-foreground text-background px-20 py-6 font-inter text-16 font-900 uppercase tracking-[0.3em] hover:bg-[oklch(0.6_0.2_45)] hover:scale-105 active:scale-95 transition-all duration-300"
                                    >
                                        Transmit Request
                                    </button>
                                </div>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};
