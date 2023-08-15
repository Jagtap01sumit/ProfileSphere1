'use client'
import { usePathname } from 'next/navigation';
import TopicList from "@/components/TopicList"
export default function Profile() {
    const usepath = usePathname();
    console.log(usepath);
    return (<div >
      
        <TopicList />

    </div>
    )
}