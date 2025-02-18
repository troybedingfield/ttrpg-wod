'use client'
import { logout } from "@/app/logout/actions";
import Button from "../../Button/Button";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, useContext } from "react";
import DropDownMenu from "../../DropDownMenu/DropDownMenu";
import { UsernameContext } from "@/app/context/username";
import Image from 'next/image'
import Link from "next/link";


export default function RightHeaderMenu({ ...props }) {
    const { data, profile, settings, error } = props;
    const router = useRouter()

    const [avatarImage, setAvatarImage] = useState('/placeholder-character.png')

    function handleDropMenuclick(data: any) {


        if (data === 'Dashboard') {
            // window.location.href = '/dashboard'
            router.push('/dashboard');
        }
        if (data === 'Characters') {
            // window.location.href = '/dashboard'
            router.push('/characters');
        }
        if (data === 'Settings') {
            // window.location.href = '/settings'
            router.push('/settings');
        }
        if (data === 'Logout') {
            logout();
        }
    }

    // const usernameCtx = useContext(UsernameContext)

    // const profileData = usernameCtx

    const { profileData, setProfileData } = useContext<any>(UsernameContext)



    useEffect(() => {
        return setProfileData(profile)
    }, [profile, setProfileData]);




    // useEffect(() => {
    //     if (!settings[0].darkMode) {
    //         // document.documentElement.setAttribute('data-mode', '')
    //         // console.log(settings[0].darkMode)
    //         localStorage.setItem('color-theme', 'light');
    //     }
    //     if (settings[0].darkMode) {
    //         // document.documentElement.setAttribute('data-mode', 'dark')
    //         // console.log(settings[0].darkMode)
    //         localStorage.setItem('color-theme', 'dark');
    //     }
    // }, []);

    // useEffect(() => {
    //     // if set via local storage previously
    //     if (localStorage.getItem('color-theme')) {
    //         if (localStorage.getItem('color-theme') === 'light') {
    //             document.documentElement.setAttribute('data-mode', '')
    //             localStorage.setItem('color-theme', '');
    //         } else {
    //             document.documentElement.setAttribute('data-mode', 'dark')
    //             localStorage.setItem('color-theme', 'dark');
    //         }

    //         // if NOT set via local storage previously
    //     } else {
    //         if (document.documentElement.classList.contains('dark')) {
    //             document.documentElement.setAttribute('data-mode', '')
    //             localStorage.setItem('color-theme', 'light');
    //         } else {
    //             document.documentElement.setAttribute('data-mode', 'dark')
    //             localStorage.setItem('color-theme', 'dark');
    //         }
    //     }
    // }, []);



    return (
        <div className="flex w-full gap-2">

            {!data.user &&
                <div className="flex items-center w-full justify-end">
                    <Link className="pr-2 hover:underline cursor-pointer" href='/diceroller'>Dice Roller</Link>
                    <Button minWidth="70" buttonClick={() => router.push('/login')}>Login</Button>
                </div>}
            {data.user &&
                <div className="flex items-center w-full justify-end gap-2">
                    <Link className="pr-2 hover:underline cursor-pointer" href='/diceroller'>Dice Roller</Link>
                    {/* <a href="/dashboard">dashboard</a>
                    <Button minWidth="70" buttonClick={() => logout()}>Logout</Button>
                    <img
                        alt=""
                        src="placeholder-character.png"
                        className="inline-block h-12 w-12 rounded-lg ring-2 ring-white"
                    /> */}
                    <DropDownMenu dropdownItems={['Dashboard', 'Characters', 'Settings', 'Logout']} menuClick={handleDropMenuclick}>
                        <div className="flex gap-2 items-center">
                            {/* <img
                                alt=""
                                src={avatarImage}
                                className="inline-block h-12 w-12 rounded-lg ring-2 ring-white"
                            /> */}
                            <Image className="inline-block h-12 w-12 rounded-lg ring-2 ring-white" src="/placeholder-character.png" width={48} height={48} alt="User Image" />
                            {/* {profile && profileData.map((profile: any, index: any) => {
                                return (
                                    <div key={index}>{profile.username}</div>
                                )
                            })} */}
                            {/* <div>{profileData.username}</div> */}
                            {Array.isArray(profileData) && profileData.map((profile: any, index: any) => {
                                return (
                                    <div key={index}>{profile.username}</div>
                                )
                            })}
                        </div>
                    </DropDownMenu>
                </div>
            }

        </div>
    )
}