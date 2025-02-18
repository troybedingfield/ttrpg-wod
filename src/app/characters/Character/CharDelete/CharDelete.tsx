'use client'
import Button from "@/app/components/Button/Button";
import { useFormState } from "react-dom";
import { deleteChar } from "../../actions";
import { useActionState } from "react";


const initialState = {
    message: null
};

export default function CharDelete({ ...props }) {
    const { params, id } = props;


    let charID;

    if (params) {
        charID = params.characterID
    }

    if (id) {
        charID = id;
    }


    const [state, formAction] = useActionState(deleteChar, null)

    return (
        <>
            {/* <Button buttonClick={() => deleteCharacter()}>Delete Character</Button> */}

            <form className="container flex w-full" action={formAction}>
                <input type="hidden" name="id" value={charID} />
                <Button classNames={'w-full'} type="submit">Delete Character</Button>

            </form>
        </>
    )
}