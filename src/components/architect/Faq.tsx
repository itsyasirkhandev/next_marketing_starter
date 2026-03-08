"use client";

import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Plus } from "lucide-react";

interface FaqItem {
    question: string;
    answer: string;
}

interface FaqCategory {
    category: string;
    items: FaqItem[];
}

const faqData: FaqCategory[] = [
    {
        category: "GENERAL",
        items: [
            {
                question: "What is Base Habitation?",
                answer: "Base Habitation is a modular living solutions company, focused on rethinking how we build and how we live. That’s why we offer modular cabins for simple, sustainable living. We believe Modular homes – or prefabricated homes using pre-built modules – present a viable solution to address current housing issues. Moreover, Simple and Sustainable living represents a core belief of ours: reducing your footprint can actually increase happiness.",
            },
            {
                question: "Are your homes available for order?",
                answer: "Base Habitation is currently in its pre-launch phase, meaning we are working towards the full sales phase in the near future, where our products will be fully accessible for purchase. You can join our waitlist to be the first to know when we go live.",
            },
            {
                question: "How does your system work?",
                answer: "After we produce the panels with our prefabrication partner, we connect you with one of our Base Certified Builders. You get clear step-by-step updates along the way. Once the construction is completed, we then give you the keys.",
            },
            {
                question: "How long does it take?",
                answer: "The process takes about 6-8 months once a building permit is issued. This includes manufacturing the unit and assembling it on your property. Since the time it takes to get a building permit can vary, we’ll provide you with a personalized timeline once we begin.",
            },
            {
                question: "What area do you serve?",
                answer: "During our initial Sales Phase, we are limiting our zone within Quebec to a 200 km range around Montreal.",
            }
        ],
    },
    {
        category: "PRICING",
        items: [
            {
                question: "How much does it cost?",
                answer: "As we are still in the Pre-launch Phase, final pricing is not yet available. Sign up for updates to be the first to know when our sales phase goes live.",
            },
            {
                question: "What is included in the cost?",
                answer: "Prefabricated wall and roof panels only. The rest is coordinated between Base Certified Builder based on your desired design package. You will get a clear understanding of the total cost before construction begins.",
            },
            {
                question: "What is excluded from the cost?",
                answer: "Site preparation, permitting, foundation work, septic and well systems, interior and exterior finishes and panel shipping costs.",
            },
            {
                question: "How much does it cost to upgrade the basic model package?",
                answer: "We offer a basic package as well as the option to upgrade your model in different ways. More information on specific pricing options will be shared when our sales phase goes live.",
            },
            {
                question: "Do you have financing partners?",
                answer: "We plan to have one or multiple financing partners to facilitate the payment. More will be revealed when our sales phase goes live.",
            }
        ],
    },
    {
        category: "DESIGN",
        items: [
            {
                question: "What makes Base Habitation environmentally friendly?",
                answer: "We work with locally-sourced products, professionals and manufacturing partners. We integrate sustainably produced materials that are natural and energy efficient. We believe in using recycled and recyclable materials in our building components. We strive for zero-waste production and construction practices.",
            },
            {
                question: "Who designed your homes?",
                answer: "Our founder is the architect behind the designs and has worked alongside a diverse team of professionals including structural and mechanical engineers as well as sustainable building experts to develop each detail of our home designs.",
            },
            {
                question: "Do you offer design customization?",
                answer: "While we do not offer customization to the house plan, we do offer set options for materials as well as certain design items. More will be revealed when our sales phase goes live.",
            },
            {
                question: "What types of design options are available?",
                answer: "We offer various interior and exterior finish options, as well as window and door configurations, to help you make your home your own.",
            }
        ],
    }
];

