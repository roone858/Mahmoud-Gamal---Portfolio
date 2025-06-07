// app/loading.tsx
'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-gray-50/90 backdrop-blur-md z-50 flex items-center justify-center">
      <div className="text-center space-y-8">
        <motion.div
          animate={{
            rotateY: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-500 shadow-lg shadow-amber-100"
        >
          <motion.div 
            className="w-full h-full rounded-full"
            animate={{
              rotateX: 360,
              rotateZ: 45
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>
        
        <div className="space-y-2">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg font-medium text-gray-800"
          >
            Loading Experience
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.4 }}
            className="text-sm text-gray-500 max-w-xs mx-auto"
          >
            Crafting your perfect view
          </motion.p>
        </div>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '60%' }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mx-auto h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full"
        />
      </div>
    </div>
  );
}