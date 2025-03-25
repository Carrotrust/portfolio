import { useState } from "react"
import MobileMenu from "./MobileMenu"
import { FaCarrot } from "react-icons/fa"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <div className="py-10 flex mb-20 items-center justify-between">
        <div className="flex text-white cursor-pointer font-bold text-2xl">
          <FaCarrot className="text-orange-300" size={30} />
        </div>

        <div className="hidden md:flex items-center justify-center">
          <div className="flex text-xl text-white  space-x-4">
            <a className="cursor-pointer " href="#Home">
              Home
            </a>
            <a className="cursor-pointer " href="#About">
              About
            </a>
            <a className="cursor-pointer " href="#Projects">
              Projects
            </a>
            <a className="cursor-pointer " href="#Contact">
              Contact
            </a>
          </div>
        </div>
        <div className="flex w-fit  md:hidden">
          <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </>
  )
}

export default Navbar
