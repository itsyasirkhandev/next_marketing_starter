"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll lock when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    useGSAP(() => {
        if (isOpen) {
            gsap.to(menuRef.current, {
                x: 0,
                duration: 0.8,
                ease: "power4.out",
            });
            gsap.fromTo(
                linksRef.current,
                { x: 50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power3.out",
                    delay: 0.3,
                }
            );
        } else {
            gsap.to(menuRef.current, {
                x: "100%",
                duration: 0.8,
                ease: "power4.inOut",
            });
        }
    }, [isOpen]);

    return (
        <nav
            className={cn(
                "fixed top-0 z-50 flex w-full items-center justify-between transition-all duration-500 md:px-16 px-8",
                isScrolled || isOpen
                    ? "bg-foreground py-4 border-b border-white/10"
                    : "bg-transparent py-8 border-b border-transparent"
            )}
        >
            <Link
                href="/architect"
                className={cn(
                    "font-ivypresto-display text-24 font-500 tracking-tighter uppercase transition-colors duration-300 relative z-[60]",
                    isScrolled || isOpen ? "text-background" : "text-foreground"
                )}
            >
                Atheos<span className="text-[oklch(0.6_0.2_45)]">.</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden items-center gap-12 md:flex">
                {["Works", "Philosophy", "Studio", "Contact"].map((item) => (
                    <Link
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className={cn(
                            "font-inter text-12 font-500 uppercase tracking-widest hover:text-[oklch(0.6_0.2_45)] transition-colors",
                            isScrolled || isOpen ? "text-background" : "text-foreground"
                        )}
                    >
                        {item}
                    </Link>
                ))}
            </div>

            {/* Mobile Toggle */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "relative z-[60] block md:hidden transition-colors duration-300",
                    isScrolled || isOpen ? "text-background" : "text-foreground"
                )}
                aria-label="Toggle Menu"
            >
                {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>

            {/* Mobile Menu Overlay */}
            <div
                ref={menuRef}
                className="fixed inset-0 z-50 flex translate-x-full flex-col bg-foreground p-16 md:hidden"
            >
                <div className="flex flex-col gap-8 pt-24">
                    {["Works", "Philosophy", "Studio", "Contact"].map((item, i) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            ref={(el) => { linksRef.current[i] = el }}
                            onClick={() => setIsOpen(false)}
                            className="font-ivypresto-display text-48 font-500 text-background uppercase tracking-tight hover:text-[oklch(0.6_0.2_45)] transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </div>
                <div className="mt-auto border-t border-background/20 pt-8">
                    <p className="font-mono text-10 text-background/60 tracking-widest uppercase">
                        STRATEGY & FORM
                    </p>
                </div>
            </div>
        </nav>
    );
};
