import { FaX } from "react-icons/fa6"
import { MdMenu } from "react-icons/md"

type MobileMenuProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, setIsOpen }) => {
  return (
    <div>
      {/* Mobile Menu */}
      <button
        className="md:hidden mr-2 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MdMenu size={25} />
      </button>

      <div
        className={`fixed flex items-center justify-center  top-0   left-0 w-full h-full bg-black p-10 text-white overflow-y-hidden transform transition-transform  ${
          isOpen ? "translate-x-0 z-20" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-10 right-10 text-white"
        >
          <FaX size={24} />
        </button>

        <div className="flex flex-col space-y-4 font-bold bg-gradient-to-r from-pink-300 to-purple-500 bg-clip-text text-transparent text-3xl  ">
          <a
            onClick={() => setIsOpen(false)}
            className="cursor-pointer "
            href="#Home"
          >
            Home
          </a>
          <a
            onClick={() => setIsOpen(false)}
            className="cursor-pointer "
            href="#About"
          >
            About
          </a>
          <a
            onClick={() => setIsOpen(false)}
            className="cursor-pointer "
            href="#Projects"
          >
            Projects
          </a>
          <a
            onClick={() => setIsOpen(false)}
            className="cursor-pointer "
            href="#Contact"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}

// {isOpen ? (
//     <FaX size={20} className="text-white" />
//   ) : (
//     <MdMenu className="text-white" size={20} />
//   )}

export default MobileMenu
