import { FaGithub } from "react-icons/fa"
import { FaUpwork, FaXTwitter } from "react-icons/fa6"

const Contact = () => {
  return (
    <div id="Contact" className="border-b border-neutral-900 pb-10">
      <h1 className="my-10 text-white text-4xl text-center">Get in Touch</h1>
      <div className="text-center space-y-4">
        {/* Email */}
        <a className="text-white text-lg underline hover:text-cyan-400 transition">
          olamidelamzee@gmail.com
        </a>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-4">
          {/* GitHub */}
          <a
            href="https://github.com/Carrotrust"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.upwork.com/freelancers/~0148d40fda77f4a020?companyReference=1542108383339139073&mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-cyan-400 transition"
          >
            <FaUpwork />
          </a>

          {/* Twitter/X */}
          <a
            href="https://twitter.com/badboybabanla"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-cyan-400 transition"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
      {/* Copyright Section */}
      <div className="text-center text-neutral-500 mt-10 text-sm">
        © {new Date().getFullYear()} The Carrot. All rights reserved.
      </div>
    </div>
  )
}

export default Contact
