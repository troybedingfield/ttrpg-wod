'use client'
import Button from "@/app/components/Button/Button";
import ToggleSwitch from "@/app/components/ToggleSwitch/ToggleSwitch";
import { createClient } from "@/utils/supabase/client";
import { useRef, useState } from "react";

export default function UserSettings({ ...props }) {
    const { data, user } = props;

    const supabase = createClient()


    const [settingsData, setSettingsData] = useState(data[0]);
    const [darkMode, setDarkMode] = useState(data[0].darkMode);

    const form = useRef<any | undefined>(null);

    function handleToggleChange(event: any) {
        console.log(event.target.checked)
        setDarkMode(event.target.checked)
        if (event.target.checked === true) {
            console.log(document.documentElement)
            document.documentElement.setAttribute('data-mode', 'dark')
        } else {
            document.documentElement.setAttribute('data-mode', '')
        }
    }

    async function handleDarkModeSubmit(event: any, form: any) {
        event.preventDefault();
        let darkMode = form.current[0].checked;

        // const { data, error } = await supabase
        //     .from('usersettings')
        //     .update({
        //         darkMode: darkMode
        //     })
        //     .eq('id', user)
        //     .select()

        // if (error) {
        //     console.log(error);
        // }

        // if (!error) {
        //     setDarkMode(darkMode)
        // }
    }


    return (


        <form ref={form} action="" onSubmit={(e) => handleDarkModeSubmit(e, form)}>

            <ToggleSwitch checked={darkMode} change={(e: any) => handleToggleChange(e)}>Dark Mode</ToggleSwitch>


            <Button type="submit">Save</Button>
        </form>

    )
}