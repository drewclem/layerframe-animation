import React from 'react'
import { motion } from "framer-motion";

import Logo from "../components/SvgLogo";

const Scene1 = () => (
  <div
        className="flex my-auto h-screen w-screen mx-auto"
      >
        <motion.div
          className="mx-auto my-auto"
          animate={{
            y: [-500, 120, -80],
          }}
          transition={{
            type: "spring",
            ease: "easeIn",
            times: [0, 0.4, 0.6],
          }}
        >
          <motion.div
            className="bg-blue w-10 h-10 rounded-full"
            animate={{
              scaleY: [1, 0.5, 1, 1.5],
              opacity: [1, 0],
            }}
            transition={{
              delay: 0.2,
              duration: 0.35,
            }}
          />

          <motion.div
            className="relative mt-3"
            animate={{
              opacity: [0, 1],
              y: [0, -60, 0],
              scale: [1, 4, 3],
            }}
            transition={{
              delay: 0.15,
              ease: "easeInOut",
            }}
          >
            <Logo className="w-full fill-current" />
          </motion.div>
        </motion.div>
      </div>
)

export default Scene1