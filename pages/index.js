import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>First NextJS</title>
        <meta name="keywords" content="web development, programming"/>
      </Head>
      <h1>Welcome to Next</h1>
    </div>
  )
}
