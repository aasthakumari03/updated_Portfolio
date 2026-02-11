
import React from 'react';
import { UPDATES } from "@/app/constants/data";

const UpdatesSection = () => {
    return (
        <section id="updates" className="py-24 px-12 max-w-7xl mx-auto space-y-24 min-h-screen flex flex-col justify-center">
            <div className="space-y-8 text-center max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-zinc-300">What I've Been Up To</h2>
                <p className="text-xl text-white/40 leading-relaxed max-w-2xl mx-auto">
                    Constantly learning, building, and exploring. Here’s a snapshot of my current <span className="text-teal-400">focus</span>.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {UPDATES.map((update, index) => (
                    <div key={index} className="group p-8 rounded-[2rem] bg-zinc-900/40 border border-white/5 hover:border-teal-400/30 hover:bg-zinc-900/60 transition-all duration-500 hover:-translate-y-2">
                        <div className={`mb-6 w-12 h-12 rounded-full ${update.bgClass} flex items-center justify-center ${update.colorClass}`}>
                            {update.icon && <update.icon size={24} />}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">{update.title}</h3>
                        <p className="text-white/40 leading-relaxed">
                            {update.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default UpdatesSection;
