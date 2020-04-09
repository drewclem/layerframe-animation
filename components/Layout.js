import { motion } from 'framer-motion'
import Logo from '../components/SvgLogo'
import Link from 'next/link'

const Layout = ({children}) => (
  <div>
    <motion.header
      className="absolute z-50 w-full top-0 md:flex justify-between p-4 shadow items-center bg-white"
      animate={{
        y: [-100, 0]
      }}
      transition={{
        ease: 'easeIn',
        duration: .15
      }}
    >
      <a href='/' className="flex items-center">
        <div className='w-6 mr-3'>
          <Logo className="w-full" />
        </div>
        <p className='text-2xl font-bold tracking-tight'>Layerframe</p>
      </a>

      <nav className='mt-2 md:mt-0'>
        <ul className="flex justify-between">
          <li className="text-sm md:text-base opacity-50 p-2 hover:opacity-100 mr-10 border-b-2 border-white hover:border-blue transition duration-100 ease-in-out">
            <Link href="/first-attempt"><a>First Attempt</a></Link>
          </li>

          <li className="text-sm md:text-base opacity-50 p-2 hover:opacity-100 mr-10 border-b-2 border-white hover:border-blue transition duration-100 ease-in-out">
            <Link href="/"><a>Nav Item</a></Link>
          </li>
          
          <li className="text-sm md:text-base opacity-50 p-2 hover:opacity-100 border-b-2 border-white hover:border-blue transition duration-100 ease-in-out">
            <Link href="/"><a>Nav Item</a></Link>
          </li>
        </ul>
      </nav>
    </motion.header>

    <main>
      {children}
    </main>
  </div>
)

export default Layout