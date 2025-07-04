import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from "@iconify/react";

const notfound = () => {
  return (
    <div>
          <div className="min-h-screen bg-[#F3FAFD] flex flex-col justify-center items-center px-4">
      <div className="max-w-xl w-full flex flex-col items-center text-center py-16">
       
        <h1 className="text-[#0B354D] font-archivo font-bold text-6xl md:text-7xl lg:text-[100px] mb-4 animate-bounce">404</h1>
        <h2 className="text-[#F4931C] font-archivo font-bold text-2xl md:text-3xl mb-2">Page Not Found</h2>
        
        <Link href="/" className="inline-flex items-center bg-[#0B354D] hover:bg-[#1a2538] text-white px-6 py-3 rounded-lg font-semibold text-base transition-colors duration-300 shadow-lg">
          <Icon icon="ic:round-home" className="w-6 h-6 mr-2" />
          Go to Homepage
        </Link>
      </div>
    </div>
    </div>
  )
}

export default notfound
