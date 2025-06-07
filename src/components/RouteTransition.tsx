// components/RouteTransition.tsx
"use client";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function RouteTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true);
      setProgress(0);
      
      // Simulate progress
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 10;
        });
      }, 100);

      return () => clearInterval(interval);
    };

    handleRouteChange();
    const timer = setTimeout(() => {
      setLoading(false);
      setProgress(100);
    }, 1000);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {/* Smooth curtain transition */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ 
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1] // Custom easing for smoothness
            }}
            className="fixed inset-0 z-50 bg-gradient-to-br from-amber-400 to-yellow-500"
          >
            <div className="h-full w-full flex flex-col items-center justify-center">
              {/* Modern circular progress with trail */}
              <div className="relative w-24 h-24 mb-8">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#fef3c7"
                    strokeWidth="8"
                  />
                  {/* Progress circle */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="white"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray="283"
                    strokeDashoffset={283 - (283 * progress) / 100}
                    initial={{ strokeDashoffset: 283 }}
                    transition={{ duration: 0.3 }}
                  />
                </svg>
                
                {/* Center percentage */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                >
                  {progress}%
                </motion.div>
              </div>

              {/* Animated text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-center space-y-2"
              >
                <motion.p 
                  className="text-white font-medium text-lg"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  Loading your experience
                </motion.p>
                <p className="text-amber-100 text-sm">Please wait a moment</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page content with smooth entrance */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ 
            opacity: 1, 
            filter: "blur(0px)",
            transition: { delay: loading ? 0 : 0.5 }
          }}
          exit={{ opacity: 0, filter: "blur(5px)" }}
          transition={{ 
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}