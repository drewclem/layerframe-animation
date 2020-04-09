import Head from "next/head";
import { motion } from "framer-motion";

import Scene1 from "../components/Scene1";
import Logo from "../components/SvgLogo";
import LogoWhite from "../components/SvgLogo-white";
import Link from "next/link";

const Home = () => (
  <div className="overflow-hidden h-screen font-display">
    <Head>
      <title>Layerframe animation</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <motion.div
      animate={{
        scale: [1, 0, 30],
        y: [0, 0, 1700],
      }}
      transition={{
        duration: 0.6,
        delay: 1.3,
        type: "spring",
        ease: "easeOut",
      }}
    >
      <Scene1 />
    </motion.div>

    <motion.header
      className="z-50 absolute w-full top-0 md:flex justify-between p-4 shadow items-center bg-white"
      animate={{
        y: [-300, 0]
      }}
      transition={{
        delay: 1,
        ease: 'easeIn'
      }}
    >
      <div className="flex items-center">
        <div className='w-6 mr-3'>
          <Logo className="w-full" />
        </div>
        <p className='text-2xl font-bold tracking-tight'>Layerframe</p>
      </div>

      <nav>
        <ul className="flex justify-between">
          <li className="opacity-50 p-2 hover:opacity-100 mr-10 border-b-2 border-white hover:border-blue transition duration-75 ease-in-out">
            <Link href="/first-attempt"><a>First Attempt</a></Link>
          </li>
          <li className="opacity-50 p-2 hover:opacity-100 mr-10 border-b-2 border-white hover:border-blue transition duration-75 ease-in-out">
            <Link href="/"><a>Nav Item</a></Link>
          </li>
          <li className="opacity-50 p-2 hover:opacity-100 border-b-2 border-white hover:border-blue transition duration-75 ease-in-out">
            <Link href="/"><a>Nav Item</a></Link>
          </li>
        </ul>
      </nav>
    </motion.header>

    <motion.div
      className='absolute top-0 bg-blue w-full h-full'
      animate={{
        opacity: [0,1]
      }}
      transition={{
        delay: 2,
        duration: .5
      }}
    >
      <motion.div
        className='mx-auto mt-48 w-1/2 md:w-1/4 lg:w-1/6 top-0'
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        animate={{
          y: [0, -15]
        }}
        transition={{
          yoyo: Infinity,
          type: 'spring',
          ease: 'easeInOut'
        }}
      >
        <LogoWhite className='w-full'/>
        <p className="text-white text-center mt-4 opacity-75">Drag me!</p>
      </motion.div>  
    </motion.div>
  </div>
);

export default Home;
