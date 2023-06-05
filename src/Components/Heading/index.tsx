
interface HeadingProp {
    content: string,
    className?: string
}
export default function Heading ({content, className}: HeadingProp) {
    return (
        <h3 className={`font-medium text-bold-blue 2xl:text-[40px] 2xl:leading-[50px] lg:text-3xl text-xl break-words ${className ?? className}`}>
            {content}
        </h3>
    )
}