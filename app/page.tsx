import Image from "next/image";
import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white selection:bg-white selection:text-black">
      {/* Navigation / Logo */}
      <div className="absolute top-8 left-8 z-30">
        <Logo className="w-10 h-10" />
      </div>

      <div className="absolute top-8 right-8 z-30">
        <Navbar />
      </div>
      {/* Background Image Container */}
      <div
        className="absolute inset-0 z-0 opacity-60"
        style={{
          backgroundImage: "url('/background-waterfall.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Gradient Overlay for Depth */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-transparent to-black" />

      {/* Main Content */}
      <main className="relative z-20 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="max-w-4xl space-y-8">
          <h1 className="animate-fade-in text-5xl font-extrabold tracking-tighter sm:text-7xl md:text-8xl">
            Elegance in <span className="text-zinc-500">Motion</span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-zinc-400 sm:text-xl">
            Welcome to my professional portfolio. A space where minimalist design
            meets powerful functionality.
          </p>

        </div>
      </main>

    </div>
  );
}
