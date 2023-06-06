'use client'

import { useState } from "react"
import CountDown from "./CoutDown"
import { getCountTime } from '@/libs'
export default function CountDownTimer () {
    const [isVisible, setIsVisible] = useState(() => {
        return getCountTime() >= 0 
    })
    return (
        <>
            {isVisible && <CountDown setIsVisible={setIsVisible}  />}
        </>
    )
}