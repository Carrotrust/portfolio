import { motion } from "framer-motion"

const Hero = () => {
  const container = (delay: number) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, delay: delay } },
  })

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="flex flex-col items-center">
            <motion.h1
              id="Home"
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-10 text-2xl lg:text-5xl font-bold lg:mt-16  text-white"
            >
              Olamide Adegbite
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-white via-purple-500 to-gray-500 bg-clip-text text-transparent font-bold  text-3xl md:text-6xl"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 text-white text-xl md:text-3xl md:text-2xl max-w-4xl  py-6  font-medium"
            >
              Building engaging web experiences, one line of code at a time.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
