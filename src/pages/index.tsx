// import '../../styles/globals.css'

import Head from "next/head"
import Link from "next/link"
import { NextPage } from 'next'
import BottomNav from "../components/navigationComponents/BottomNav"

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Head >
        <title>Login</title>
      </Head>
      <h1 className="text-xl text-cyan-500 ">
        Welcome! 
      </h1>
      <BottomNav />
    </div>
  )
}

export default Home