import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createClient } from '@/utils/supabase/server';



const supabase = createClient()



async function profileData() {
    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {

    }

    const { data: userProfile, error: userProfileError } = await supabase
        .from("userprofiles")
        .select()
        .eq('id', data?.user?.id)

    return userProfile
}

export interface UserProfileState {
    userName: {}
}

const initialState: UserProfileState = {
    userName: profileData()
}


export const userprofileSlice = createSlice({


    name: 'userprofile',
    initialState,
    reducers: {
        userName: (state) => {

            return state;


        }

    },
})

// Action creators are generated for each case reducer function
export const {
    // increment, decrement, incrementByAmount 
    userName
} = userprofileSlice.actions

export default userprofileSlice.reducer