import React from 'react'
import { motion } from 'framer-motion'

const logoDirection = {
  hidden: {
    y: -350,
  },
  visible: {
    y: 0,
  }
}

const logoBuild = {
  hidden: {
    scale: .2
  },
  visible: {
    scale: .5
  },
};

const HeroLogo = () => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={logoDirection}
    transition={{type: 'spring'}}
  >
    <motion.svg
          width="390"
          height="786"
          viewBox="0 0 390 786"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M2 479.24L53.6353 46.4577L307.282 2L235.718 267.839L387 238.805L269.235 526.419L325.4 553.638L217.6 650.72L156.906 785L175.024 601.725L228.471 569.97L183.176 553.638L196.765 445.67L2 479.24Z"
            fill="#158CFF"
            stroke="#158CFF"
            stroke-width="10"
            variants={logoBuild}
            initial="hidden"
            animate="visible"
            transition={{
              type: 'spring',
            }}
          />
        </motion.svg>
  </motion.div>
)

export default HeroLogo