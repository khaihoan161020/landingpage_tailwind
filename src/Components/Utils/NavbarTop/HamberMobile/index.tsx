'use client'

import Link from 'next/link'
import Image from 'next/image'
import Menu from '../Menu'
import Auth from '../Auth'
import { useState } from 'react'

export default function HamberMobile() {
    const [isVisible, setIsVisible] = useState(false)

    const iconHamber = (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-7 h-7'>
            <path
                fillRule='evenodd'
                d='M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z'
                clipRule='evenodd'
            />
        </svg>
    )

    const handleToggleMenu = () => {
        setIsVisible((prev) => !prev)
    }
    return (
        <div>
            <span className='p-1' onClick={() => handleToggleMenu()}>{iconHamber}</span>
            {isVisible && <div className='fixed flex z-10 top-0 left-0 w-full h-full bg-slate-300/20 backdrop-blur-sm '>
                <div id='menu' className='w-9/12 h-full p-4 bg-gradient-blue animate-fadeIn2Right'>
                    <Link href={''} className={'mb-4 block'}>
                        <Image src={'/Logo.png'} alt='' width={130} height={26} />
                    </Link>
                    <Menu direction={'col'} />
                    <div className='my-2'>
                        <Auth />
                    </div>
                </div>
                <div className='w-3/12 h-full' onClick={() => handleToggleMenu()}></div>
            </div>}
        </div>
    )
}
