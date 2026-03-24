import { motion } from "framer-motion";
import { BarChart3, LayoutDashboard, ScanSearch, Siren, Timer, Video } from "lucide-react";
import SectionWrapper from "./SectionWrapper.tsx";

const steps = [
  { icon: Video, title: "CCTV / Video Feed Input", desc: "Live feeds from existing city cameras are streamed into the system." },
  { icon: ScanSearch, title: "AI Vehicle & Lane Analysis", desc: "Deep learning detects vehicles, counts density, and classifies lanes." },
  { icon: BarChart3, title: "Traffic Density Calculation", desc: "Real-time density scores computed per lane with congestion classification." },
  { icon: Timer, title: "Signal Timing Optimization", desc: "Adaptive algorithms adjust green/red phases dynamically." },
  { icon: Siren, title: "Emergency Override", desc: "Emergency vehicles trigger instant green corridors through AI detection." },
  { icon: LayoutDashboard, title: "Live Dashboard Output", desc: "All data visualized in a unified command center for traffic operators." },
];

const HowItWorks = () => (
  <SectionWrapper id="how-it-works">
    <div className="text-center mb-16 space-y-4">
      <p className="text-xs uppercase tracking-[0.25em] text-primary font-medium">Process</p>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display">
        How It <span className="gradient-text">Works</span>
      </h2>
    </div>

    <div className="relative">
      {/* Vertical connector line */}
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-accent/30 to-transparent" />

      <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-1 lg:gap-0">
        {steps.map((s, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex items-center lg:py-8 ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            >
              <div className={`flex-1 ${isLeft ? "lg:text-right lg:pr-16" : "lg:text-left lg:pl-16"}`}>
                <div className={`glass-panel-hover border-2 rounded-2xl p-6 inline-block max-w-md ${isLeft ? "lg:ml-auto" : ""}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <s.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-primary font-medium">Step {i + 1}</span>
                      <h3 className="font-semibold font-display">{s.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>

              {/* Center node */}
              <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary items-center justify-center z-10">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>

              <div className="flex-1 hidden lg:block" />
            </motion.div>
          );
        })}
      </div>
    </div>
  </SectionWrapper>
);

export default HowItWorks;
