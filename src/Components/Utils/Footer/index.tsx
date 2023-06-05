import Image from 'next/image'
import Link from 'next/link'


type MenuType = {
    name: string,
    url: string
}
type subMenuType = {
    name: string,
    menu: Array<MenuType>
}
export default function Footer() {
    const iconPhone = (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-4 h-4 text-white'>
            <path
                fillRule='evenodd'
                d='M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z'
                clipRule='evenodd'
            />
        </svg>
    )

    const iconEmail = (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-4 h-4 text-white'>
            <path d='M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z' />
            <path d='M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z' />
        </svg>
    )

    const iconAddress = (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-4 h-4 text-white'>
            <path d='M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z' />
            <path d='M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z' />
        </svg>
    )

    const subMenu: Array<subMenuType> = [
        {
            name: 'Support',
            menu: [
                {
                    name: 'User Dashboard',
                    url: ''
                },
                {
                    name: 'Contact Us',
                    url: ''
                },
                {
                    name: 'FAQ',
                    url: ''
                },
                {
                    name: 'Course Offer',
                    url: ''
                },
                {
                    name: 'Event',
                    url: ''
                }
            ]
        },
        {
            name: 'Services',
            menu: [
                {
                    name: 'Master Mind',
                    url: ''
                },
                {
                    name: 'Junior Lambs',
                    url: ''
                },
                {
                    name: 'Happy Kiddo',
                    url: ''
                },
                {
                    name: 'Master Mind',
                    url: ''
                },
                {
                    name: 'Junior Hoho',
                    url: ''
                }
            ]
        },
        {
            name: 'Link',
            menu: [
                {
                    name: 'About',
                    url: ''
                },
                {
                    name: 'Blog',
                    url: ''
                },
                {
                    name: 'Team',
                    url: ''
                },
                {
                    name: 'Portfolio',
                    url: ''
                },
                {
                    name: 'Sign In',
                    url: ''
                }
            ]
        },
        {
            name: 'Follow Us',
            menu: [
                {
                    name: 'Facebook',
                    url: ''
                },
                {
                    name: 'Twitter',
                    url: ''
                },
                {
                    name: 'Instagram',
                    url: ''
                },
                {
                    name: 'Tripadvisor',
                    url: ''
                },
                {
                    name: 'Youtube',
                    url: ''
                }
            ]
        }
    ]
    return (
        <div className='bg-gradient-blue sm:p-12 py-12 px-3 text-white/80'>
            <div className='container grid grid-cols-7 gap-6'>
                <div className='lg:col-span-3 col-span-7'>
                    <Image src={'/Logo.png'} alt='logo' width={135} height={30} className='' />
                    <p className='py-7 inline-block'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt
                        laboreet dolore magna aliqua enim minim veniam.
                    </p>
                    <div className='flex gap-3'>
                        {iconPhone}
                        <span className='text-inherit'>(+84) 123456789</span>
                    </div>
                    <div className='flex gap-3'>
                        {iconEmail}
                        <span className='text-inherit'>translang@gmail.com</span>
                    </div>
                    <div className='flex gap-3'>
                        {iconAddress}
                        <span className='text-inherit'>01 Central Park, NYC</span>
                    </div>
                </div>
                <div className='lg:col-span-4 col-span-7'>
                    <div className='grid grid-cols-4'>
                        {subMenu.map((e: subMenuType, indexP: number) => <div key={indexP} className="col-span-4 sm:col-span-1">
                            <span className='text-[#f5f5f5] text-center sm:text-left font-bold text-xl block sm:mb-7 sm:mt-0 mt-3 mb-1 '>{e.name}</span>
                            {e.menu.map((sub: MenuType, indexC: number) => <Link href={sub.url} key={indexC} className="block sm:py-2 py-1 text-inherit text-center sm:text-left">
                                {sub.name}
                            </Link>)}
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}
