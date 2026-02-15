import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='h-16 bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-700 flex justify-between px-6 items-center text-white shadow-lg'>
      <div className="logo font-bold text-2xl hover:scale-105 transition-transform duration-200">
        <Link href="/" className='flex items-center gap-2'>
          <span className='text-3xl'>🔗</span>
          <span>BitLinks</span>
        </Link>
      </div>
      <ul className='flex justify-center gap-6 items-center'>
        <Link href="/"><li className='hover:text-purple-200 transition-colors duration-200 cursor-pointer'>Home</li></Link>
        <Link href="/about"><li className='hover:text-purple-200 transition-colors duration-200 cursor-pointer'>About</li></Link>
        <Link href="/shorten"><li className='hover:text-purple-200 transition-colors duration-200 cursor-pointer'>Shorten</li></Link>
        <Link href="/contact"><li className='hover:text-purple-200 transition-colors duration-200 cursor-pointer'>Contact Us</li></Link>
        <li className='flex gap-3 ml-2'>
          <Link href="/shorten">
            <button className='bg-white text-purple-700 rounded-lg shadow-lg px-4 py-2 font-bold hover:bg-purple-50 hover:scale-105 transition-all duration-200'>
              Try Now
            </button>
          </Link>
          <Link href="/github">
            <button className='bg-purple-800 rounded-lg shadow-lg px-4 py-2 font-bold hover:bg-purple-900 hover:scale-105 transition-all duration-200'>
              GitHub
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar