import Head from "next/head";
import { motion } from "framer-motion";
import GHlogo from "../components/GithubLogo";
import Logo from '../components/SvgLogo'

import Scene1 from '../components/Scene1'

const Home = () => (
  <div className="overflow-hidden h-screen font-display">
    <Head>
      <title>Layerframe animation</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <motion.div
        animate={{
          y: [-10, 0, 1500]
        }}
        transition={{
          delay: 2,
          duration: .25,
          ease: 'easeOut'
        }}
      >
        <Scene1/>
      </motion.div>

      <motion.div
        className='flex bg-blue absolute w-full h-screen top-0'
        animate={{
          y: [-1500,0]
        }}
        transition={{
          duration: .25,
          delay: 2,
          ease: 'easeIn'
        }}
      >
        <h1 className='mx-auto my-auto text-white font-bold text-6xl'>Thank you for coming to my Ted Talk</h1>
      </motion.div>

      <motion.div
        className="hidden flex w-5/6 my-auto h-screen items-center justify-center mx-auto"
        animate={{
          x: [0, -60, 5, 0],
        }}
        transition={{
          type: "spring",
          duration: 0.25,
          delay: 1.2,
          ease: "easeOut",
        }}
      >
        <motion.div
          className="w-1/12 mr-10"
          animate={{
            y: [-800, 40, -10, 0],
          }}
          transition={{
            delay: 0.5,
            ease: "easeInOut",
            delayChilden: 1,
          }}
        >
          <motion.div
            animate={{
              scaleY: [1, 0.75, 1],
            }}
            transition={{
              delay: 0.35,
            }}
          >
            <Logo className="w-full" />
          </motion.div>
        </motion.div>

        <motion.span
          className="font-bold text-blue"
          style={{ fontSize: 96 }}
          animate={{
            x: [-30, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 0.1,
            delay: 1.35,
          }}
        >
          Layerframe
        </motion.span>
      </motion.div>

      <div>
        <div className="mb-20 w-1/12">
          <Logo className="w-full" />
        </div>

        <h1 className="leading-tight text-xl mb-24">
          Thank you for coming to my
          <br />
          <span className="text-6xl font-bold text-blue">Ted Talk.</span>
        </h1>

        <a
          href="https://github.com/drewclem/layerframe-animation"
          className="flex text-gray-500"
        >
          <div className="w-1/12 mr-4">
            <GHlogo className="w-full" />
          </div>
          <span className="mt-1">View the repo</span>
        </a>
      </div>
    </main>

    <footer></footer>
  </div>
);

export default Home;
