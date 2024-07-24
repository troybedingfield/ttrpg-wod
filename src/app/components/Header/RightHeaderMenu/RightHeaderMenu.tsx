'use client'
import { logout } from "@/app/logout/actions";
import Button from "../../Button/Button";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import DropDownMenu from "../../DropDownMenu/DropDownMenu";

export default function RightHeaderMenu({ ...props }) {
    const { data, profile, settings, error } = props;
    const router = useRouter()

    const [avatarImage, setAvatarImage] = useState('/placeholder-character.png')


    function handleDropMenuclick(data: any) {


        if (data === 'Dashboard') {
            window.location.href = '/dashboard'
        }
        if (data === 'Settings') {
            window.location.href = '/settings'
        }
        if (data === 'Logout') {
            logout();
        }
    }



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
                    <Button minWidth="70" buttonClick={() => router.push('/login')}>Login</Button>
                </div>}
            {data.user &&
                <div className="flex items-center w-full justify-end gap-2">
                    {/* <a href="/dashboard">dashboard</a>
                    <Button minWidth="70" buttonClick={() => logout()}>Logout</Button>
                    <img
                        alt=""
                        src="placeholder-character.png"
                        className="inline-block h-12 w-12 rounded-lg ring-2 ring-white"
                    /> */}
                    <DropDownMenu dropdownItems={['Dashboard', 'Settings', 'Logout']} menuClick={handleDropMenuclick}>
                        <div className="flex gap-2 items-center">
                            <img
                                alt=""
                                src={avatarImage}
                                className="inline-block h-12 w-12 rounded-lg ring-2 ring-white"
                            />
                            {profile && profile.map((profile: any, index: any) => {
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