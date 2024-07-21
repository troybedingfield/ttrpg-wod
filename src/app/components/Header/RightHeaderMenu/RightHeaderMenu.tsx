'use client'
import { logout } from "@/app/logout/actions";
import Button from "../../Button/Button";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import DropDownMenu from "../../DropDownMenu/DropDownMenu";

export default function RightHeaderMenu({ ...props }) {
    const { data, error } = props;
    const router = useRouter()



    function handleDropMenuclick(data: any) {


        if (data === 'Dashboard') {
            window.location.href = '/dashboard'
        }
        if (data === 'Logout') {
            logout();
        }
    }



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
                    <DropDownMenu dropdownItems={['Dashboard', 'Logout']} menuClick={handleDropMenuclick}><img
                        alt=""
                        src="placeholder-character.png"
                        className="inline-block h-12 w-12 rounded-lg ring-2 ring-white"
                    /></DropDownMenu>
                </div>
            }
        </div>
    )
}