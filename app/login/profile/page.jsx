'use client'
import { usePathname } from 'next/navigation';
export default function Profile() {
    const usepath = usePathname();
    console.log(usepath);
    return (
        <div className='bg-gray-200'>profile</div>
    )
}