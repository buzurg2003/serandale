import { Cpu, ShieldCheck, Zap } from "lucide-react";

const features = [
  {
    title: "AI optimization",
    desc: "Automatic asset management based on neural networks.",
    icon: <Cpu className="w-8 h-8 text-cyan-400" />,
  },
  {
    title: "Security",
    desc: "Smart contracts audited by leading global companies.",
    icon: <ShieldCheck className="w-8 h-8 text-cyan-400" />,
  },
  {
    title: "Instantaneity",
    desc: "Transactions confirmed in less than 1 second.",
    icon: <Zap className="w-8 h-8 text-cyan-400" />,
  },
];

export default function Features() {
  return (
    <section id="services" className="py-16 md:py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 bg-linear-to-b from-white to-gray-500 bg-clip-text text-transparent">
        Our advantages
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
        {features.map((f, i) => (
          <div key={i} className="group p-8 rounded-3xl bg-white/3 border border-white/10 hover:border-purple-500/50 transition-all duration-500">
            <div className="mb-6 inline-block p-3 rounded-2xl bg-white/5 group-hover:scale-110 transition-transform">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-white">{f.title}</h3>
            <p className="text-gray-400 leading-relaxed font-light">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}