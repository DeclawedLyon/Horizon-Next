// import '../../styles/globals.css'

import Head from "next/head"
import Link from "next/link"
import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head >
        <title>Login</title>
      </Head>
      <h1 className="text-xl text-cyan-500 ">
        Welcome! 
      </h1>
      <Link as={'/horizon/declan/Map'} href={'/[company]/[user]/Map'}>
        <button className="bg-sky-500 hover:bg-sky-700 px-5 py-3 text-white rounded-lg">Map</button>
      </Link>
      <Link as={'/horizon/declan/Schedule'} href={'/[company]/[user]/Schedule'}>
        <button className="bg-sky-500 hover:bg-sky-700 px-5 py-3 text-white rounded-lg">Schedule</button>
      </Link>
      <Link as={'/horizon/Company'} href={'/[company]/Company'}>
        <button className="bg-sky-500 hover:bg-sky-700 px-5 py-3 text-white rounded-lg">company</button>
      </Link>
      <Link as={'/horizon/declan/Profile'} href={'/[company]/[user]/Profile'}>
        <button className="bg-sky-500 hover:bg-sky-700 px-5 py-3 text-white rounded-lg">Profile Page</button>
      </Link>
      <Link as={'/horizon/AdministrationPage'} href={'/[company]/AdministrationPage'}>
        <button className="bg-sky-500 hover:bg-sky-700 px-5 py-3 text-white rounded-lg">Admin Page</button>
      </Link>
    </div>
  )
}

export default Home