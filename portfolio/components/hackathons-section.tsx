import { motion } from "framer-motion"
import { Trophy, GitFork, Users, ArrowUpRight } from "lucide-react"
import { Button } from "./ui/button"

const HACKATHONS = [
  {
    title: "WebKaHackathon",
    position: "2nd Runner-Up",
    organizer: "Block se Block",
    description: "Led backend development for a finance management system, designing an Scalable and Secure backend architecture and seamless functionality to enhance user engagement.",
    stats: "Ranked 2nd runner up in the hackathon"
  },
  {
    title: "GearUp Season Hackathon",
    position: "Participant",
    organizer: "Government of India",
    description: "Engineered Water Wise, a knowledge-sharing app for water conservation, optimizing UI to boost content discovery and engagement by 25%.",
    stats: "ranked in top 40 teams among 400+ teams"
  }
]

const CONTRIBUTIONS = [
  {
    project: "GirlScript Summer of Code",
    role: "Open Source Contributor",
    org: "GirlScript Foundation",
    description: "Contributed to open-source projects, resolving 10+ bugs, implementing 5 features, and collaborating globally to enhance project functionality.",
    achievements: "Ranked in top 100 contributors"
  },
  {
    project: "Hacktoberfest",
    role: "Open Source Contributor",
    org: "DigitalOcean",
    description: "Contributed to open-source projects, resolving 5+ bugs, implementing 5 features.",
    achievements: "Contributed to 3+ projects"
  }
]

export default function HackathonsSection() {
  return (
    <section id="hackathons" className="relative py-20">
      {/* Floating icons background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-10 text-amber-500/10 w-24 h-24">
          <Trophy className="w-full h-full" />
        </div>
        <div className="absolute bottom-1/4 left-10 text-purple-500/10 w-20 h-20">
          <GitFork className="w-full h-full" />
        </div>
        <div className="absolute top-1/3 left-1/4 text-amber-500/10 w-16 h-16 rotate-12">
          <Users className="w-full h-full" />
        </div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Hackathons & Contributions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing my journey through competitive coding challenges and community involvement
          </p>
        </motion.div>

        {/* Hackathons Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {HACKATHONS.map((hackathon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative rounded-lg border border-white/10 p-6 transition-all duration-300 hover:border-white/20">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{hackathon.title}</h3>
                    <p className="text-amber-500">{hackathon.position}</p>
                  </div>
                  <div className="p-2 rounded-lg bg-gradient-to-br from-amber-500/10 to-purple-500/10">
                    <Trophy className="text-amber-400 h-6 w-6" />
                  </div>
                </div>
                <p className="text-gray-400 mb-4">{hackathon.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{hackathon.organizer} • {hackathon.stats}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Open Source Contributions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h3 className="text-2xl font-semibold text-white mb-8">Open Source & Community</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CONTRIBUTIONS.map((contribution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative rounded-lg border border-white/10 p-6 transition-all duration-300 hover:border-white/20">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/10 to-amber-500/10">
                      {index % 2 === 0 ? (
                        <GitFork className="h-5 w-5 text-purple-400" />
                      ) : (
                        <Users className="h-5 w-5 text-amber-400" />
                      )}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-1">{contribution.project}</h4>
                      <p className="text-amber-500 text-sm mb-2">{contribution.role}</p>
                      <p className="text-gray-400 text-sm mb-3">{contribution.description}</p>
                      <p className="text-purple-400/90 text-sm">{contribution.achievements}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 