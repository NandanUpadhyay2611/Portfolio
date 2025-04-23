"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Calendar, Award, ExternalLink, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [isExpanded, setIsExpanded] = useState(false)

  const featuredCertifications = [
    {
      title: "Design and Analysis of Algorithms",
      issuer: "Coursera",
      date: "2024",
      credentialId: "U9JDXLLTZLKF",
      logo: "https://th.bing.com/th/id/OIP.AvjdR1puwX7cxCZnkwccBAHaHa?w=180&h=180&c=7&r=0&o=5&pid=1.7",
      link: "https://www.coursera.org/account/accomplishments/verify/4MUT9FWQ23HX",
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Google",
      date: "2024",
      credentialId: "CZQJNZLDQELQ",
      logo: "https://www.citypng.com/public/uploads/preview/google-logo-icon-gsuite-hd-701751694791470gzbayltphh.png",
      link: "https://coursera.org/verify/CZQJNZLDQELQ",
    },
  ]

  const additionalCertifications = [
    {
      title: "Generative AI Primer",
      issuer: "Coursera",
      date: "2024",
      credentialId: "F2AK49QUPAGZ",
      logo: "https://th.bing.com/th/id/OIP.AvjdR1puwX7cxCZnkwccBAHaHa?w=180&h=180&c=7&r=0&o=5&pid=1.7",
      link: "https://coursera.org/verify/F2AK49QUPAGZ",
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "2024",
      credentialId: "NPTEL24CS118S167020171804431723",
      logo: "https://cdn-1.webcatalog.io/catalog/nptel/nptel-social-preview.png?v=1714777011674",
      link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS118S167020171804431723",
    },
  ]

  const allCertifications = [...featuredCertifications, ...(isExpanded ? additionalCertifications : [])]

  return (
    <section id="certifications" ref={ref} className="py-24 md:py-32 border-t border-white/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">CERTIFICATIONS</h2>
          <p className="text-gray-400 text-lg text-center mb-16">Professional certifications and achievements</p>

          <div className="grid md:grid-cols-2 gap-8">
            {allCertifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 rounded-lg p-3 flex-shrink-0">
                    <img src={cert.logo || "/placeholder.svg"} alt={cert.issuer} className="w-12 h-12" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-bold">{cert.title}</h3>
                      <Badge variant="outline" className="bg-amber-500/10 text-amber-300 border-amber-500/20">
                        <Award className="mr-1 h-3 w-3" /> Verified
                      </Badge>
                    </div>

                    <p className="text-white/70 mt-1">{cert.issuer}</p>

                    <div className="flex items-center mt-4 text-sm text-white/50">
                      <Calendar className="mr-1 h-4 w-4" />
                      <span>Issued {cert.date}</span>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <span className="text-sm text-white/50">Credential ID: {cert.credentialId}</span>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-400 hover:text-amber-300 flex items-center text-sm"
                      >
                        View <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Certificates button */}
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
              {isExpanded ? 'Show Less' : 'View All Certificates'}
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
