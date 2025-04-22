"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, ArrowRight, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Navbar from "@/components/navbar"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import CertificationsSection from "@/components/certifications-section"
import ContactSection from "@/components/contact-section"
import LoadingScreen from "@/components/loading-screen"
import AnimatedBackground from "@/components/animated-background"
import GlowingButton from "@/components/glowing-button"
import AnimatedText from "@/components/animated-text"
import FloatingElements from "@/components/floating-elements"
import FloatingSocials from "@/components/FloatingSocials"
import AboutSection from "@/components/about-section"
import HackathonsSection from "@/components/hackathons-section"
import AcademicSection from "@/components/academic-section"
import ResearchSection from "@/components/research-section"
import { Code, Briefcase, Award } from "lucide-react"
import MovingText from "@/components/moving-text"
import SocialIcons from "@/components/social-icons"

const SUGGESTIONS = [
  "Tell me about your experience",
  "What are your technical skills?",
  "What projects have you worked on?",
  "What are your career goals?",
  "Tell me about your education"
]

const RESUME = `Shubham Mishra
Linkedin: linkedin.com/in/shubhxm/ Email: shubhammishra41880@gmail.com
Github: github.com/SHxBHAM Mobile: +91- 7217821735
SKILLS
• Languages: JavaScript, HTML, CSS, TypeScript, Python, C++
• Frameworks: HTML and CSS, Bootstrap, NodeJS, React • Tools/Platforms: MySQL, MongoDB, Github, Vercel • Soft Skills: Problem-Solving Skills, Team Player, Project Management, Adaptability
• Core Competencies: Full-Stack Development, Performance Optimization, Problem-Solving & Logical Reasoning
• PROJECTS
• SoundPrint March 2025
Developed a web application that transforms users' Spotify listening history into a unique waveform and
enables NFT minting on the Internet Computer Protocol (ICP).  Integrated Spotify Web API for real-time data fetching and Internet Identity for secure, passwordless Web3
authentication.  Built a responsive and modular frontend using React, Tailwind CSS, and TypeScript, deployed at soundprint.icp0.io.  Secured 1st place at Block se Block, a Web3 hackathon organized by ICP Hub, among 200+ participants.  Tech Stack: React, TypeScript, Tailwind CSS, Spotify Web API, Internet Identity, ICP
• TBSM Showcase: Jan 2024
Designed and developed a fan website dedicated to Seedhe Maut, featuring their discography, albums, FAQs, and fan insights. The website provides an interactive experience for users to explore the duo's music
and journey.  Showcased albums like Bayaan, Nayaab, Lunch Break, and न with detailed descriptions.  Integrated an FAQ section for fan engagement.  Developed a responsive and visually appealing interface for seamless navigation deployed at - https://terabhaiseedhemaut.netlify.app/.  The website attracted high traction during launch, peaking at over 700 concurrent viewers, shared directly by the duo with their fanbase. • Get-Your-Tixx: May 2024
Built an attendance marking system for events that generates unique QR codes as tickets
for each attendee and sends confirmation emails using Mailgun. Volunteers or admins can verify
attendees through unique profiles.  Implemented QR code-based ticketing to streamline event check-ins.  Integrated Mailgun API to send automated email confirmations.  Designed an admin panel for managing attendees efficiently.  Built and controlled Versions over git on Repository -github.com/SHxBHAM/Get-Your-Tixx  Tech: Node.js, Express.js, MongoDB, QR Code Generation Libraries, Mailgun API
ACHIEVEMENTS/INVOLVEMENTS
• Winner | Block se Block - Web3 Hackathon by ICP Hub
Secured 1
st Place among 200+ participants buliding Soundprint, a Spotify powered NFT generator on the ICP chain
Showcasing Web3 Authentication, realtitme music data integration and block chain based NFT minting. • Core Team Member | Google Developer Student Club (GDSC), LPU
Organized and executed key events like GDSC WoW, overseeing logistics, coordination, and team collaboration. Developed skills in web development, Linux, and SSH through hands-on projects and mentorship from senior members. • Core Team Member | Encrypt Edge
Collaborated with cross-functional teams to design cybersecurity challenges, ensure best practices, and enhance
participant engagement. Played a key role in organizing and executing the 24-hour hackathon "Republic of Cyber Sentinels (RCS)", coordinating logistics, managing event flow, and ensuring smooth operations. EDUCATION
Lovely Professional University Punjab, India
Bachelor of Technology - Computer Science and Engineering; CGPA: 7.5 Since August 2022
Saint Marks Sr. Sec. Public School Delhi
Intermediate; Percentage: 7 9 % April 2021 - March 2022
Saint Marks Sr. Sec. Public School Delhi
Matriculation; Percentage: 82% April 2018 - March 2019
•`

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState<string | null>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (inputValue.trim()) {
      const filtered = SUGGESTIONS.filter(suggestion => 
        suggestion.toLowerCase().includes(inputValue.toLowerCase())
      )
      setSuggestions(filtered)
    } else {
      setSuggestions([])
    }
  }, [inputValue])

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion)
    setSuggestions([])
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    setIsLoading(true)
    setResponse(null)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: inputValue,
          resume: RESUME
        }),
      })

      const data = await response.json()
      setResponse(data.response)
    } catch (error) {
      setResponse("Sorry, I encountered an error. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-black text-white overflow-hidden">
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-radial from-amber-500/10 via-transparent to-transparent opacity-70"></div>
        </div>
        <AnimatedBackground />
        <FloatingElements />
        <FloatingSocials />

        <Navbar scrolled={scrolled} />

        <div className="relative">
          {/* Global background elements */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full filter blur-[100px]" />
            <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-purple-500/10 rounded-full filter blur-[80px]" />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.2, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              className="absolute top-1/3 left-1/4 w-72 h-72 bg-amber-500/5 rounded-full filter blur-[60px]"
            />
          </div>

          {/* Grid pattern overlay */}
          <div className="fixed inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-repeat opacity-5" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex flex-col items-center min-h-screen pt-32"
          >
            {/* Main container for name and moving text */}
            <div className="relative w-full flex flex-col items-center justify-start space-y-12">
              {/* Name container */}
              <div className="relative w-full text-center">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-[5rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] font-bold tracking-tighter leading-none"
                >
                  <span className="text-[#9ca3af]">NANDAN</span>
                  <span className="text-[#9ca3af]">•</span>
                  <span className="text-[#ef4444]">UPADHYAY</span>
                </motion.h1>
              </div>

              {/* Moving text line */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-full overflow-hidden -mt-8"
              >
                <MovingText />
              </motion.div>

              {/* Social Icons */}
              <SocialIcons />

              {/* Description and Chat Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-16 w-full max-w-2xl mx-auto px-4 text-center"
              >
                <AnimatedText
                  text="Full-stack developer crafting exceptional digital experiences with cutting-edge technologies."
                  className="text-lg md:text-xl text-gray-300 mb-8"
                  delay={2.5}
                />

                <div className="relative w-full max-w-xl mx-auto group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/50 to-purple-500/50 rounded-full opacity-30 blur-sm group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                  <div className="relative">
                    <form onSubmit={handleSubmit} className="relative">
                      <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Ask me anything..."
                        className="w-full bg-black/50 border-white/10 backdrop-blur-sm h-14 pl-6 pr-16 rounded-full text-white"
                      />
                      <Button
                        type="submit"
                        size="icon"
                        className="absolute right-1 top-1 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <Loader2 className="h-5 w-5 animate-spin" />
                        ) : (
                          <ArrowRight className="h-5 w-5" />
                        )}
                      </Button>
                    </form>

                    {/* Suggestions dropdown */}
                    {suggestions.length > 0 && (
                      <div className="absolute mt-2 w-full bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden z-50">
                        {suggestions.map((suggestion, index) => (
                          <button
                            key={index}
                            className="w-full px-4 py-2 text-left text-white/80 hover:bg-white/10 transition-colors"
                            onClick={() => handleSuggestionClick(suggestion)}
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Response display */}
                {response && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-6 w-full max-w-2xl mx-auto"
                  >
                    <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                      <p className="text-white/80 whitespace-pre-wrap">{response}</p>
                    </div>
                  </motion.div>
                )}

                {/* Spacer div to enable scrolling */}
                <div className="h-[30vh]"></div>
              </motion.div>
            </div>

            {/* Rest of the content */}
            <main className="relative">
              <AboutSection />
              <SkillsSection />
              <AcademicSection />
              <ProjectsSection />
              <HackathonsSection />
              <ResearchSection />
              <CertificationsSection />
              <ContactSection />
            </main>

            <footer className="relative z-10 border-t border-white/10 py-8 mt-20">
              <div className="container mx-auto px-4 text-center text-white/50 text-sm">
                <p>© {new Date().getFullYear()} Nandan Upadhyay. All rights reserved.</p>
              </div>
            </footer>
          </motion.div>
        </div>
      </div>
    </>
  )
}
