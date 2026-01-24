export default function AboutPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-start pt-40 p-8 text-center bg-black text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-12 font-serif">About Me</h1>
            <div className="max-w-3xl space-y-4 text-white/60 text-xl font-serif italic">
                <p>"In code and in life, I break things before I understand them."</p>
                <p>"As a CSE (AI & ML) student, debugging taught me that progress comes from fixing, not quitting."</p>
            </div>
        </main>
    );
}
