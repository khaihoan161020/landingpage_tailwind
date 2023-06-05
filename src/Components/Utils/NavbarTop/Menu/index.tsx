import Link from "next/link"

interface MenuProps {
    direction?: 'row' | 'col'
}
type Itemtype = {
    name: string,
    link: string
}
export default function Menu ({direction = 'row'}: MenuProps) {
    const listMenu = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Services',
            link: '/service'
        },
        {
            name: 'Testimotionial',
            link: '/'
        },
        {
            name: 'Home',
            link: '/Contact'
        },
    ]
    return (
        <div className={`flex flex-${direction} justify-between gap-1`}>
            {listMenu.map((item: Itemtype, index: number) => <Link href={item.link} key={index} className='py-1 2xl:px-5 xl:px-3 px-2 text-white'>
                {item.name}
            </Link>)}
        </div>
    )
}