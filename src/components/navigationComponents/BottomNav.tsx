import Link from 'next/link'
import React from 'react'

const BottomNav = () => {
  return (
    <div className="flex flex-row justify-center bottom-0 w-full ">
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
      <Link as={'/horizon/Scheduler'} href={'/[company]/Scheduler'}>
        <button className="bg-sky-500 hover:bg-sky-700 px-5 py-3 text-white rounded-lg">Admin Page</button>
      </Link>
    </div>
  )
}

export default BottomNav