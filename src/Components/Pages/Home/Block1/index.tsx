/* eslint-disable @next/next/no-img-element */
import Button from '@/Components/Button'
import Image from 'next/image'

export default function Block1() {
    return (
        <div className='2xl:pt-[160px] xl:pt-[110px] lg:pt-[80px] pt-12 container overflow-hidden'>
            <div className='2xl:w-[970px] 2xl:h-[900px] xl:w-[880px] xl:h-[720px] lg:w-[808px] lg:h-[500px] w-[930px] h-[500px]'    style={{
                    position: 'absolute',
                    zIndex: -1,
                    top: 0,
                    right: 0,
                }}>
                <Image src='/bg/bg-top-right.png' alt="bg" fill />
            </div>
            <div className='xl:w-[480px] sm:w-[420px] xl:ml-0 ml-auto'>
                <h2 className='2xl:text-[50px] 2xl:leading-[65px] xl:text-4xl text-3xl lg:text-bold-blue text-white lg:text-left text-right'>Investment To The Future Business Technology</h2>
                <p className='2xl:text-[17px] text-sm lg:text-left text-right lg:text-sub-gray my-10 text-white/80'>Virality crowdsource monetization social proof client IPad focus supply chain direct</p>
                <Button name="GET STARTED" variant='default' className='py-4 px-16 lg:ml-0 ml-auto' />
            </div>
        </div>
    )
}
