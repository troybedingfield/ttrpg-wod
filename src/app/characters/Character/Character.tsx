'use client'
import './Character.scss'

export default function Character({ ...props }) {
    const { id, name, chronicle } = props

    function handleCardClick() {
        window.location.href = `characters/${id}`
    }

    return (
        <>
            <div onClick={handleCardClick} className="characterCard container flex items-center content-center justify-center min-h-40 max-w-36 flex-col gap-2 border border-slate-300 rounded-lg">
                <div className='characterPic'>
                    <img
                        alt=""
                        src="placeholder-character.png"
                        className="inline-block h-12 w-12 rounded-lg ring-2 ring-white"
                    />
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
        </>
    )
}