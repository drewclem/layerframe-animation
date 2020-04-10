import { motion } from 'framer-motion'
import Logo from '../components/SvgLogo'
import Head from 'next/head'

import Nav from '../components/Nav'

const Layout = ({children}) => (
  <div>
    <Head>
      <title>Layerframe animation</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <motion.header
      className="absolute z-50 w-full top-0 md:flex justify-between p-4 shadow items-center bg-white"
      animate={{
        y: [-100, 0]
      }}
      transition={{
        ease: 'easeIn',
        duration: .3,
        delay: 1.2
      }}
    >
      <a href='/' className="flex items-center">
        <div className='w-6 mr-3'>
          <Logo className="w-full" />
        </div>
        <p className='text-2xl font-bold tracking-tight'>Layerframe</p>
      </a>

      <Nav />
      
    </motion.header>

    <main>
      {children}
    </main>
  </div>
)

export default Layout