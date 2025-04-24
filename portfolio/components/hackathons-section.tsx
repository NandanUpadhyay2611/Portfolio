import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Trophy, Users, GitBranch } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface HackathonProject {
  title: string
  position: string
  description: string
  organization: string
  teamSize?: string
  repoUrl: string
}

export default function HackathonsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const hackathons: HackathonProject[] = [
    {
      title: "WebKaHackathon",
      position: "2nd Runner-Up",
      description: "Led backend development for a finance management system, designing an Scalable and Secure backend architecture and seamless functionality to enhance user engagement.",
      organization: "Block se Block • Ranked 2nd runner up in the hackathon",
      teamSize: "4",
      repoUrl: "https://github.com/dkgamer02ai/finance-mngment" 
    },
    {
      title: "GearUp Season Hackathon",
      position: "Participant",
      description: "Engineered Water Wise, a knowledge-sharing app for water conservation, optimizing UI to boost content discovery and engagement by 25%.",
      organization: "Government of India • ranked in top 40 teams among 400+ teams",
      teamSize: "3",
      repoUrl: "https://github.com/NandanUpadhyay2611/WaterWise" 
    }
  ]

  return (
    <section id="hackathons" ref={ref} className="py-24 md:py-32 border-t border-white/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Hackathons & Contributions</h2>
          <p className="text-gray-400 text-lg text-center mb-16">
            Showcasing my journey through competitive coding challenges and community involvement
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hackathons.map((hackathon, index) => (
              <Link href={hackathon.repoUrl} key={hackathon.title} target="_blank" rel="noopener noreferrer">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500/10 rounded-lg p-3 flex-shrink-0">
                      <Trophy className="w-6 h-6 text-blue-400" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between flex-wrap gap-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {hackathon.title}
                        </h3>
                        <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/20">
                          {hackathon.position}
                        </Badge>
                      </div>

                      {hackathon.teamSize && (
                        <div className="flex items-center mt-2 text-white/70">
                          <Users className="mr-2 h-4 w-4" />
                          <p>Team Size: {hackathon.teamSize}</p>
                        </div>
                      )}

                      <p className="mt-4 text-white/70">{hackathon.description}</p>

                      <div className="flex items-center mt-4 text-white/50">
                        <GitBranch className="mr-2 h-4 w-4" />
                        <p>{hackathon.organization}</p>
                      </div>

                      <div className="mt-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        View Project on GitHub →
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 