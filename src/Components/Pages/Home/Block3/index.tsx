import Heading from '@/Components/Heading'
import Motion from '@/libs/motion'
import Image from 'next/image'

export default function Block3() {
    type Itemtype = {
        icon: string
        percent: number
        name: string
    }
    const listItems: Array<Itemtype> = [
        {
            icon: '/icon/idea.png',
            percent: 85,
            name: 'Creativity'
        },
        {
            icon: '/icon/tools.png',
            percent: 90,
            name: 'Development'
        },
        {
            icon: '/icon/pie-chart.png',
            percent: 69,
            name: 'Maketing'
        },
        {
            icon: '/icon/success.png',
            percent: 95,
            name: 'Success'
        }
    ]
    return (
        <div
            className="3xl:bg-none xl:bg-[url('/bg/bg-b31.png')] w-full h-fit 2xl:py-[400px] xl:py-[320px] md:py-12"
            style={{ backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
        >
            <div className='2xl:w-[960px] w-11/12 mx-auto'>
                <Motion type='fadeLeft' >
                    <Heading
                        content={` We Are Doing A Little Mile Of This And Of Continued That Support.`}
                        className={'text-center'}
                    />
                </Motion>
                <Motion type='fadeRight' >
                    <p className='text-center text-sub-gray xl:text-[25px] xl:leading-[40px] lg:text-xl text-base xl:py-12 py-6'>
                        Marketing supply chain android angel inves tor leverage scrum project seed round valu proposition
                        long tail disruptive release agile development mass market strategy foune angel investor ecosystem
                        funding.
                    </p>
                </Motion>
            </div>
            <div className='flex xl:flex-nowrap flex-wrap justify-between sm:pt-20 pt-12 container'>
                {listItems.map((e: Itemtype, index: number) => (
                    <div key={index} className='xl-w-1/4 w-1/2 mb-10 relative flex flex-col items-center'>
                        <div className='relative'>
                            <Image src={e.icon} alt='icon' height={65} width={60} />
                            <div
                                className='absolute -z-2 -top-1/2 -left-1/2 translate-[50%] bg-indigo-300/10 w-28 h-28'
                                style={{ borderRadius: '50% 50% 50% 50% / 80% 80% 20% 20% ' }}
                            ></div>
                            <div
                                className='absolute -z-1 -top-1/2 -left-1/2 bg-indigo-300/10 w-28 h-28'
                                style={{ borderRadius: '50% 50% 50% 50% / 20% 20% 80% 80% ' }}
                            ></div>
                        </div>
                        <span className='font-bold lg:text-4xl sm:text-2xl text-xl text-bold-blue xl:pt-10 xl:pb-6 sm:pt-0 pt-6'>
                            {e.percent}%
                        </span>
                        <span className='text-sub-gray text-lg'>{e.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
