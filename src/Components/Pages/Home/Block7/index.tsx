import Heading from '@/Components/Heading'
import Motion from '@/libs/motion'
import Image from 'next/image'

export default function Block7() {
    const iconUser = (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-4 h-4 text-sub-gray'
        >
            <path
                fillRule='evenodd'
                d='M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z'
                clipRule='evenodd'
            />
        </svg>
    )
    const iconComment = (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-4 h-4 text-sub-gray'
        >
            <path
                fillRule='evenodd'
                d='M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 00-.266.112L8.78 21.53A.75.75 0 017.5 21v-3.955a48.842 48.842 0 01-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z'
                clipRule='evenodd'
            />
        </svg>
    )
    const iconLike = (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-4 h-4 text-sub-gray'
        >
            <path d='M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z' />
        </svg>
    )

    type Itemtype = {
        title: string
        description: string
        url: string
        comment: number
        like: number
        author: string
    }

    const listItems: Array<Itemtype> = [
        {
            title: 'Uncovers Ancient Ashkenaz',
            description: `Funding freemium technology focus
                equity bootstrapping usernce niche
                market. Seed round agile growth
                hacking retur on alpha...`,
            url: 'https://example.com/eR2r87',
            comment: 1,
            like: 9,
            author: 'Jhon Smith '
        },
        {
            title: 'Uncovers Ancient Ashkenaz',
            description: `Funding freemium technology focus
                equity bootstrapping usernce niche
                market. Seed round agile growth
                hacking retur on alpha...`,
            url: 'https://example.com/eR2r87',
            comment: 12,
            like: 2,
            author: 'Jhon Smith '
        },
        {
            title: 'Uncovers Ancient Ashkenaz',
            description: `Funding freemium technology focus
                equity bootstrapping usernce niche
                market. Seed round agile growth
                hacking retur on alpha...`,
            url: 'https://example.com/eR2r87',
            comment: 8,
            like: 91,
            author: 'Jhon Smith '
        },
        {
            title: 'Uncovers Ancient Ashkenaz',
            description: `Funding freemium technology focus
                equity bootstrapping usernce niche
                market. Seed round agile growth
                hacking retur on alpha...`,
            url: 'https://example.com/eR2r87',
            comment: 6,
            like: 2,
            author: 'Jhon Smith '
        },
        {
            title: 'Uncovers Ancient Ashkenaz',
            description: `Funding freemium technology focus
                equity bootstrapping usernce niche
                market. Seed round agile growth
                hacking retur on alpha...`,
            url: 'https://example.com/eR2r87',
            comment: 5,
            like: 12,
            author: 'Jhon Smith '
        },
        {
            title: 'Uncovers Ancient Ashkenaz',
            description: `Funding freemium technology focus
                equity bootstrapping usernce niche
                market. Seed round agile growth
                hacking retur on alpha...`,
            url: 'https://example.com/eR2r87',
            comment: 15,
            like: 2,
            author: 'Jhon Smith '
        }
    ]

    return (
        <div className='my-[180px] container'>
            <Motion type='fadeLeft'>
                <Heading content={`Read Our Latest Blog Post`} className={`text-center`} />
            </Motion>
            <Motion type='fadeRight'>
                <p className='text-sub-gray sm:text-lg leading-[32px] lg:py-7 py-4 text-center lg:w-[920px] mx-auto text-sm'>
                    Funding freemium technology focus equity bootstrapping usernce niche market. Seed round agile growth
                    hacking retur investment alpha investor advisor marketing pitch.
                </p>
            </Motion>

            <div className='flex flex-wrap justify-between lg:gap-y-9 gap-y-3 py-10'>
                {listItems.map((e: Itemtype, index: number) => (
                    <div
                        key={index}
                        className='2xl:w-[calc(100%/3-19px)] lg:w-[calc(100%/2-19px)] w-full shadow-md relative group overflow-hidden'
                    >
                        <Motion type='fadeIn'>
                            <div className=''>
                                {/* ImageFake */}
                                <div className='bg-slate-300 h-[240px] w-full'></div>
                                <div className='sm:p-8 p-3'>
                                    <h3 className='text-lg text-bold-blue'>{e.title}</h3>
                                    <div className='flex gap-4 mt-3'>
                                        <div className='flex items-center gap-2'>
                                            {iconUser}
                                            <span className='text-sub-gray sm:text-sm text-xs'>{e.author}</span>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            {iconComment}
                                            <span className='text-sub-gray sm:text-sm text-xs'>
                                                {e.comment} Comments
                                            </span>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            {iconLike}
                                            <span className='text-sub-gray sm:text-sm text-xs'>{e.like} Likes</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='absolute z-0 top-[400px] h-full left-0 bg-gradient-blue group-hover:top-0 transition-all p-8 cursor-pointer'>
                                    <Image src='/icon/twitter.png' alt='icon' width={42} height={42} />
                                    <p className='text-white py-8'>{e.description}</p>
                                    {/* Fake link */}
                                    <span className='font-bold text-white'>{e.url}</span>
                                </div>
                            </div>
                        </Motion>
                    </div>
                ))}
            </div>
        </div>
    )
}
