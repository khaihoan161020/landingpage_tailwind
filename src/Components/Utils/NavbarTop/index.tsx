import Image from 'next/image'
import Link from 'next/link'
import Auth from './Auth'
import Contact from './Contact'
import HamberMobile from './HamberMobile'
import Menu from './Menu'

export default function NavbarTop() {
    return (
        <div className='container 2xl:py-[54px] xl:py-8 sm:py-6 py-2 flex justify-between ticky top-0 mx-auto'>
            <div className='flex items-center'>
                <Link href={''}>
                    <Image src={'/Logo.png'} alt='' width={130} height={26} />
                </Link>
                <Contact />
            </div>
            <div className='lg:flex lg:gap-10 items-center hidden'>
                <Menu />
                <Auth />
            </div>
            <div className='lg:hidden'>
                <HamberMobile />
            </div>
        </div>
    )
}
