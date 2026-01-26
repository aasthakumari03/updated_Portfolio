import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-start pt-40 p-8 text-center bg-black text-white">
            <h1 className="text-2xl md:text-4xl font-bold mb-12 font-serif text-zinc-300">About Me</h1>
            <div className="max-w-3xl space-y-4 text-white/60 text-xl font-serif italic mb-16">
                <p>"In code and in life, I break things before I understand them."</p>
                <p>"As a CSE (AI & ML) student, debugging taught me that progress comes from fixing, not quitting."</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl px-4 mx-auto">
                <ScrollReveal delay={0.2} className="relative group">
                    <div className="relative aspect-square overflow-hidden rounded-[2.5rem] border border-white/5 bg-zinc-900/30 backdrop-blur-md shadow-2xl shadow-teal-500/5 group-hover:shadow-teal-500/30 group-hover:-translate-y-2 transition-all duration-700">
                        <Image
                            src="/images/mahadev.png"
                            alt="Mahadev Trishul - Symbol of Core Beliefs"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                            <p className="text-teal-400 font-bold tracking-[0.2em] uppercase text-xs">Spiritual Root • Mahadev Bhakt</p>
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.4} className="relative group">
                    <div className="relative aspect-square overflow-hidden rounded-[2.5rem] border border-white/5 bg-zinc-900/30 backdrop-blur-md shadow-2xl shadow-teal-500/5 group-hover:shadow-teal-500/30 group-hover:-translate-y-2 transition-all duration-700">
                        <Image
                            src="/images/coding.png"
                            alt="Futuristic Coding Interface"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                            <p className="text-teal-400 font-bold tracking-[0.2em] uppercase text-xs">Passion • Code & Debug</p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </main>
    );
}
