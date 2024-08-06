

import { FaBootstrap, FaVuejs } from "react-icons/fa6"
import {  SiInertia, SiLaravel, SiMysql, SiTailwindcss } from "react-icons/si"
import { motion } from "framer-motion"
import { GrReactjs } from "react-icons/gr"

const iconvariant = (duration)=>({
    initial: { y: -10},
    animate: { y:[10,-10],
        transition: {
            duration: duration,
            ease:"linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    },
})

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h1 whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:1}}
            className='my-20 text-center text-4xl'>
                Technologies
            </motion.h1>
            <motion.div whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:0.7}}
            className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div variants={iconvariant(2.5)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <GrReactjs className="text-6xl text-cyan-400" />
                </motion.div>
                <motion.div variants={iconvariant(3)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaVuejs className="text-6xl text-green-400" />
                </motion.div>
                <motion.div variants={iconvariant(3.5)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiLaravel className="text-6xl text-red-600" />
                </motion.div>
                <motion.div variants={iconvariant(4)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiMysql className="text-6xl text-orange-400" />
                </motion.div>
                <motion.div variants={iconvariant(4.5)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiTailwindcss className="text-6xl text-sky-400" />
                </motion.div>
                <motion.div variants={iconvariant(5)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiInertia className="text-6xl text-indigo-200" />
                </motion.div>
                <motion.div variants={iconvariant(6)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaBootstrap className="text-6xl text-violet-800" />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies