'use client'
import Button from '@/app/components/Button/Button'
import ToggleSwitch from '@/app/components/ToggleSwitch/ToggleSwitch'
import './Profile.scss'
import { createClient } from '@/utils/supabase/client'
import { useRef, useState } from 'react'
export default function Profile({ ...props }) {
    const { data, profile, user } = props;

    const supabase = createClient()


    const [isEditing, setIsEditing] = useState(false);

    const [profileData, setProfileData] = useState(profile[0])
    const [firstName, setFirstName] = useState(profile[0].first_name)
    const [lastName, setLastName] = useState(profile[0].last_name)
    const [username, setUsername] = useState(profile[0].username)


    const form = useRef<any | undefined>();

    async function handleProfileUpdateSubmit(event: any, form: any) {
        event.preventDefault();
        let username = form.current[0].value;
        let firstName = form.current[1].value;
        let lastName = form.current[2].value;

        const { data, error } = await supabase
            .from('userprofiles')
            .update({
                first_name: firstName,
                last_name: lastName,
                username: username

            })
            .eq('id', user)
            .select()

        if (error) {
            console.log(error);
        }

        if (!error) {
            setFirstName(firstName);
            setLastName(lastName);
            setUsername(username);

            setIsEditing(isEditing => !isEditing)
        }
    }

    function editProfile() {
        setIsEditing(isEditing => !isEditing)
    }


    return (
        <>
            <div id="sectionTitle">
                <div className="sectionTitle flex gap-2">Profile Settings <a onClick={() => editProfile()}><i
                    className="icon icon-edit-b"></i></a></div>
            </div>
            {!isEditing &&
                <div className='flex flex-col gap-2'>
                    <div>Username: {username}</div>
                    <div>First Name: {firstName}</div>
                    <div>Last Name: {lastName}</div>

                </div>
            }
            {isEditing &&
                <form ref={form} className='flex flex-col gap-2' action="" onSubmit={(e) => handleProfileUpdateSubmit(e, form)}>


                    <div>Username: <input type="text" defaultValue={username} /></div>
                    <div>First Name: <input type="text" defaultValue={firstName} /></div>
                    <div>Last Name: <input type="text" defaultValue={lastName} /></div>








                    <Button maxWidth="70" type="submit">Save</Button>
                </form>}

        </>
    )
}