import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <title>Welcome to my portfolio!</title>
    

    <nav>
      <ul>
        <Link href='#'>About Me</Link>
        <Link href='#'>Projects</Link>
        <Link href='#'>Contact</Link>
      </ul>
    </nav>

      <h1>Hello! My name is Kay Truong</h1>
        <h2>I&apos;m a Front-End Web Developer</h2>

    </>
  )
}
