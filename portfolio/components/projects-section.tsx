"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [isExpanded, setIsExpanded] = useState(false)

  const featuredProjects = [
    {
      title: "RepoPilot : Developer Collaboration Platform",
      description: "Repo-Pilot is an AI-powered developer collaboration platform designed to simplify repository management, enhance code understanding, and improve teamwork. The platform leverages AI-driven documentation, commit summarization, and intelligent codebase search to streamline the development workflow.",
      image: "/repopilotimg.png?height=600&width=800",
      tags: ["React", "Gemini API", "Node.js", "PostgreSQL","LangChain","TailwindCSS","VectorDB","Clerk"],
      link: "https://repopilot.netlify.app/",
      github: "https://github.com/NandanUpadhyay2611/RepoPilot"
    },
    {
      title: "MultiThreaded Proxy Server With LRU Cache",
      description: "A high-performance multithreaded proxy server designed to handle multiple client requests concurrently. It includes an integrated Least Recently Used (LRU) caching mechanism to store frequently accessed content, significantly improving response times and reducing redundant network traffic",
      image: "/multiserverimg.png?height=600&width=800",
      tags: ["C", "Linux OS", "HTTP protocol"],
      link: "https://github.com/NandanUpadhyay2611/Multithreaded-proxy-server-client",
      github: "https://github.com/NandanUpadhyay2611/Multithreaded-proxy-server-client"
    },
    {
      title: "Ecommerce Backend Rest API",
      description: "A scalable and secure backend REST API for an e-commerce platform, designed to manage products, orders, users, payments, and more. Built with performance and modularity in mind to support seamless shopping experiences and easy integration with frontend clients.",
      image: "/ecommerceimg.jpg?height=600&width=800",
      tags: ["Node.js", "MongoDB", "Express", "JWT"],
      link: "https://github.com/NandanUpadhyay2611/Ecommerce-Backend-",
      github: "https://github.com/NandanUpadhyay2611/Ecommerce-Backend-"
    }
  ]

  const additionalProjects = [
    {
      title: "Portfolio Website",
      description: "Modern and responsive portfolio website built with Next.js and Framer Motion.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "Framer Motion", "TailwindCSS", "TypeScript"],
      link: "#",
      github: "https://github.com/yourusername/portfolio"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather dashboard with interactive maps and forecasting.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "OpenWeather API", "Mapbox", "ChartJS"],
      link: "#",
      github: "https://github.com/yourusername/weather-dashboard"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team features.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "Prisma", "tRPC", "PostgreSQL"],
      link: "#",
      github: "https://github.com/yourusername/task-manager"
    }
  ]

  const allProjects = [...featuredProjects, ...(isExpanded ? additionalProjects : [])]

  return (
    <section id="projects" ref={ref} className="py-24 md:py-32 border-t border-white/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">PROJECTS</h2>
          <p className="text-gray-400 text-lg text-center mb-16">Showcasing my latest work and side projects</p>

          <div className="grid gap-16 md:gap-24">
            {allProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="relative group overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-white/70 mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button 
                      variant="outline" 
                      className="border-white/20 text-white hover:bg-white/10 rounded-full group"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      Live Demo
                      <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-white/20 text-white hover:bg-white/10 rounded-full"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      GitHub
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Projects button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center mt-16"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 rounded-full group"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Show Less' : 'View All Projects'}
              <ChevronDown 
                className={`ml-2 h-5 w-5 transition-transform duration-300 ${
                  isExpanded ? 'rotate-180' : ''
                }`} 
              />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
