"use client";

import Link from "next/link";

export const Footer = () => {
    return (
        <footer id="contact" className="border-t border-foreground px-8 py-32 md:px-16">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-24 lg:grid-cols-2">
                    <div>
                        <h2 className="font-ivypresto-display text-48 md:text-64 lg:text-66 font-500 uppercase tracking-tighter">
                            Tell us <br />
                            your vision<span className="text-[oklch(0.6_0.2_45)]">.</span>
                        </h2>
                        <div className="mt-16 flex flex-col gap-4">
                            <Link
                                href="mailto:studio@atheos.arch"
                                className="font-ivypresto-display text-24 md:text-32 font-500 underline decoration-2 underline-offset-8 hover:text-[oklch(0.6_0.2_45)] transition-colors"
                            >
                                studio@atheos.arch
                            </Link>
                            <div className="font-mono text-18 font-500 text-muted-foreground">
                                +44 20 7946 0123
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between">
                        <div className="grid grid-cols-2 gap-12">
                            <div className="flex flex-col gap-6">
                                <span className="font-mono text-10 uppercase tracking-widest text-muted-foreground">Social</span>
                                <Link href="#" className="font-inter text-14 font-500 uppercase hover:underline">Instagram</Link>
                                <Link href="#" className="font-inter text-14 font-500 uppercase hover:underline">LinkedIn</Link>
                                <Link href="#" className="font-inter text-14 font-500 uppercase hover:underline">Vimeo</Link>
                            </div>
                            <div className="flex flex-col gap-6">
                                <span className="font-mono text-10 uppercase tracking-widest text-muted-foreground">Offices</span>
                                <p className="font-inter text-14 font-500 uppercase">London / UK</p>
                                <p className="font-inter text-14 font-500 uppercase">Basel / CH</p>
                                <p className="font-inter text-14 font-500 uppercase">Tokyo / JP</p>
                            </div>
                        </div>

                        <div className="mt-24 flex items-center justify-between border-t border-foreground/10 pt-12">
                            <div className="font-ivypresto-display text-16 font-500 uppercase tracking-widest">
                                Atheos Architect
                            </div>
                            <div className="font-mono text-[10px] uppercase text-muted-foreground">
                                &copy; 2024 / Built with Precision
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
