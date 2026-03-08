import { Metadata } from "next";
import { Navbar } from "@/components/architect/Navbar";
import { Hero } from "@/components/architect/Hero";
import { ProjectGrid } from "@/components/architect/ProjectGrid";
import { Philosophy } from "@/components/architect/Philosophy";
import { Services } from "@/components/architect/Services";
import { Process } from "@/components/architect/Process";
import { Faq } from "@/components/architect/Faq";
import { Contact } from "@/components/architect/Contact";
import { Footer } from "@/components/architect/Footer";

export const metadata: Metadata = {
    title: "Atheos Architect | Structural Clarity & Form",
    description: "Atheos is a premier architectural studio specializing in brutalist-inspired modern structures and minimalist spatial design.",
};

export default function ArchitectPage() {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-[oklch(0.6_0.2_45)] selection:text-background font-inter">
            <Navbar />
            <main>
                <Hero />

                {/* Intro Highlight */}
                <section className="px-8 py-24 md:px-16">
                    <div className="mx-auto max-w-7xl border-l-[12px] border-foreground pl-12 py-8">
                        <h2 className="font-ivypresto-display text-[8vw] md:text-[6vw] lg:text-[5vw] font-500 leading-tight uppercase tracking-tighter max-w-5xl">
                            We believe in the power of raw materiality and the purity of
                            geometric forms to create spaces that transcend utility.
                        </h2>
                    </div>
                </section>

                <Philosophy />

                {/* Full Width Image Break - Verified Unsplash URL */}
                <section className="h-[100vh] w-full overflow-hidden bg-muted">
                    <img
                        src="/images/geometry.png"
                        alt="Structural Geometry"
                        className="h-full w-full object-cover grayscale transition-transform duration-[2s] hover:scale-110"
                    />
                </section>

                <Services />
                <ProjectGrid />

                {/* Testimonial Section */}
                <section className="border-y border-foreground/10 bg-muted/30 px-8 py-40 md:px-16">
                    <div className="mx-auto max-w-7xl text-center">
                        <h2 className="font-ivypresto-display text-[7vw] md:text-[5vw] font-500 leading-tight tracking-tighter uppercase italic">
                            &quot;Atheos transformed our vision of a corporate headquarters
                            into a living monolith that commands respect and inspires
                            creativity.&quot;
                        </h2>
                        <div className="mt-16 flex flex-col items-center gap-4">
                            <div className="h-20 w-px bg-[oklch(0.6_0.2_45)]" />
                            <div className="font-mono text-14 font-500 uppercase tracking-[0.3em]">
                                Marcus Vane / CEO, Nexus Corp
                            </div>
                        </div>
                    </div>
                </section>

                <Process />

                <Faq />

                <Contact />

            </main>
            <Footer />
        </div>
    );
}
