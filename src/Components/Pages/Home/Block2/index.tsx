/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Heading from '@/Components/Heading'
import Motion from '@/libs/motion'
import Image from 'next/image'

export default function Block2() {
    type Itemtype = {
        icon: string
        title: string
        content: string
    }
    const listItems: Array<Itemtype> = [
        {
            icon: '/icon/analytics.png',
            title: 'Extended Documentation & Video Tutorials.',
            content: `User centered design moleskin ideate quantitative vs qualitative driven idea big data hacker programming diam nummy ni euismod tincidunt.`
        },
        {
            icon: '/icon/cinema-projector.png',
            title: 'Full Range Of Design And Motion Services.',
            content: `User centered design moleskin ideate quantitative vs qualitative driven idea big data hacker programming diam nummy ni euismod tincidunt.`
        },
        {
            icon: '/icon/tactical.png',
            title: 'Detaliled Case Studies For Perfect Results.',
            content: `User centered design moleskin ideate quantitative vs qualitative driven idea big data hacker programming diam nummy ni euismod tincidunt.`
        }
    ]
    return (
        <div className='container 2xl:mt-[170px] xl:mt-[220px] lg:mt-[100px] md:mt-16 mt-14 md:py-12 '>
            <div className='flex flex-col items-center '>
                <span className='w-12 h-1 bg-gradient-orange-red rounded-full'></span>
                <Heading
                    content={`The thing motiviates us is a very common form of motivation and 
                        that is with other folk counting on me, it's easy to be motivated`}
                    className='text-center py-6 lg:w-[850px]'
                />
            </div>
            <div className='flex xl:flex-nowrap flex-wrap 2xl:gap-[50px] 2xl:py-[100px] xl:gap-6 xl:py-12 sm:gap-4 gap-2 p-2 xl:px-14 pb-8'>
                {listItems.map((e: Itemtype, index: number) => (
                    <div
                        key={index}
                        className={`xl:px-12 xl:py-16 p-8 xl:w-[calc(100%/3)] xl:block flex sm:gap-8 gap-2 w-full bg-[url('/bg/bg-grid.png')] transition-all group relative overflow-hidden
                                    shadow-[0_10px_40px_-20px_rgba(0,0,0,0.1)] shadow-[#6a24aa]/50 sm:flex-row flex-col
                                    hover:shadow-none hover:bg-gradient-blue hover:scale-[1.02]
                        `}
                    >
                        <div className='lg:min-w-[90px] lg:max-w-[90px] lg:h-[90px] sm:max-w-[60px] sm:min-w-[60px] sm:h-[60px] max-w-[50px] h-[50px] relative'>
                            <Image
                                src={e.icon}
                                className={`${index === 0 && 'invert'} group-hover:brightness-0`}
                                alt='icon'
                                fill
                            />
                        </div>
                        <div>
                            <img
                                src='/bg/bg-radial-white.png'
                                className='origin-top-right group-hover:top-0 group-hover:right-0 ransition duration-300 ease-in-out delay-50  absolute -top-full -right-full'
                            />
                            <h3 className='group-hover:text-white xl:text-xl xl:leading-[32px] md:text-lg sm:text-[15px] text-bold-blue font-medium xl:my-12 sm:mb-4 mb-2'>
                                {e.title}
                            </h3>
                            <p className='group-hover:text-white lg:text-base lg:leading-[28px] text-sm text-sub-gray'>
                                {e.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
