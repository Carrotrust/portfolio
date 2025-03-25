import { motion } from "framer-motion"
import me from "../../images/tradme2.png"

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2
        id="About"
        className="my-20 text-center text-3xl text-white lg:text-5xl"
      >
        About <span className="text-neutral-500">Me </span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 md:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              width={300}
              height={300}
              className="rounded-2xl object-cover"
              src={me}
            />
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 "
        >
          <div className="flex items-center justify-center lg:justify-start">
            <p className="text-white font-bold text-xl md:text-3xl my-2 max-x-xl py-6">
              Hi there! I'm a passionate developer with a strong foundation in
              frontend development using React. I'm currently expanding my
              skillset to encompass backend development, and I'm excited about
              the possibilities of building full-stack applications. While I'm
              still honing my backend skills, my frontend expertise allows me to
              create engaging and user-friendly interfaces.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
