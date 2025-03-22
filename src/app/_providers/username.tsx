'use client'
import { useState } from "react";
import { UsernameContext } from "../context/username";
import { createClient } from "@/utils/supabase/client";
import { userAgent } from "next/server";

export default function UsernameProvider({ ...props }) {
    const { children } = props

    // const supabase = createClient()

    // const { data, error } = await supabase.auth.getUser()
    // if (error || !data?.user) {

    // }

    // const { data: profile, error: profileError } = await supabase.from("userprofiles")
    //     .select()
    //     .eq('id', data?.user?.id)

    const [profileData, setProfileData] = useState({});



    return (
        <UsernameContext.Provider value={{ profileData, setProfileData }}>
            {children}
        </UsernameContext.Provider>
    )
}