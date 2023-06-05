import Block1 from '@/Components/Pages/Home/Block1'
import Block2 from '@/Components/Pages/Home/Block2'
import Block3 from '@/Components/Pages/Home/Block3'
import Block4 from '@/Components/Pages/Home/Block4'
import Block5 from '@/Components/Pages/Home/Block5'
import Block6 from '@/Components/Pages/Home/Block6'
import Block7 from '@/Components/Pages/Home/Block7'
import Image from 'next/image'

export default function Home() {
    return (
        <main className='2xl:mt-24 xl:mt-6 mt-2 overflow-x-hidden'>
			<Block1 />
			<Block2 />
            <Block3 />
            <Block4 />
            <Block5 />
            <Block6 />
            <Block7 />
        </main>
    )
}
