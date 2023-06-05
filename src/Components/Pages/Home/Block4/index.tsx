import Button from '@/Components/Button'
import Heading from '@/Components/Heading'
import Motion from '@/libs/motion'
import Image from 'next/image'

export default function Block4() {
    return (
        <div className='relative xl:my-[180px] my-12'>
            <div className='container flex xl:flex-nowrap flex-wrap xl:justify-between justify-center items-center'>
                <div className='lg:min-w-[730px] lg:h-[600px] sm:min-w-[520px] sm:h-[428px] min-w-[430px] h-[352px] relative'>
                    <Image src='/icon/icon-b4.png' alt='icon' fill />
                </div>
                <div className=''>
                    <Motion type='fadeLeft'>
                        <Heading content={`Everyone Can Be Involved With Visual Direction.`} />
                    </Motion>
                    <Motion type='fadeRight'>
                        <p className='text-sub-gray text-base leading-[28px] xl:py-14 py-6'>
                            Funding freemium technology focus equity bootstrapping usernce niche market. Seed round
                            agile development growth hacking retur on investment alpha. Investor advisor marketing pitch
                            gen scrum project burn rate responsive web design agile development innovator termsheet
                            graphical users interface.
                        </p>
                    </Motion>
                    <Button name='LEARN MORE' variant='default' className='py-4 px-16 mx-auto' />
                </div>
            </div>
            <div
                className='absolute -z-10 -top-20 -left-20 w-[820px] h-[700px] bg-blur-blue'
                style={{ borderRadius: '30% 70% 40% 65% / 80% 74% 26% 20% ' }}
            ></div>
        </div>
    )
}
