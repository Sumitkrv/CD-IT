import { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';

const WhyChooseCD = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 10]);

  const reasons = [
    {
      title: "Technology decisions guided by enduring impact",
      description: "Architecture engineered for multi-decade relevance, not transient requirements.",
      proof: "Avg. 12-year system lifecycle",
      accent: "border-l-2 border-slate-900 dark:border-white"
    },
    {
      title: "Engineering with clarity and accountability",
      description: "Comprehensive oversight frameworks embedded across development and operations.",
      proof: "ISO 27001 & SOC 2 certified",
      accent: "border-l-2 border-slate-300 dark:border-slate-700"
    },
    {
      title: "Designed for scale, stability, and governance",
      description: "Proactive resolution of technical complexity before operational impact occurs.",
      proof: "99.96% critical uptime",
      accent: "border-l-2 border-slate-300 dark:border-slate-700"
    },
    {
      title: "Partnerships built on transparency and continuity",
      description: "Dedicated leadership ensuring strategic alignment across all initiatives.",
      proof: "6.8-year avg. engagement",
      accent: "border-l-2 border-slate-300 dark:border-slate-700"
    }
  ];

  return (
    <section 
      ref={containerRef}
      className="relative bg-white dark:bg-gray-950 py-24 lg:py-32"
      aria-labelledby="why-choose-heading"
    >
      {/* Professional Unsplash Background - Subtle, blurred team environment */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80"
          alt="Professional team collaboration"
          className="w-full h-full object-cover opacity-[0.03] dark:opacity-[0.02] blur-sm scale-105"
          loading="lazy"
        />
      </div>

      {/* Minimal background texture */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
        backgroundSize: '64px 64px'
      }} />

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative">
        {/* Two-column grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* LEFT COLUMN - Editorial */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
            <div className="space-y-8">
              <div>
                <span className="inline-block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-[0.15em] mb-6">
                  Strategic Partnership
                </span>
                <h2 
                  id="why-choose-heading"
                  className="text-4xl lg:text-5xl font-light text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-6"
                >
                  A measured approach<br />
                  <span className="font-medium">to enterprise technology</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  When decisions carry long-term consequence, execution quality and partnership depth become the differentiating factors.
                </p>
              </div>
              
              {/* Understated proof */}
              <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-3">Portfolio Tenure</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-light text-gray-900 dark:text-white tracking-tight">7.4</p>
                  <span className="text-sm text-gray-500 dark:text-gray-400">years average</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* RIGHT COLUMN - Controlled Stack */}
          <div className="lg:col-span-7">
            <div className="space-y-6">
              {reasons.map((reason, index) => {
                const yTransform = index === 0 ? y1 : index === 1 ? y2 : index === 2 ? y3 : y4;
                
                return (
                  <motion.div 
                    key={index}
                    className="relative"
                    style={{ y: yTransform }}
                  >
                    <div className={`bg-white dark:bg-gray-900 rounded-none shadow-sm hover:shadow-md transition-shadow duration-300 p-8 lg:p-10 ${reason.accent} border-y border-r border-gray-100 dark:border-gray-800`}>
                      <div className="flex justify-between items-start gap-8">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl lg:text-2xl font-normal text-gray-900 dark:text-white mb-3 leading-tight">
                            {reason.title}
                          </h3>
                          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                            {reason.description}
                          </p>
                          <span className="inline-block text-xs text-gray-500 dark:text-gray-500 font-medium uppercase tracking-wider">
                            {reason.proof}
                          </span>
                        </div>
                        <div className="flex-shrink-0 text-right">
                          <div className={`text-xl font-light ${index === 0 ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-600'}`}>
                            {String(index + 1).padStart(2, '0')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseCD;