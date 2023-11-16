import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbars from '@/components/Navbars/indexPageNavbars'
import Hero from '@/components/Hero/indexPageHero'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className={`${styles.containerDisplay} container-fluid`}>
        {/* <h1>Index Home Loh</h1> */}
        <Navbars />
        <Hero />
      </div>
    </>
  )
}