export const Faq = () => {
    const [activeCategory, setActiveCategory] = useState(0);
    const [openItem, setOpenItem] = useState<number | null>(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

    const toggleItem = (index: number) => {
        setOpenItem(openItem === index ? null : index);
    };

    useGSAP(() => {
        answerRefs.current.forEach((el, i) => {
            if (!el) return;
            if (openItem === i) {
                gsap.to(el, {
                    height: "auto",
                    opacity: 1,
                    duration: 0.5,
                    ease: "power2.out",
                });
            } else {
                gsap.to(el, {
                    height: 0,
                    opacity: 0,
                    duration: 0.4,
                    ease: "power2.inOut",
                });
            }
        });
    }, { dependencies: [openItem], scope: containerRef });

    // Reset open item when category changes
    useEffect(() => {
        setOpenItem(0);
    }, [activeCategory]);

    return (
        <section ref={containerRef} className="bg-background px-8 py-24 md:px-16" id="faq">
            <div className="mx-auto max-w-7xl">
                <header className="mb-20 border-b border-foreground/10 pb-8">
                    <h2 className="font-mono text-14 font-500 uppercase tracking-[0.2em] text-muted-foreground">
                        Common Questions
                    </h2>
                    <h3 className="mt-4 font-ivypresto-display text-48 font-500 leading-tight uppercase tracking-tighter md:text-64">
                        FAQ
                    </h3>
                </header>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-24 border-t-2 border-foreground">
                    {/* Categories Column */}
                    <div className="flex flex-col lg:col-span-12 lg:border-r-2 lg:border-foreground py-8 pr-12">
                        {faqData.map((cat, idx) => (
                            <button
                                key={cat.category}
                                onClick={() => setActiveCategory(idx)}
                                className={`group relative flex items-center justify-between py-6 text-left transition-all duration-300 ${activeCategory === idx
                                    ? "text-foreground"
                                    : "text-muted-foreground hover:text-foreground/70"
                                    }`}
                            >
                                <div className="flex items-center gap-6">
                                    <span className="font-mono text-14">
                                        {String(idx + 1).padStart(2, '0')}.
                                    </span>
                                    <span className={`text-24 font-black tracking-tighter uppercase md:text-32 lg:text-40 transition-transform duration-300 ${activeCategory === idx ? "translate-x-4" : ""}`}>
                                        {cat.category}
                                    </span>
                                </div>

                                {activeCategory === idx && (
                                    <div className="h-4 w-4 bg-[oklch(0.6_0.2_45)]" />
                                )}
                            </button>
                        ))}

                        <div className="mt-auto hidden lg:block">
                            <div className="font-mono text-12 uppercase tracking-[0.3em] text-muted-foreground/30 rotate-90 origin-left mt-24">
                                Atheos / Faq / 2024
                            </div>
                        </div>
                    </div>

                    {/* Questions Column */}
                    <div className="lg:col-span-12 py-8 lg:pl-12">
                        <div className="flex flex-col">
                            {faqData[activeCategory].items.map((item, idx) => (
                                <div
                                    key={`${activeCategory}-${idx}`}
                                    className="border-b border-foreground/10 last:border-0"
                                >
                                    <button
                                        onClick={() => toggleItem(idx)}
                                        className="group flex w-full items-start justify-between py-8 text-left transition-colors"
                                    >
                                        <span className={`text-20 font-500 leading-tight md:text-28 pr-8 transition-colors ${openItem === idx ? "text-[oklch(0.6_0.2_45)]" : "group-hover:text-[oklch(0.6_0.2_45)]"}`}>
                                            {item.question}
                                        </span>
                                        <div className={`mt-2 flex h-8 w-8 items-center justify-center border-2 border-foreground transition-all duration-500 ${openItem === idx ? "rotate-45 bg-foreground text-background" : "rotate-0 text-foreground group-hover:bg-foreground group-hover:text-background"}`}>
                                            <Plus size={16} strokeWidth={2.5} />
                                        </div>
                                    </button>

                                    <div
                                        ref={(el) => { answerRefs.current[idx] = el; }}
                                        className="overflow-hidden h-0 opacity-0"
                                    >
                                        <div className="pb-8 font-inter text-16 leading-relaxed text-muted-foreground md:text-18 max-w-xl">
                                            {item.answer}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Decorative structural line */}
                <div className="mt-32 h-[2px] w-full bg-foreground/5" />
            </div>
        </section>
    );
};
