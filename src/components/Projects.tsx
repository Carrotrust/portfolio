import blogsite from "../../images/blogsite.png"
import crypto from "../../images/cryptoPortfolio.png"
import netflix from "../../images/netflix.png"
import chatapp from "../../images/chatapp.png"
import { motion } from "framer-motion"

const PROJECTS = [
  {
    title: "E-Commerce Blog  Website",
    image: blogsite,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and blogs with likes and comments.",
    technologies: ["Typescript", "TailwindCSS", "React"],
    link: "https://github.com/Carrotrust/ecommerce-blog.git",
  },
  {
    title: "Crypto Portfolio app ",
    image: crypto,
    description:
      "A simple and responsive cryptocurrency portfolio tracker, with features such as Real-time price updates which Fetches the latest cryptocurrency prices, portfolio management where a user adds, removes and track crypto holdings ",
    technologies: ["TailwindCSS", "React", "Zustand"],
    link: "https://crypto-portfolio-tracker-gamma.vercel.app/",
  },
  {
    title: "Netflix Replica App",
    image: netflix,
    description:
      "A Netflix-inspired web application.This project replicates the UI/UX of Netflix, featuring a homepage, movie details, and navigation using React Router.",
    technologies: ["React Router", "React", "tailwindcss"],
    link: "https://github.com/Carrotrust/netflix-replica-app.git",
  },

  {
    title: "Chat App",
    image: chatapp,
    description:
      "A real time chat, with features like user authentication(Sign In/Sign up), real time messaging, and chat rooms.",
    technologies: ["Socket.IO", "React", "Express", "MongoDB"],
    link: "https://chat-app-sigma-three-25.vercel.app/",
  },
]

const Projects = () => {
  return (
    <div id="Projects" className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8 }}
        className="my-20 text-white text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap md:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className="w-1/4 lg:1/6"
            >
              <img
                className="object-cover mb-6 rounded"
                width={200}
                height={200}
                src={project.image}
                alt={project.title}
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.8 }}
              className="w-full  max-w-xl lg:w-3/4"
            >
              <h3 className="text-white mb-2 text-2xl md:text-4xl font-semibold">
                {project.title}
              </h3>
              <p className="text-neutral-400 mb-4">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 bg-neutral-900 px-2 py-1 text-xs md:text-sm  font-medium text-cyan-700 rounded"
                >
                  {tech}
                </span>
              ))}
              {/* View Project Button */}
              <div className="mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gray-800 text-purple-500 px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
