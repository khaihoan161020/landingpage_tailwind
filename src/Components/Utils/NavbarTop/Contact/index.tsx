import Image from "next/image";

export default function Contact () {
    return (
        <div className="flex items-center ml-14 gap-3">
            <Image src={'/icon/phone.png'} alt="phone"  width={24} height={10}/>
            <span className="text-bold-blue text-sm">+0123456789</span>
        </div>
    )
}