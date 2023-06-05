import Button from '@/Components/Button'
import Heading from '@/Components/Heading'
import Motion from '@/libs/motion'
import Image from 'next/image'

export default function Block6() {
    type ItemType = {
        content: string
        author: string
        style: string
    }
    const leftCol = [
        {
            content:
                'Funding freemium technology focus equity bootstrapping usernce niche market. Seed round agile development growth hacking retur on investment alpha investor advisor marketing pitch gen scrum.',
            author: 'Dolores Galloway',
            style: 'sm:pt-20 pt-0'
        },
        {
            content:
                'Funding freemium technology focus equity bootstrapping usernce niche market. Seed round agile development growth hacking retur on investment alpha investor advisor marketing pitch gen scrum.',
            author: 'Adam Joiner',
            style: 'sm:pl-10 pl-0'
        }
    ]
    const rightCol = [
        {
            content:
                'Funding freemium technology focus equity bootstrapping usernce niche market. Seed round agile development growth hacking retur on investment alpha investor advisor marketing pitch gen scrum.',
            author: 'Anna Fry',
            style: 'sm:pr-10 pr-0'
        },
        {
            content:
                'Funding freemium technology focus equity bootstrapping usernce niche market. Seed round agile development growth hacking retur on investment alpha investor advisor marketing pitch gen scrum.',
            author: 'Darnell Freeman',
            style: 'sm:pb-10 pb-0'
        }
    ]

    const renderItem = (item: ItemType, index: number) => {
        return (
            <div key={index} className={`${item.style}`}>
                <Motion type='fadeRight' deplay={0.3 + index*0.2} >
                    <div className='lg:py-9 lg:px-12 py-5 px-3 bg-white shadow-md'>
                        <p className='text-sub-gray sm:text-base text-sm leading-[25px]'>{item.content}</p>
                        <div className='flex items-center gap-6 lg:mt-8 mt-4'>
                            <div className='w-12 h-12 bg-sub-gray rounded-full'></div>
                            <span className='font-bold text-bold-blue'>{item.author}</span>
                        </div>
                    </div>
                </Motion>
            </div>
        )
    }
    return (
        <div className='relative xl:my-[180px] my-12'>
            <div className='absolute md:w-[1100px] md:h-[1000px] w-[100%] h-[110%] -z-10 left-0 top-0'>
                <Image
                    src={'/bg/shape-left-4.png'}
                    alt=''
                    fill
                    // className='absolute -z-10 left-0 top-0'
                />
            </div>

            <div className='flex xl:flex-nowrap flex-wrap-reverse justify-between items-center container'>
                <div className='xl:w-4/12 w-full xl:mt-0 mt-12'>
                    <span className='text-slate-200 text-xl'>Testimonials</span>
                    <Motion type='fadeLeft'>
                        <Heading
                            content={`Don't just take our Word for it, see what Others are saying.`}
                            className={`xl:text-slate-200  py-11`}
                        />
                    </Motion>
                    <Button name='SEE MORE' variant='default' className='py-4 px-16 mx-auto' />
                </div>
                <div className='xl:w-8/12 w-full flex lg:space-x-12 sm:space-x-6 xl:pt-28 py-6 sm:flex-row flex-col sm:gap-0 gap-2'>
                    <div className='flex w-full flex-col lg:space-y-12 sm:space-y-6 space-y-2'>
                        {leftCol.map((e: ItemType, index: number) => renderItem(e, index))}
                    </div>
                    <div className='flex w-full flex-col lg:space-y-12 sm:space-y-6 space-y-2'>
                        {rightCol.map((e: ItemType, index: number) => renderItem(e, index))}
                    </div>
                </div>
            </div>
        </div>
    )
}
