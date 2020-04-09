import { motion } from "framer-motion";
import Logo from "../components/SvgLogo";
import Layout from '../components/Layout'

const FirstAttempt = () => (
  <Layout>
    <motion.div
      className="flex w-5/6 my-auto h-screen items-center justify-center mx-auto"
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
  </Layout>
);

export default FirstAttempt;
