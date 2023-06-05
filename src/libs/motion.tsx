'use client'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface MotionProps {
    children: JSX.Element,
    type: 'fadeRight' | 'fadeLeft' | 'fadeTop' | 'fadeDown' | 'fadeIn',
    deplay?: number
}
const Motion = ({ children, type, deplay = 0.3 }: MotionProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false })
    const mainControl = useAnimation()

    const switchVariants = (type: string) => {
        switch (type) {
            case 'fadeTop':
                return {
                    hidden: { opacity: 0, y: -75 },
                    visible: { opacity: 1, x: 0 }
                }
            case 'fadeDown':
                return {
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }
            case 'fadeRight':
                return {
                    hidden: { opacity: 0, x: 75 },
                    visible: { opacity: 1, x: 0 }
                }
            case 'fadeLeft':
                return {
                    hidden: { opacity: 0, x: -75 },
                    visible: { opacity: 1, x: 0 }
                }
            default:
                return {
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 }
                }
        }
    }
    useEffect(() => {
        if (isInView) {
            mainControl.start('visible')
        } else mainControl.start('hidden')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView])
    return (
        <div ref={ref}>
            <motion.div
                variants={switchVariants(type)}
                initial='hidden'
                animate={mainControl}
                transition={{ duration: 0.5, delay: deplay }}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default Motion
