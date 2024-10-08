'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function LoadingPage() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer)
          return 100
        }
        const newProgress = oldProgress + 1
        return newProgress
      })
    }, 50)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/cyber-grid.svg')] opacity-10 animate-pulse"></div>
      <motion.h1
        className="text-6xl font-bold mb-8 text-[#ff00ff] animate-glow"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Programing Designed
      </motion.h1>
      <div className="w-64 h-4 bg-gray-700 rounded-full overflow-hidden relative">
        <motion.div
          className="h-full bg-[#ff00ff] absolute left-0 top-0"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="h-full bg-gradient-to-r from-[#ff00ff] to-[#00ffff] absolute left-0 top-0"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
          style={{ filter: 'blur(10px)' }}
        />
      </div>
      <motion.p
        className="mt-4 text-3xl font-bold text-[#ff00ff] animate-glow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {progress}%
      </motion.p>
    </div>
  )
}