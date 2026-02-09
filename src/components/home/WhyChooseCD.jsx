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
      title: "Strategy-driven, scalable solutions",
      description: "Solutions designed with your business goals in mind, built to scale as you grow.",
      proof: "Built for growth",
      accent: "border-l-2 border-slate-900 dark:border-white",
      image: "/CD-IT Images/home tech decisions.png"
    },
    {
      title: "Strong technical expertise and industry experience",
      description: "Deep technical knowledge combined with real-world experience across diverse industries.",
      proof: "Proven expertise",
      accent: "border-l-2 border-slate-300 dark:border-slate-700",
      image: "/CD-IT Images/home clarity and accountability.png"
    },
    {
      title: "Focus on security, performance, and reliability",
      description: "Every system we build prioritizes security, delivers optimal performance, and ensures reliability.",
      proof: "Quality first",
      accent: "border-l-2 border-slate-300 dark:border-slate-700",
      image: "/CD-IT Images/home scalability and stability.png"
    },
    {
      title: "Long-term support beyond delivery",
      description: "We stay with you beyond launch, providing ongoing support and optimization.",
      proof: "Committed partnership",
      accent: "border-l-2 border-slate-300 dark:border-slate-700",
      image: "/CD-IT Images/home transparent partnerships.png"
    },
    {
      title: "Security, Stability & Compliance by Design",
      description: "Security is not an afterthought at CD. We design systems with data protection, access control, and operational stability at the core, helping businesses reduce risk and maintain compliance in evolving digital environments.",
      proof: "Secure systems create confident businesses",
      accent: "border-l-2 border-slate-300 dark:border-slate-700",
      image: "/CD-IT Images/home scalability and stability.png"
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
                  WHY CHOOSE US
                </span>
                <h2 
                  id="why-choose-heading"
                  className="text-4xl lg:text-5xl font-light text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-6"
                >
                  Why Businesses Choose CD
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  Smart systems are built for the future, not just launch day.
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
                    <div className={`bg-white dark:bg-gray-900 rounded-none shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden ${reason.accent} border-y border-r border-gray-100 dark:border-gray-800`}>
                      {/* Image Section */}
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={reason.image}
                          alt={reason.title}
                          className="w-full h-full object-cover opacity-100"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent dark:from-gray-900/70" />
                      </div>
                      
                      {/* Content Section */}
                      <div className="p-8 lg:p-10">
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