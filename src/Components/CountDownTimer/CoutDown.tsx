'use client'
import Lottie from 'react-lottie'
import * as animationData from '@/Contants/timeLoading.json'
import { useEffect, useState } from 'react'
import { getCountTime } from '@/libs'

interface CountDownProps {
    setIsVisible: any
}

export default function CountDown({setIsVisible}:CountDownProps) {
    const TIME_LIMIT = 300 // 5 minutes = 300s

    const [time, setTime] = useState(() => {
        const countTime = getCountTime()
        if (countTime > 0) return countTime
        return TIME_LIMIT
        // if (countTime) 
        //     setTime(countTime)
    })

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    const formatTime = (second: number) => {
        const minutes = Math.floor(second / 60)
        const remainSecond = second % 60
        return minutes + ':' + remainSecond + 's'
    }

    const onUnload = (e: any) => {
        e.preventDefault()
        window.localStorage.setItem('countTime', time.toString())
    }

    useEffect(() => {
        const timeID = setInterval(() => {
            if (time > 0) {
                setTime((prev) => prev - 1)
            } else {
                clearInterval(timeID)
                window.localStorage.setItem('countTime','-1')
                setIsVisible(false)
            }
        }, 1000)
        window.addEventListener("beforeunload", onUnload);
        return () => {
            clearInterval(timeID)
            window.removeEventListener("beforeunload", onUnload);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [time])

    return (
        <div className='fixed top-0 left-0 z-10 w-full h-full bg-white/40 backdrop-blur-sm'>
            <div className='relative h-full'>
                <div
                    className='sticky flex justify-center'
                    style={{
                        top: '50%',
                        transform: 'translate(0%, -50%)'
                    }}
                >
                    <div className='shadow-xl p-6 md:w-[400px] w-[300px] bg-white rounded-xl'>
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <Lottie options={defaultOptions} height={120} width={120} isStopped={false} isPaused={false} />
                            <p>Please waiting for {formatTime(time)}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

//
