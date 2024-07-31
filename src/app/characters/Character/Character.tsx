'use client'
import Button from '@/app/components/Button/Button'
import './Character.scss'
import Image from 'next/image'
import CharDelete from './CharDelete/CharDelete'
import { useRouter } from 'next/navigation'

export default function Character({ ...props }) {
    const { id, name, chronicle } = props;

    const router = useRouter();

    function handleCardClick() {
        // window.location.href = `characters/${id}`
        router.push(`characters/${id}`)
    }


    return (
        <>
            <div className='flex flex-col gap-2'>
                <div onClick={handleCardClick} className="characterCard container flex items-center content-center justify-center min-h-40 max-w-36 flex-col gap-2 border border-slate-300 rounded-lg">
                    <div className='characterPic'>
                        {/* <img
                            alt=""
                            src="placeholder-character.png"
                            className="inline-block h-12 w-12 rounded-lg ring-2 ring-white"
                        /> */}
                        <Image className="inline-block h-12 w-12 rounded-lg ring-2 ring-white" src="/placeholder-character.png" width={48} height={48} alt="User Image" />
                    </div>
                    <div className='characterText flex flex-col items-center'>
                        <div className='characterName'>
                            {name}
                        </div>
                        <div className='characterChronicle'>
                            {chronicle}
                        </div>
                    </div>

                </div>
                <CharDelete id={id} />
            </div>
        </>
    )
}