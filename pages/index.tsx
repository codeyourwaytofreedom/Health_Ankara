import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
import Home_p from '../components/home';
export default function Home() {
  return (
    <>
        <Home_p/>
    </>
  )
}
