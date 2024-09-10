'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Cpu, Zap, Rocket,  Github, LucideProps } from "lucide-react"
import Link from "next/link"
import React, { ReactNode } from 'react';


// Define the props for FeatureCard
interface FeatureCardProps {
  icon: React.FC<LucideProps>; // LucideProps from lucide-react to type the icons
  title: string;
  description: string;
}

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({ children, className = "" }) => (
  <span className={`bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400 ${className}`}>
    {children}
  </span>
);

// FeatureCard component
const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="p-6 border border-gray-800 rounded-lg hover:bg-gray-900 transition-colors duration-300"
  >
    <Icon className="w-12 h-12 mb-4 text-blue-400" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

const redirectToEmail = () => {
  window.location.href = "mailto:kye@apac.ai";
}

export function ApacLandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            <GradientText>APAC</GradientText>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="#about" className="hover:text-blue-400 transition-colors">About</Link>
            <Link href="#investments" className="hover:text-blue-400 transition-colors">Investments</Link>
            <Link href="#contact" className="hover:text-blue-400 transition-colors">Contact</Link>
          </nav>
          <Button variant="outline" onClick={redirectToEmail} className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black">
            Connect
          </Button>
        </div>
      </header>

      <main>
        <section className="min-h-screen flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Advancing <GradientText>Humanity</GradientText>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl mb-12 text-gray-300"
            >
              APAC invests in AI, Deep Tech, and Energy startups advancing Humanity.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >

              <Button variant="outline" onClick={redirectToEmail} className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black">
                Pitch Us Now
              </Button>
            </motion.div>
          </div>
        </section>

        <section id="about" className="py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
              Empowering <GradientText>Visionary</GradientText> Startups
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={Cpu}
                title="Artificial Intelligence"
                description="Investing in AI technologies that are revolutionizing industries and shaping the future of work."
              />
              <FeatureCard
                icon={Rocket}
                title="Deep Tech"
                description="Supporting groundbreaking innovations in quantum computing, biotechnology, and advanced materials."
              />
              <FeatureCard
                icon={Zap}
                title="Energy"
                description="Fueling the transition to sustainable energy solutions and smart grid technologies."
              />
            </div>
          </div>
        </section>

        <section id="investments" className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
              Our <GradientText>Impact</GradientText>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                // { value: "$100M+", label: "Invested" },
                // { value: "10+", label: "Startups Funded" },
                { value: "10+", label: "Startups Funded" },
                { value: "3", label: "Focus Industries" },
                { value: "10+", label: "Years of Innovation" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="p-6 border border-gray-800 rounded-lg"
                >
                  <GradientText className="text-4xl md:text-5xl font-bold mb-2">
                    {stat.value}
                  </GradientText>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
              Pitch Us <GradientText>Now</GradientText>
            </h2>
            <div className="flex flex-col space-y-6">
            <Button variant="outline" onClick={redirectToEmail} className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black">
                Pitch Us Now
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800 py-12 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <GradientText className="text-2xl font-bold mb-2">APAC</GradientText>
            <p className="text-gray-400">Investing in Humanitys Future</p>
          </div>
          <nav className="flex space-x-6">
            <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</Link>
            <a href="https://github.com/kyegomez" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Github className="h-6 w-6" />
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}