import Head from "next/head";
import { motion } from "framer-motion";

import HeroLogo from '../components/HeroLogo'
import Logo from '../components/SvgLogo'
import GHlogo from '../components/GithubLogo'

const Home = () => (
  <div className="container mx-auto">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className='flex mx-auto'>
        <HeroLogo/>

        <div>
          <div className='mb-20 w-1/12'>
            <Logo className='w-full'/>
          </div>

          <h1 className='leading-tight text-xl mb-24'>Thank you for coming to my<br /><span className='text-6xl font-bold text-blue'>Ted Talk.</span></h1>

          <a href='https://github.com/drewclem/layerframe-animation' className='flex text-gray-500'>
            <div className='w-1/12 mr-4'>
              <GHlogo className='w-full'/>
            </div>
            <span className='mt-1'>View the repo</span>
          </a>
        </div>
    </main>

    <footer></footer>
  </div>
);

export default Home;
