import { motion } from "framer-motion"
import { Trophy, GitFork, Users, ArrowUpRight } from "lucide-react"
import { Button } from "./ui/button"

const HACKATHONS = [
  {
    title: "Block se Block - Web3 Hackathon",
    position: "1st Place Winner",
    organizer: "ICP Hub",
    description: "Built Soundprint, a Spotify-powered NFT generator on the ICP chain. Implemented Web3 Authentication, real-time music data integration, and blockchain-based NFT minting.",
    link: "https://soundprint.icp0.io",
    stats: "200+ participants"
  },
  // Add more hackathons here
]

const CONTRIBUTIONS = [
  {
    project: "GDSC WoW",
    role: "Core Team Member",
    org: "Google Developer Student Club (GDSC), LPU",
    description: "Organized and executed key events, overseeing logistics, coordination, and team collaboration. Developed skills in web development, Linux, and SSH through hands-on projects.",
    achievements: "Successfully managed event logistics and technical workshops"
  },
  {
    project: "Republic of Cyber Sentinels",
    role: "Core Team Member",
    org: "Encrypt Edge",
    description: "Collaborated with cross-functional teams to design cybersecurity challenges and ensure best practices. Played a key role in organizing the 24-hour hackathon.",
    achievements: "Enhanced participant engagement and event operations"
  },
  // Add more contributions here
]

export default function HackathonsSection() {
  return (
    <section className="relative py-20">
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
                  {hackathon.link && (
                    <Button
                      variant="ghost"
                      className="text-amber-500 hover:text-amber-400 -mr-4"
                      onClick={() => window.open(hackathon.link, '_blank')}
                    >
                      View <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
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