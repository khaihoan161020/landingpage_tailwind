import Button from '@/Components/Button'
import Heading from '@/Components/Heading'
import Motion from '@/libs/motion'
import Image from 'next/image'

export default function Block5() {
    return (
        <div className='relative xl:my-[180px] my-12'>
            <div className='container flex xl:flex-nowrap flex-wrap-reverse xl:justify-between justify-center items-center'>
                <div className=''>
                    <Motion type='fadeLeft'>
                        <Heading content='User research & Feedback In One Place.' />
                    </Motion>
                    <Motion type='fadeRight'>
                        <p className='text-sub-gray text-base leading-[28px] xl:py-14 py-6'>
                            Funding freemium technology focus equity bootstrapping usernce niche market. Seed round
                            agile development growth hacking retur on investment alpha. Investor advisor marketing pitch
                            gen scrum project burn rate responsive web design agile development innovator termsheet
                            graphical users interface .
                        </p>
                    </Motion>
                    <Button name='LEARN MORE' variant='default' className='py-4 px-16 mx-auto' />
                </div>
                <div className='lg:min-w-[730px] lg:h-[530px] sm:min-w-[520px] sm:h-[378px] min-w-[430px] h-[310px] relative'>
                    <Image src='/icon/icon-b5.png' alt='icon' fill />
                </div>
            </div>
            <div
                className='absolute -z-10 -top-20 -right-[24%] w-[1250px] h-[800px] bg-blur-blue'
                style={{ borderRadius: '23% 77% 23% 77% / 57% 74% 26% 43% ' }}
            ></div>
        </div>
    )
}
