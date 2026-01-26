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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl px-4">
                <ScrollReveal delay={0.2} className="relative group">
                    <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50">
                        <Image
                            src="/images/mahadev.png"
                            alt="Mahadev Trishul - Symbol of Core Beliefs"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <p className="text-teal-400 font-bold tracking-widest uppercase text-sm">Spiritual Root • Mahadev Bhakt</p>
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.4} className="relative group">
                    <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50">
                        <Image
                            src="/images/coding.png"
                            alt="Futuristic Coding Interface"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <p className="text-teal-400 font-bold tracking-widest uppercase text-sm">Passion • Code & Debug</p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </main>
    );
}
